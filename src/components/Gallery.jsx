import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

import gallery1 from '../assets/gallery_1.png';
import gallery2 from '../assets/gallery_2.png';
import gallery3 from '../assets/gallery_3.png';
import gallery4 from '../assets/gallery_4.png';

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery1];

const Gallery = () => {
    return (
        <section className="py-24 bg-darkNavy text-white overflow-hidden relative">
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-5xl font-black mb-4">OUR GALLERY</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primaryRed to-primaryBlue mx-auto rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 flex justify-center items-center relative z-10 max-w-lg">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards, Navigation, Autoplay]}
                    className="w-[280px] h-[400px] md:w-[350px] md:h-[500px]"
                    cardsEffect={{
                        slideShadows: true,
                        rotate: true,
                        perSlideOffset: 10,
                        perSlideRotate: 2,
                    }}
                    autoplay={{ delay: 2000 }}
                >
                    {galleryImages.map((img, i) => (
                        <SwiperSlide key={i} className="rounded-3xl shadow-2xl border-4 border-white/10 overflow-hidden bg-white">
                            <img src={img} alt="Gallery" className="w-full h-full object-cover" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primaryBlue/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primaryRed/20 rounded-full blur-3xl"></div>
        </section>
    )
}
export default Gallery;
