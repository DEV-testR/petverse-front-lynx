import {root} from "@lynx-js/react"
import {MemoryRouter, Route, Routes} from "react-router";
import {App} from "./App.tsx"
import Home from "./screens/home/home.tsx";
import Product from "./screens/product/product.tsx";
import {Counter} from "./screens/counter/counter.tsx";
import {LoginScreen} from "./screens/login/login.js";
import {ToastProvider} from "./components/ToastMessage/toastMessage.component.js";

root.render(
    <MemoryRouter>
        <ToastProvider>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/counter" element={<Counter/>}/>
            <Route path="/login" element={<LoginScreen/>}/>
        </Routes>
        </ToastProvider>
    </MemoryRouter>,
);

if (import.meta.webpackHot) {
    import.meta.webpackHot.accept();
}
