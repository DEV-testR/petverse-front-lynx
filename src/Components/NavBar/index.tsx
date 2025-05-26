import "./styles.scss";
import backIcon from "../../assets/back.png";

interface NavBarProps {
    onBack?: () => void;
    title?: string;
}

export default function NavBar({ onBack, title }: NavBarProps) {
    return (
        <view className="nav-bar">
            <view className="left-icon" bindtap={onBack}>
                <image src={backIcon}/>
            </view>

            <text className="nav-title">{title}</text>
        </view>
    );
}