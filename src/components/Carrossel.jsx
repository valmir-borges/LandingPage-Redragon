// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Style from './css/carrossel.module.css'

import Image1 from './img/Image1-Carrossel.png'
import Image2 from './img/Image2-Carrossel.png'
import Image3 from './img/Image3-Carrossel.png'
import Image4 from './img/Image4-Carrossel.png'
import Image5 from './img/Image5-Carrossel.png'
import Image6 from './img/Image6-Carrossel.png'
import Image7 from './img/Image7-Carrossel.png'

import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


function Carrossel(){
    const slides = [Image1, Image2, Image3, Image4, Image5, Image6, Image7]
    return (
        <>
        <div className={Style.container}>
            <h2>ULTIMOS LANÇAMENTOS</h2>
            <span>Periféricos de ultima geração para atender desde o uso básico até a elite</span>
            <Swiper
            style={{
              "--swiper-theme-color": "#ff0101s",
              "--swiper-navigation-color" : "#ff0101s"
            }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                loop
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                spaceBetween={30}
                slidesPerView={1}
            >
                {slides.map(slides => 
                    <SwiperSlide>
                        <img src={slides} alt={slides} className={Style.slideitem}/>
                    </SwiperSlide>
                    )}
            </Swiper>
        </div>
        </>
    )
}

export default Carrossel