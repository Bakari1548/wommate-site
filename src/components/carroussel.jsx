import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import Img_1 from '../assets/images/imgPartenaire1.png'
import Img_3 from '../assets/images/imgPartenaire3.jpg'
import Img_4 from '../assets/images/imgPartenaire4.jpg'
import Img_5 from '../assets/images/caroussel1.jpg'
import Img_6 from '../assets/images/caroussel2.jpg'
import Img_7 from '../assets/images/caroussel3.jpg'

//  Pour utiliser la pagination, les boutons etc...
import { Navigation, Pagination } from 'swiper/modules';



const Carroussel = () => {
    return (
        <Swiper
            className="w-3/4"
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            loop={true}
            pagination={{ clickable: false }}>
            <SwiperSlide>
                <img className="w-40 h-40 object-cover rounded-full" src={Img_1} alt="Image 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-40 h-40 object-cover rounded-full" src={Img_3} alt="Image 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-40 h-40 object-cover rounded-full" src={Img_4} alt="Image 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-40 h-40 object-cover rounded-full" src={Img_5} alt="Image 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-40 h-40 object-cover rounded-full" src={Img_6} alt="Image 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-40 h-40 object-cover rounded-full" src={Img_7} alt="Image 2" />
            </SwiperSlide>
            {/* Ajoutez plus de slides ici */}
        </Swiper>

    //     <Swiper
    //     className="w-1/2"
    //   // install Swiper modules
    //   modules={[Navigation, Pagination]}
    //   spaceBetween={50}
    //   slidesPerView={3}
    //   navigation
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    // >
    //   <SwiperSlide>Slide 1</SwiperSlide>
    //   <SwiperSlide>Slide 2</SwiperSlide>
    //   <SwiperSlide>Slide 3</SwiperSlide>
    //   <SwiperSlide>Slide 4</SwiperSlide>
    // </Swiper>
    );
}

export default Carroussel;
