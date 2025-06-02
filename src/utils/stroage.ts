const LynxStorage = {
    /**
     * Get a value from native storage.
     * @param key
     * @returns Promise<string | null>
     */
    async getItem(key: string): Promise<string | null> {
        try {
            const value = NativeModules.NativeLocalStorageModule.getStorageItem(key);
            console.log(`[LynxStorage] getItem('${key}'):`, value);
            return value;
        } catch (error) {
            console.error(`[LynxStorage] Failed to get item '${key}':`, error);
            throw error;
        }
    },

    /**
     * Set a value in native storage.
     * @param key
     * @param value
     */
    async setItem(key: string, value: string): Promise<void> {
        try {
            NativeModules.NativeLocalStorageModule.setStorageItem(key, value);
            console.log(`[LynxStorage] setItem('${key}', '${value}')`);
        } catch (error) {
            console.error(`[LynxStorage] Failed to set item '${key}':`, error);
            throw error;
        }
    },

    /**
     * Clear all native storage (acts like removeItem until removeItem is supported)
     * @param key
     */
    async removeItem(key: string): Promise<void> {
        try {
            // If `removeStorageItem` is available, use it:
            // NativeModules.NativeLocalStorageModule.removeStorageItem(key);

            // Currently only full clear is supported
            NativeModules.NativeLocalStorageModule.clearStorage();
            console.log(`[LynxStorage] removeItem('${key}'): cleared all (no per-key removal yet)`);
        } catch (error) {
            console.error(`[LynxStorage] Failed to remove item '${key}':`, error);
            throw error;
        }
    },
};

export default LynxStorage;
