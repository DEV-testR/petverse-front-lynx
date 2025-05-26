import { root } from "@lynx-js/react";
import "./styles.scss";
import {Page} from "../Components/Page/index.js";
import {Swiper} from "../Swiper/Swiper.js";
import {picsArr} from "../utils/pics.js";

export default function SwiperEmpty() {
    return (
        <Page>
            <Swiper data={picsArr} />
        </Page>
    );
}

root.render(<SwiperEmpty />);