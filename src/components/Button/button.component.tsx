import "./button.component.scss";

interface ButtonProps {
    onClick?: () => void;
    label?: string;
}

export default function Button({onClick, label = "Click Me"}: ButtonProps) {
    return (
        <view className="btn" bindtap={onClick}>
            <text className="btn-text">{label}</text>
        </view>
    );
}
