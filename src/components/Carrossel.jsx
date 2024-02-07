// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay'

//Import de Style próprio
import Style from './css/carrossel.module.css'

//Import de Imagens
import Image1 from './img/Image1-Carrossel.png'
import Image2 from './img/Image2-Carrossel.png'
import Image3 from './img/Image3-Carrossel.png'
import Image4 from './img/Image4-Carrossel.png'
import Image5 from './img/Image5-Carrossel.png'
import Image6 from './img/Image6-Carrossel.png'
import Image7 from './img/Image7-Carrossel.png'
import Image8 from './img/Image8-Carrossel.png'
import Image9 from './img/Image9-Carrossel.png'

import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y,Autoplay, EffectFade } from 'swiper/modules';

function Carrossel(){
    const slides = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9]
    return (
        <>
        <div className={Style.container} id='carrossel'>
            <h2>ULTIMOS LANÇAMENTOS</h2>
            <Swiper style={{ 
                "--swiper-pagination-color": "#FF031D",
                "--swiper-theme-color" : "#FF031D"}} 
                pagination={{clickable: true}}
                modules={[Navigation,Scrollbar,A11y, EffectFade, Autoplay]}
                autoplay={{delay: 4000}}
                effect='fade'
                navigation
                loop
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
export default Carrossel