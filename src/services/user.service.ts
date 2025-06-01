// src/services/user.service.ts
// นำเข้าเฉพาะที่จำเป็น
import {BaseService} from "./base.service.js";
import type {User} from "../models/user.model.js";
import LynxStorage from "../utils/stroage.js";

const USER_API_PATH = '/v1/users';
const USER_DATA_KEY = 'userData';

export class UserService extends BaseService {

    async setUser(userData: User | null): Promise<void> {
        if (!userData) {
            await this.removeUser();
            return;
        }
        await LynxStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
    }

    async getUser(): Promise<User | null> {
        const item: string | null = await LynxStorage.getItem(USER_DATA_KEY);
        if (!item) {
            return null;
        }
        try {
            return JSON.parse(item);
        } catch (e) {
            console.error('Error parsing user data from LynxStorage', e);
            await this.removeUser();
            return null;
        }
    }

    async removeUser(): Promise<void> {
        await LynxStorage.removeItem(USER_DATA_KEY);
    }

    // เมธอด fetchUser จะคืนค่าเป็น Promise<User | null>
    async fetchUser(): Promise<User | null> {
        try {
            const user = await this.fetchApi<User>(`${USER_API_PATH}/me`, {
                method: 'GET',
            });
            await this.setUser(user);
            return user;
        } catch (err) {
            console.error('Failed to fetch user:', err);
            await this.removeUser();
            // โยน error ออกไปเพื่อให้ Component ที่เรียกใช้จัดการ
            throw err;
        }
    }
}

export const userService = new UserService();