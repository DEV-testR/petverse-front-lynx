import { root } from "@lynx-js/react";
import "./styles.scss";
import {Page} from "../Components/Page/index.js";
import {Swiper} from "./Swiper.js";
import {picsArr} from "../utils/pics.js";

const easing = (x: number) => {
    "main thread";
    return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
};

export default function App() {
    return (
        <Page>
            <Swiper data={picsArr} main-thread:easing={easing} duration={300} />
        </Page>
    );
}

root.render(<App />);