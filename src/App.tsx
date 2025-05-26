import { useCallback, useEffect, useState } from '@lynx-js/react'

import './App.css';
import arrow from './assets/arrow.png'
import lynxLogo from './assets/lynx-logo.png'
import reactLynxLogo from './assets/react-logo.png'
import {useNavigate} from "react-router";
import Button from "./Components/Button/index.js";

export function App(props: {
  onMounted?: () => void
}) {
  const [alterLogo, setAlterLogo] = useState(false)
  const nav = useNavigate();

  useEffect(() => {
    console.info('Hello, ReactLynx')
    props.onMounted?.()
  }, [])

  const [count, setCount] = useState<number>(0);
  const increment = () => {
    console.log(`increment ${count}`);
    setCount(count + 1);
  };

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
          <text className='Description'>Tap the logo and have fun!</text>
          <text className='Hint'>
            Edit<text style={{ fontStyle: 'italic' }}>{' src/App.tsx '}</text>
            to see updates!
          </text>


          <Button label="Navigate to Home" onClick={() => nav('/home')} />
          <Button label="Swiper Empty" onClick={() => nav('/SwiperEmpty')} />
          <Button label="Increment Click" onClick={increment} />
          <Button label="Clear Increment" onClick={() => setCount(0)} />
          <view className="container">
            <text className="count">Clicks: {count}</text>
          </view>
        </view>
        <view style={{ flex: 1 }}></view>
      </view>
    </view>
  )
}
