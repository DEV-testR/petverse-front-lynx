import "./counter.scss";
import Wrapper from "../../components/Wrapper/wrapper.component.tsx";
import {useNavigate} from "react-router";
import {useState} from "@lynx-js/react";
import {Button} from "../../components/Button/button.component.js";

export function Counter()  {
    const nav = useNavigate();
    const [count,setCount] = useState<number>(0);

    const addCnt = () => {
        setCount(count+1);
    }

    const diffCnt = () => {
        console.log(count);
        if (count === 0) {
            setCount(0);
            return;
        }

        setCount(count-1);
    }

    return (
        <view className="app">
            <Wrapper>
                <view className="counter">
                    <text className="title">Our counter app</text>
                    <view className="content">
                        <view className="counter-btn" bindtap={diffCnt}>
                            <text className="title" >-</text>
                        </view>
                        <text className="cnt-value">{count}</text>
                        <view className="counter-btn" bindtap={addCnt}>
                            <text className="title" >+</text>
                        </view>
                    </view>
                    <view className="reset-btn">
                        <text bindtap={() => setCount(0)}>Reset Count</text>
                    </view>
                </view>
            </Wrapper>
            <Button onClick={() => nav('/')}>Back</Button>
        </view>
    );
}