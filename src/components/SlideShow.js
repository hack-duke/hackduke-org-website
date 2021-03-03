import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Autoplay } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import './SlideShow.css';

SwiperCore.use([EffectFade, Autoplay]);

export default ({photos}) => {
    return (
        <Swiper
            effect="fade"
            autoplay={{delay: 3000}}
            speed={1000}
        >
            {photos.map(i => {
                return <SwiperSlide><img alt="" className={"hd-photo-template"} src={i}/></SwiperSlide>;
            })}
        </Swiper>
    );
};