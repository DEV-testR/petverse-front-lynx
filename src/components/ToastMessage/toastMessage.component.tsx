import { useState, useEffect, useCallback, createContext, useContext } from '@lynx-js/react';
import './toastMessages.component.scss'; // สไตล์สำหรับ ToastMessages

interface ToastMessage {
    id: string; // ใช้ id เพื่อการลบข้อความที่เฉพาะเจาะจง
    severity: 'success' | 'error' | 'warn' | 'info';
    summary: string;
    detail?: string; // รายละเอียดข้อความ (Optional)
    duration?: number; // ระยะเวลาที่แสดง (มิลลิวินาที), ค่าเริ่มต้น 3000ms
}

// สร้าง Context เพื่อให้ Components อื่นๆ สามารถส่งข้อความ Toast ได้
interface ToastContextType {
    addToast: (message: Omit<ToastMessage, 'id'>) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Hook สำหรับใช้ใน Components อื่นๆ เพื่อส่งข้อความ Toast
export const useToast = () => {
    const context = useContext(ToastContext);
    if (context === undefined) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

interface ToastProviderProps {
    children: React.ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
    const [toasts, setToasts] = useState<ToastMessage[]>([]);

    // Function สำหรับเพิ่ม Toast Message
    const addToast = useCallback((message: Omit<ToastMessage, 'id'>) => {
        const newToast: ToastMessage = {
            ...message,
            id: Math.random().toString(36).substring(2, 9), // สร้าง ID ที่ไม่ซ้ำกัน
            duration: message.duration || 3000, // กำหนด duration เริ่มต้น
        };
        setToasts(prevToasts => [...prevToasts, newToast]);
    }, []);

    // Effect สำหรับจัดการการลบ Toast โดยอัตโนมัติ
    useEffect(() => {
        if (toasts.length > 0) {
            const timer = setTimeout(() => {
                // ลบ Toast ตัวแรกออกหลังจาก duration ที่กำหนด
                setToasts(prevToasts => prevToasts.slice(1));
            }, toasts[0].duration); // ใช้ duration ของ Toast ตัวแรกที่กำลังแสดง

            return () => clearTimeout(timer); // Clear timer เมื่อ Component unmount หรือ toasts เปลี่ยน
        }
    }, [toasts]); // Re-run effect เมื่อ toasts array เปลี่ยน

    // Context Value
    const contextValue = { addToast };

    return (
        <ToastContext.Provider value={contextValue}>
            {children}
            {/* Toast UI */}
            <view className="toast-container">
                {toasts.map(toast => (
                    <view key={toast.id} className={`toast-item toast-${toast.severity}`}>
                        <text className="toast-summary">{toast.summary}</text>
                        {toast.detail && <text className="toast-detail">{toast.detail}</text>}
                    </view>
                ))}
            </view>
        </ToastContext.Provider>
    );
}