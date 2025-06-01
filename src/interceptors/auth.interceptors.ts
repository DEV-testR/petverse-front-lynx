// src/utils/http-client.ts (สร้างไฟล์นี้ขึ้นมา)
import {authService} from '../services/auth.service.ts'; // นำเข้า authService
import {BehaviorSubject, filter, from, Observable, switchMap, take, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

// ตัวแปรสถานะสำหรับการ Refresh Token
let isRefreshing = false;
let refreshTokenSubject = new BehaviorSubject<string | null>(null);

/**
 * Wrapper สำหรับ fetch API เพื่อทำหน้าที่คล้าย Interceptor
 * @param url URL ของ API
 * @param options Fetch Request Init Options
 * @returns Observable ของ Response
 */
export function authenticatedFetch<T>(url: string, options?: RequestInit): Observable<T> {
    let authOptions: RequestInit = { ...options };

    // 1. แนบ Access Token
    const accessToken = authService.getAccessToken();
    if (accessToken) {
        authOptions.headers = {
            ...authOptions.headers,
            Authorization: `Bearer ${accessToken}`,
        };
    }

    return from(
        fetch(url, authOptions).then(async response => {
            // 2. ดักจับ Error 401
            if (response.status === 401) {
                if (!isRefreshing) {
                    isRefreshing = true;
                    refreshTokenSubject.next(null); // ตั้งค่าเป็น null เพื่อรอ Token ใหม่
                    await authService.removeAccessToken();

                    // พยายาม Refresh Token
                    return authService.refreshToken().pipe(
                        switchMap(authResponse => {
                            isRefreshing = false;
                            const newAccessToken = authResponse.accessToken;
                            if (newAccessToken) {
                                refreshTokenSubject.next(newAccessToken); // ส่ง Token ใหม่ให้กับ request ที่รออยู่

                                // Retry request เดิมด้วย Token ใหม่
                                const retryOptions: RequestInit = {
                                    ...options,
                                    headers: {
                                        ...options?.headers,
                                        Authorization: `Bearer ${newAccessToken}`,
                                    },
                                };
                                return from(fetch(url, retryOptions).then(res => res.json()));
                            }
                            authService.logout().subscribe(); // Logout ผู้ใช้
                            throw new Error('Refresh token failed: No new access token');
                        }),
                        catchError(refreshError => {
                            isRefreshing = false;
                            authService.logout().subscribe(); // Logout ผู้ใช้
                            return throwError(() => refreshError);
                        })
                    ).toPromise(); // แปลง Observable กลับเป็น Promise เพื่อให้ then chain ของ fetch รับได้
                } else {
                    // หากมี request อื่นกำลัง Refresh Token อยู่ ให้รอ Token ใหม่
                    return refreshTokenSubject.pipe(
                        filter(token => token != null),
                        take(1),
                        switchMap(token => {
                            const retryOptions: RequestInit = {
                                ...options,
                                headers: {
                                    ...options?.headers,
                                    Authorization: `Bearer ${token!}`,
                                },
                            };
                            return from(fetch(url, retryOptions).then(res => res.json()));
                        })
                    ).toPromise(); // แปลง Observable กลับเป็น Promise
                }
            }

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
    );
}

// ตัวอย่างการใช้งานใน Service:
// export class UserService {
//   fetchUser(): Observable<User | null> {
//     return authenticatedFetch<User>(`${API_URL}/me`).pipe(
//       tap((userData: User) => this.setUser(userData)),
//       catchError(err => {
//         console.error('Failed to fetch user:', err);
//         this.removeUser();
//         return of(null);
//       })
//     );
//   }
// }