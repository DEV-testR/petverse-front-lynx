// src/utils/storage.ts

// ** สิ่งสำคัญ: คุณต้องแน่ใจว่า NativeLocalStorageModule ถูก expose โดย Lynx **
// ** และมีเมธอด getStorageItem, setStorageItem, clearStorage ตามที่เรียกใช้ **
// ** การประกาศ NativeModules อาจจะขึ้นอยู่กับ global scope ของ Lynx **
declare var NativeModules: {
    NativeLocalStorageModule: {
        getStorageItem(key: string): string | null;
        setStorageItem(key: string, value: string): void;
        clearStorage(): void;
        // หากมีเมธอดแบบ async/callback/Promise จาก Native ก็สามารถเพิ่มตรงนี้ได้
    };
    // เพิ่ม Native Modules อื่นๆ ที่คุณมี เช่น NativeKeychainModule
};

const LynxStorage = {
    // getItem จะคืนค่า Promise<string | null>
    getItem: async (key: string): Promise<string | null> => {
        return new Promise((resolve, reject) => {
            try {
                // เรียกใช้ Native Module ที่เป็น Synchronous
                const value = NativeModules.NativeLocalStorageModule.getStorageItem(key);
                console.log(`[Storage] getItem('${key}'):`, value);
                debugger
                resolve(value);
            } catch (error) {
                console.error(`[Storage] Failed to get item '${key}':`, error);
                reject(error);
            }
        });
    },

    // setItem จะคืนค่า Promise<void>
    setItem: async (key: string, value: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            try {
                // เรียกใช้ Native Module ที่เป็น Synchronous
                debugger
                NativeModules.NativeLocalStorageModule.setStorageItem(key, value);
                console.log(`[Storage] setItem('${key}'): '${value}'`);
                resolve();
            } catch (error) {
                console.error(`[Storage] Failed to set item '${key}':`, error);
                reject(error);
            }
        });
    },

    // removeItem จะคืนค่า Promise<void>
    removeItem: async (key: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            try {
                // เรียกใช้ Native Module ที่เป็น Synchronous
                NativeModules.NativeLocalStorageModule.clearStorage(); // หรือ removeItem(key) ถ้ามี
                console.log(`[Storage] removeItem('${key}'): Cleared all storage (assuming clearStorage for now)`);
                // หาก NativeLocalStorageModule.clearStorage() ลบทั้งหมด
                // และคุณต้องการ removeItem แค่บางอัน
                // คุณอาจจะต้องเปลี่ยน Native Module ให้มีเมธอด removeItem(key) โดยเฉพาะ
                resolve();
            } catch (error) {
                console.error(`[Storage] Failed to remove item '${key}':`, error);
                reject(error);
            }
        });
    }
};

export default LynxStorage;