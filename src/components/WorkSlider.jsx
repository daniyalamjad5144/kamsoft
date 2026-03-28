import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import thumb1 from '../assets/thumb1.png';
import thumb2 from '../assets/thumb2.png';
// Reusing card images for variety if needed, or just repeating thumbs
import card2d from '../assets/card_2d.png';
import card3d from '../assets/card_3d.png';
import cardGaming from '../assets/card_gaming.png';
import cardLogo from '../assets/card_logo.png';
import star from '../assets/star.png';

const projects = [
    { id: 1, img: card3d },
    { id: 2, img: cardLogo },
    { id: 3, img: cardGaming },
    { id: 4, img: star },
    { id: 5, img: card2d },
];

const WorkSlider = () => {
    return (
        <section className="py-20 bg-white overflow-hidden relative">
            <div className="container mx-auto px-4 text-center mb-12 relative z-10">

                {/* Decorative Arrow (CSS/SVG) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute top-0 left-4 md:left-20 lg:left-1/4 -translate-x-12 hidden md:block"
                >
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-12">
                        <path d="M10 10 C 30 5, 80 5, 85 50 C 88 75, 70 85, 50 90" stroke="#FFC107" strokeWidth="8" strokeLinecap="round" fill="none" />
                        <path d="M50 90 L 60 80 M 50 90 L 65 95" stroke="#FFC107" strokeWidth="8" strokeLinecap="round" />
                    </svg>
                </motion.div>

                {/* Decorative Line */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center items-center gap-3 mb-2"
                >
                    <div className="w-2 h-2 rounded-full bg-black"></div>
                    <div className="w-12 md:w-16 h-2 bg-[#FF2D55] rounded-full"></div>
                    <div className="w-2 h-2 rounded-full bg-black"></div>
                </motion.div>

                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl md:text-8xl font-black text-darkNavy mb-6 relative inline-block"
                >
                    OUR GALLERY
                </motion.h2>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-center mb-16 relative"
                >
                    <button className="bg-darkNavy text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl group">
                        START YOUR PROJECT NOW!
                        <div className="bg-white rounded-full p-1">
                            <ArrowRight className="text-darkNavy w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </button>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="gallery-slider"
                >
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 35,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.gallery-next',
                            prevEl: '.gallery-prev',
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="w-full py-12"
                    >
                        {projects.map((item) => (
                            <SwiperSlide key={item.id} className="!w-[250px] md:!w-[300px] !h-[400px] md:!h-[500px] mx-4 md:mx-6 rounded-3xl overflow-hidden transition-all duration-300">
                                <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl relative group">
                                    <img src={item.img} alt="Gallery Item" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-6 mt-10">
                        <button className="gallery-prev w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#FF2D55] text-white flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform">
                            <ArrowLeft size={32} strokeWidth={3} />
                        </button>
                        <button className="gallery-next w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#2B65F0] text-white flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform">
                            <ArrowRight size={32} strokeWidth={3} />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Custom SVG Arrow to match the 'hand drawn' look more closely if needed */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-10 left-[10%] w-32 h-32 hidden lg:block pointer-events-none"
            >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-yellow-400 fill-current">
                    <path d="M48.5,88.2 C57.8,60.8 90.5,38.1 125.4,45.8 C148.6,50.9 160.7,74.5 158.4,96.5 C156.4,115.3 140.2,126.3 123.9,132.8 C118.8,134.8 120.9,142.1 125.9,140.1 C146.4,131.9 166.3,117.8 168.9,94.2 C171.8,67.6 156.9,39.1 129.5,33.1 C87.7,23.9 49.3,51.8 38.8,87.6 C36.9,94.1 46.6,94.7 48.5,88.2 Z" fillRule="nonzero" />
                    <path d="M123.9,132.8 L133.5,123.2 L121.5,121.5 L123.9,132.8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </motion.div>

        </section>
    );
};
export default WorkSlider;
