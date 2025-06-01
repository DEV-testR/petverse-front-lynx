import {useCallback, useEffect, useState} from "@lynx-js/react"
import {useNavigate} from "react-router";

import "./App.css";
import lynxLogo from "./assets/lynx-logo.png"
import reactLynxLogo from "./assets/react-logo.png"
import {Button} from "./components/Button/button.component.js";

export function App(props: {
    onMounted?: () => void
}) {
    const [alterLogo, setAlterLogo] = useState(false)
    const nav = useNavigate();

    useEffect(() => {
        console.info('Hello, ReactLynx')
        props.onMounted?.()
    }, [])

    const onTap = useCallback(() => {
        setAlterLogo(!alterLogo)
    }, [alterLogo])

    return (
        <view>
            <view className='Background'/>
            <view className='App'>
                <view className='Banner'>
                    <view className='Logo' bindtap={onTap}>
                        {alterLogo
                            ? <image src={reactLynxLogo} className='Logo--react'/>
                            : <image src={lynxLogo} className='Logo--lynx'/>}
                    </view>
                    <text className='Title'>React</text>
                    <text className='Subtitle'>on Lynx</text>
                </view>
                <Button onClick={() => nav('/home')}>Navigate to Home</Button>
                <Button onClick={() => nav('/product')}>Navigate to Product</Button>
                <Button onClick={() => nav('/counter')}>Navigate to Counter</Button>
                <Button onClick={() => nav('/login')}>Navigate to Login</Button>
                <view style={{flex: 1}}></view>
            </view>
        </view>
    )
}
