import {root} from '@lynx-js/react'
import {MemoryRouter, Route, Routes} from "react-router";
import {App} from './App.jsx'
import {Home} from "./Components/Home/home.component.js";
import SwiperEmpty from "./SwiperEmpty/App.js";

/*root.render(<App />)*/
root.render(
    <MemoryRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/SwiperEmpty" element={<SwiperEmpty/>}/>
        </Routes>
    </MemoryRouter>,
);

if (import.meta.webpackHot) {
    import.meta.webpackHot.accept();
}
