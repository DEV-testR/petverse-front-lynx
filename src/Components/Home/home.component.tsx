import { useNavigate } from 'react-router';
import './home.component.css'
import { useCallback, useEffect, useState } from '@lynx-js/react'

import arrow from '../../assets/arrow.png'
import lynxLogo from '../../assets/lynx-logo.png'
import reactLynxLogo from '../../assets/react-logo.png'
import NavBar from "../NavBar/index.js";
import Button from "../Button/index.js";

export function Home(props: {
    onMounted?: () => void
}) {
    const [alterLogo, setAlterLogo] = useState(false)
    const nav = useNavigate();

    useEffect(() => {
        console.info('Hello, ReactLynx')
        props.onMounted?.()
    }, [])

    const onTap = useCallback(() => {
        'background only'
        setAlterLogo(!alterLogo)
    }, [alterLogo])

    return (
        <view>
            <view className='Background' />
            <view className='App'>
                <view className='Banner'>
                    <view className='Logo' bindtap={onTap}>
                        {alterLogo
                            ? <image src={reactLynxLogo} className='Logo--react' />
                            : <image src={lynxLogo} className='Logo--lynx' />}
                    </view>
                    <text className='Title'>React</text>
                    <text className='Subtitle'>on Lynx</text>
                </view>
                <view className='Content'>
                    <image src={arrow} className='Arrow' />
                    <text className='Description'>This Is Home Tap the logo and have fun!</text>
                    <text className='Hint'>
                        Edit<text style={{ fontStyle: 'italic' }}>{' src/App.tsx '}</text>
                        to see updates!
                        Welcome To Home
                    </text>
                </view>
                <view style={{ flex: 1 }}></view>
                <NavBar title="Home" onBack={() => nav('/')} />
            </view>
        </view>
    )
}
