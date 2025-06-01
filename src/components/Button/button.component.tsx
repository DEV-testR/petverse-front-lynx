import "./button.component.scss";

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string; // เพิ่ม className เพื่อให้สามารถเพิ่ม class ได้จากภายนอก
}

export function Button({ onClick, children, className }: ButtonProps) {
    return (
        // ใช้ <view> เป็นปุ่ม และจัดการ Event ด้วย bindtap
        <view className={`button-component ${className || ''}`} bindtap={onClick}>
            <text className="button-text">{children}</text>
        </view>
    );
}