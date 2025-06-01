// src/services/base.service.ts

import LynxStorage from "../utils/stroage.js";

interface ApiErrorDetail {
    message: string;
    statusCode?: number;
    errors?: any;
}

export class BaseService {
    protected API_BASE_URL: string = 'http://localhost:48080/api';
    protected TOKEN_KEY: string = 'access_token';

    protected async fetchApi<T>(path: string, options?: RequestInit): Promise<T> {
        const url = `${this.API_BASE_URL}${path}`;
        let headers = options?.headers || {};
        const isAuthRequest = path.startsWith('/auth');

        // Attach Access Token
        if (!isAuthRequest || path === '/auth/refresh') {
            const accessToken = await LynxStorage.getItem(this.TOKEN_KEY);
            debugger;
            if (accessToken) {
                headers = {
                    ...headers,
                    'Authorization': `Bearer ${accessToken}`,
                };
            }
        }

        try {
            const response = await fetch(url, {
                ...options,
                headers: headers,
                credentials: 'include',
            });

            // --- DEBUG: ตรวจสอบสถานะและ Headers ที่ได้รับ ---
            console.log(`[fetchApi] Response for ${url}: status=${response.status}, ok=${response.ok}`);
            console.log(`[fetchApi] Response Headers for ${url}:`);
            response.headers.forEach((value, name) => {
                console.log(`  ${name}: ${value}`);
            });

            // ตรวจสอบ Error Response
            if (!response.ok) {
                let errorData: any = {};
                try {
                    const errorText = await response.text();
                    console.error(`[fetchApi] Error Response Body (Text):`, errorText);
                    // พยายาม parse เป็น JSON ถ้าเป็นไปได้
                    if (errorText.startsWith('{') && errorText.endsWith('}')) { // เช็คคร่าวๆ ว่าน่าจะเป็น JSON
                        errorData = JSON.parse(errorText);
                    }
                } catch (e) {
                    console.error(`[fetchApi] Error parsing error response body or not JSON:`, e);
                }

                const errorDetail: ApiErrorDetail = {
                    message: errorData.message || `HTTP error! Status: ${response.status} for ${url}`,
                    statusCode: response.status,
                    errors: errorData.errors || undefined,
                };
                throw new Error(JSON.stringify(errorDetail));
            }

            // --- จัดการ Success Response Body ---
            const contentType = response.headers.get("content-type");
            console.log(`[fetchApi] Content-Type for ${url}: ${contentType}`);

            if (response.status === 204) {
                // 204 No Content - คืนค่าเป็น null/void
                return null as T;
            } else if (contentType && contentType.includes("application/json")) {
                // หาก Content-Type บอกว่าเป็น JSON
                return await response.json();
            } else {
                // หาก Content-Type เป็น null หรือไม่ใช่ application/json
                // ให้พยายามอ่านเป็นข้อความก่อน แล้วลอง parse JSON ถ้าทำได้
                const textBody = await response.text();
                console.log(`[fetchApi] Attempting to parse non-JSON or null Content-Type body as JSON:`, textBody);
                try {
                    // ตรวจสอบว่า Body เป็น JSON ที่ถูกต้องหรือไม่
                    if (textBody.startsWith('{') && textBody.endsWith('}')) {
                        return JSON.parse(textBody);
                    }
                } catch (e) {
                    console.warn(`[fetchApi] Body is not valid JSON, returning as text for ${url}:`, e);
                }
                // ถ้าไม่ใช่ JSON หรือ parse ไม่ได้ ให้คืนค่าเป็น text (หรือ null ถ้า T เป็น void)
                return textBody as T;
            }

        } catch (error: any) {
            console.error(`[BaseService] Global Catch Error for ${url}:`, error);
            if (error instanceof Error && typeof error.message === 'string' && error.message.startsWith('{')) {
                try {
                    throw JSON.parse(error.message);
                } catch (parseError) {
                    throw { message: "An unexpected error occurred during error parsing.", originalError: error };
                }
            }
            throw { message: error.message || "Network error or unhandled fetch error.", originalError: error };
        }
    }
}