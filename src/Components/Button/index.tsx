import "./styles.scss";

interface ButtonProps {
    onClick?: () => void; // เพิ่ม prop สำหรับ dynamic event
    label?: string;
}

export default function Button({onClick, label = "Click Me"}: ButtonProps) {
    return (
        <view
            className="btn"
            bindtap={onClick} // แนบ event handler ที่ส่งเข้ามา
        >
            <text className="btn-text">{label}</text>
        </view>
    );
}
