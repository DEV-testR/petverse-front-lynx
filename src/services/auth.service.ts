// src/services/auth.service.ts
// นำเข้าเฉพาะที่จำเป็น

import {BaseService} from "./base.service.js";
import LynxStorage from "../utils/stroage.js";
import type {LoginRequest} from "../models/loginRequest.model.js";
import type {AuthResponse} from "../models/authResponse.model.js";
import type {RegisterRequest} from "../models/registerRequest.model.js";
import type {User} from "../models/user.model.js";

const AUTH_API_PATH = '/auth';

export class AuthService extends BaseService {

    async getAccessToken(): Promise<string | null> {
        return await LynxStorage.getItem(this.TOKEN_KEY);
    }

    async setAccessToken(token: string): Promise<void> {
        debugger;
        await LynxStorage.setItem(this.TOKEN_KEY, token);
    }

    async removeAccessToken(): Promise<void> {
        await LynxStorage.removeItem(this.TOKEN_KEY);
    }

    // เมธอด Login จะคืนค่าเป็น Promise<AuthResponse>
    async login(form: LoginRequest): Promise<AuthResponse> {
        const res = await this.fetchApi<AuthResponse>(`${AUTH_API_PATH}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });
        if (res && res.accessToken) {
            await this.setAccessToken(res.accessToken);
        } else {
            console.warn("[AuthService] Login response did not contain accessToken:", res);
        }
        return res;
    }

    // เมธอด Register จะคืนค่าเป็น Promise<User>
    async register(form: RegisterRequest): Promise<User> {
        return await this.fetchApi<User>(`${AUTH_API_PATH}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });
    }

    // เมธอด refreshToken จะคืนค่าเป็น Promise<AuthResponse>
    async refreshToken(): Promise<AuthResponse> {
        const res = await this.fetchApi<AuthResponse>(`${AUTH_API_PATH}/refresh`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
        if (res && res.accessToken) {
            await this.setAccessToken(res.accessToken);
        }
        return res;
    }

    // เมธอด Logout จะคืนค่าเป็น Promise<void>
    async logout(): Promise<void> {
        await this.fetchApi<void>(`${AUTH_API_PATH}/logout`, {
            method: 'POST',
        });
        await this.removeAccessToken(); // ลบ token หลัง logout สำเร็จ
    }

    async isLoggedIn(): Promise<boolean> {
        const token = await this.getAccessToken();
        return !!token;
    }
}

export const authService = new AuthService();