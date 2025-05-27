import {root} from "@lynx-js/react"
import {MemoryRouter, Route, Routes} from "react-router";
import {App} from "./App.tsx"
import Home from "./screens/home/home.tsx";
import Product from "./screens/product/product.tsx";
import {Counter} from "./screens/counter/counter.tsx";

root.render(
    <MemoryRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/counter" element={<Counter/>}/>
        </Routes>
    </MemoryRouter>,
);

if (import.meta.webpackHot) {
    import.meta.webpackHot.accept();
}
