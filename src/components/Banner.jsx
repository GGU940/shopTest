import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import style from "../css/Banner.module.css"

const Banner = () => {
    return (
        <section className={`secBanner ${style.bannerCon}`}>
            <h2 hidden>Banner List</h2>

            <Swiper pagination={true} modules={[Pagination]} className={style.bannerList}>
                <SwiperSlide className={style.slide}>
                    <img src="img/img_bg1.jpg" alt="img" />
                </SwiperSlide>
                <SwiperSlide className={style.slide}>
                    <img src="img/img_bg2.jpg" alt="img" />
                </SwiperSlide>
                <SwiperSlide className={style.slide}>
                    <img src="img/img_bg3.jpg" alt="img" />
                </SwiperSlide>

            </Swiper>

        </section>
    )
}

export default Banner