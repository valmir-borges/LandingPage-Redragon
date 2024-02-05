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
        <div className={Style.container} id='carrossel'>
            <h2>ULTIMOS LANÇAMENTOS</h2>
            <span>Periféricos de ultima geração para atender desde o uso básico até a elite</span>
            <Swiper style={{ "--swiper-theme-color": "#ff0101s","--swiper-navigation-color" : "#ff0101s"}} className={Style.teste}
                pagination={{clickable: true}}
                modules={[Navigation,Scrollbar,A11y]}
                navigation
                spaceBetween={15}
                slidesPerView={2}
                loop
                breakpoints={{
                320: {
                    slidesPerView: 1,
                    },
                425: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 1,
                },
                1440:{
                    slidesPerView: 2,
                    spaceBetween: 30,
                }
                }}
            >
                {slides.map(slides => 
                    <SwiperSlide>
                        <img src={slides} alt={slides} className={Style.item}/>
                    </SwiperSlide>
                    )}
            </Swiper>
        </div>
        </>
    )
}
//            style={{
//    "--swiper-theme-color": "#ff0101s",
//    "--swiper-navigation-color" : "#ff0101s"
//  }}
export default Carrossel