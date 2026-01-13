import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

import card3d from '../assets/card_3d.png';
import cardGaming from '../assets/card_gaming.png';
import thumb1 from '../assets/thumb1.png';
import thumb2 from '../assets/thumb2.png';
import cardLogo from '../assets/card_logo.png';

const products = [
    { id: 1, img: cardLogo, title: 'Slit Phone' },
    { id: 2, img: card3d, title: 'Vader Helmet' },
    { id: 3, img: cardGaming, title: 'Earbuds' },
];

const ProductAnimation = () => {
    return (
        <section className="bg-[#FF003C] py-24 relative overflow-hidden">
            {/* Background container to match the previous section's rounded bottom styling if needed, 
                 but the image shows a full red block. We'll stick to full red block based on image. */}

            <div className="container mx-auto px-4">
                {/* Header: Title and Nav Buttons */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                        PRODUCT ANIMATION
                    </h2>

                    <div className="flex gap-4">
                        <button className="product-prev-btn w-16 h-16 rounded-full bg-[#0066FF] text-white flex items-center justify-center hover:bg-[#0052cc] transition-colors cursor-pointer shadow-lg">
                            <ArrowLeft size={32} />
                        </button>
                        <button className="product-next-btn w-16 h-16 rounded-full bg-[#1A1A2E] text-white flex items-center justify-center hover:bg-[#2a2a45] transition-colors cursor-pointer shadow-lg">
                            <ArrowRight size={32} />
                        </button>
                    </div>
                </div>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={1.2}
                    navigation={{
                        nextEl: '.product-next-btn',
                        prevEl: '.product-prev-btn',
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2.2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="!overflow-visible mb-16"
                >
                    {products.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div className="group relative rounded-3xl overflow-hidden aspect-video cursor-pointer shadow-2xl bg-gray-900 border border-gray-800">

                                {/* Abstract Animation Setup */}
                                <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden bg-black">

                                    {/* 1. Cyber Scanner (Tech) */}
                                    {index % 3 === 0 && (
                                        <div className="absolute inset-0 bg-[#001015]">
                                            {/* Grid background */}
                                            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(#00f2ff 1px, transparent 1px), linear-gradient(90deg, #00f2ff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                                            {/* Scan line */}
                                            <div className="absolute left-0 w-full h-1 bg-[#00f2ff] shadow-[0_0_15px_#00f2ff] animate-[bounce_3s_infinite]"></div>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-[#00f2ff] font-mono text-xl tracking-widest bg-black/50 px-4 py-1 border border-[#00f2ff] rounded backdrop-blur-sm animate-pulse">SCANNING...</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* 2. Neon Orbit (Cosmic) */}
                                    {index % 3 === 1 && (
                                        <div className="absolute inset-0 bg-[#0f0015] flex items-center justify-center overflow-hidden">
                                            {/* Sun */}
                                            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-md animate-pulse shadow-[0_0_50px_rgba(236,72,153,0.5)] z-10"></div>
                                            {/* Orbits */}
                                            <div className="absolute w-40 h-40 border border-white/20 rounded-full animate-[spin_6s_linear_infinite]">
                                                <div className="absolute -top-2 left-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
                                            </div>
                                            <div className="absolute w-60 h-60 border border-white/10 rounded-full animate-[spin_8s_linear_infinite_reverse]">
                                                <div className="absolute top-1/2 -right-2 w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_10px_#facc15]"></div>
                                            </div>
                                            {/* Stars */}
                                            <div className="absolute top-4 left-10 w-1 h-1 bg-white animate-ping"></div>
                                            <div className="absolute bottom-10 right-10 w-1 h-1 bg-white animate-ping delay-700"></div>
                                        </div>
                                    )}

                                    {/* 3. Music Equalizer (Vibe) */}
                                    {index % 3 === 2 && (
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-black flex items-center justify-center gap-3">
                                            {[0, 150, 300, 100, 250].map((delay, i) => (
                                                <div
                                                    key={i}
                                                    className="w-4 bg-gradient-to-t from-green-400 via-blue-500 to-purple-500 rounded-full shadow-lg"
                                                    style={{
                                                        height: '60%',
                                                        animation: `bounce 1s infinite ${delay}ms`
                                                    }}
                                                ></div>
                                            ))}
                                            <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
                                            <h3 className="absolute z-20 font-black text-white text-2xl tracking-tighter drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">PLAYING</h3>
                                        </div>
                                    )}
                                </div>

                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors z-30"></div>

                                {/* Play Button */}
                                <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md z-40">
                                    <Play className="w-5 h-5 text-black fill-current ml-1" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Bottom CTA Button */}
                <div className="flex justify-center">
                    <button className="bg-white text-darkNavy px-8 py-3 rounded-full font-bold text-sm md:text-base flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                        START YOUR PROJECT NOW!
                        <div className="bg-black rounded-full p-1">
                            <ArrowRight className="text-white w-3 h-3" />
                        </div>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ProductAnimation;
