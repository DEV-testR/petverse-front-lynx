import {useNavigate} from "react-router";
import Container from "../../components/Container/container.component.js";
import "../../App.css";
import close from "../../assets/close.png";
import {useState} from "@lynx-js/react";

const Home = () => {
    const nav = useNavigate();
    const [search, setSearch] = useState<string>("");
    const handleInput = (event: any) => {
        setSearch(event.detail.value);
    };

    return (
        <Container>
            <view>
                <text className="Title">Home</text>
                <view className="inputView">
                    <input
                        // @ts-ignore
                        bindinput={handleInput}
                        className="inputBox"
                        placeholder="Search products here..."
                        value={search}
                    />
                    {search && (
                        <image
                            bindtap={() => setSearch("")}
                            src={close}
                            className="closeIcon"
                        />
                    )}
                </view>
                <text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Beatae modi odit praesentium? Amet asperiores enim fugiat
                    illo iusto optio quae quia quidem,
                    repellat sit tenetur vel. Autem eius similique unde.
                </text>
                <text bindtap={() => nav('/')} className="Subtitle">Back</text>
            </view>
        </Container>
    );
}

export default Home;