import {useNavigate} from "react-router";
import Container from "../../components/Container/container.component.js";
import "../../App.css";

const Product = () => {
    const nav = useNavigate();
    return (
        <Container>
            <view>
                <text className="Title">Product</text>
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

export default Product;