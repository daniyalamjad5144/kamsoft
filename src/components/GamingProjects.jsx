import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

import card3d from '../assets/card_3d.png';
import cardGaming from '../assets/card_gaming.png';
import thumb1 from '../assets/thumb1.png';
import thumb2 from '../assets/thumb2.png';
// Using star as a placeholder for the character if no better alternative exists
import characterImg from '../assets/character_girl-removebg-preview.png';

const games = [
    { id: 1, title: 'PROJECT NAME', img: cardGaming },
    { id: 2, title: 'PROJECT NAME', img: thumb1 },
    { id: 3, title: 'PROJECT NAME', img: card3d },
    { id: 4, title: 'PROJECT NAME', img: thumb2 },
];

const GamingProjects = () => {
    return (
        <section className="relative bg-white pt-20">
            {/* Top Character & Bubble Container - Positioned to overlap the transition */}
            <div className="container mx-auto px-4 relative z-20 mb-[-40px]">
                <div className="flex justify-center relative">
                    {/* The character image */}
                    <div className="relative">
                        <img
                            src={characterImg}
                            alt="Character"
                            className="h-48 md:h-64 object-contain"
                        />
                        {/* Speech Bubble */}
                        <div className="absolute top-0 -right-20 md:-right-32 bg-[#2D1B4E] text-white p-6 rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center text-center leading-tight shadow-lg transform rotate-12">
                            <p className="font-bold text-xs md:text-sm">CAN'T BELIEVE WHAT'S NEXT!</p>
                            {/* Little triangle for speech bubble */}
                            <div className="absolute bottom-4 left-0 w-4 h-4 bg-[#2D1B4E] transform rotate-45 -translate-x-1"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blue Background Section */}
            <div className="relative bg-[#2B65F0] pt-20 pb-20 rounded-t-[50px] md:rounded-t-[100px] overflow-hidden">
                {/* Rolling Text Marquee */}
                <div className="absolute top-10 left-0 w-full flex overflow-hidden pointer-events-none">
                    <div className="animate-marquee whitespace-nowrap flex-shrink-0 text-[80px] md:text-[120px] font-black text-[#8EFFC1] tracking-tighter px-4">
                        KAMSOFT . KAMSOFT . KAM SOFT . KAMSOFT . KAMSOFT .
                    </div>
                    <div className="animate-marquee whitespace-nowrap flex-shrink-0 text-[80px] md:text-[120px] font-black text-[#8EFFC1] tracking-tighter px-4">
                        KAMSOFT . KAMSOFT . KAM SOFT . KAMSOFT . KAMSOFT .
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10 mt-40">
                    {/* Header: Title and Nav Buttons */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <h2 className="text-4xl md:text-5xl font-black text-white">
                            GAMING PROJECT
                        </h2>

                        <div className="flex gap-4">
                            {/* Custom Navigation Buttons */}
                            <button className="swiper-prev-btn w-12 h-12 rounded-full bg-[#FF2D55] text-white flex items-center justify-center hover:bg-[#ff4d70] transition-colors cursor-pointer">
                                <ArrowLeft size={24} />
                            </button>
                            <button className="swiper-next-btn w-12 h-12 rounded-full bg-[#1A1A2E] text-white flex items-center justify-center hover:bg-[#2a2a45] transition-colors cursor-pointer">
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Swiper Slider */}
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1.2}
                        navigation={{
                            nextEl: '.swiper-next-btn',
                            prevEl: '.swiper-prev-btn',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2.2 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="!overflow-visible"
                    >
                        {games.map((game) => (
                            <SwiperSlide key={game.id}>
                                <div className="group relative rounded-2xl overflow-hidden aspect-[3/4.5] cursor-pointer">
                                    <img
                                        src={game.img}
                                        alt={game.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent"></div>

                                    {/* Text */}
                                    <h3 className="absolute bottom-6 left-0 right-0 text-center text-white font-bold text-xl uppercase leading-tight drop-shadow-md">
                                        PROJECT<br />NAME
                                    </h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Bottom CTA Button */}
                    <div className="flex justify-center mt-16">
                        <button className="bg-white text-darkNavy px-8 py-3 rounded-full font-bold text-sm md:text-base flex items-center gap-2 hover:scale-105 transition-transform shadow-lg">
                            START YOUR PROJECT NOW!
                            <div className="bg-black rounded-full p-1">
                                <ArrowRight className="text-white w-3 h-3" />
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GamingProjects;
