import { root } from '@lynx-js/react'
import {MemoryRouter, Route, Routes} from "react-router";
import { App } from './App.jsx'
import {Home} from "./components/home/home.component.js";
import 'tailwindcss/utilities.css';

/*root.render(<App />)*/
root.render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </MemoryRouter>,
);

if (import.meta.webpackHot) {
    import.meta.webpackHot.accept();
}
