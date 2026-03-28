import React from 'react';
import { Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import hqCartoonGirl from '../assets/hq_cartoon_girl_white-removebg-preview.png';
import hqCartoonDwarf from '../assets/hq_cartoon_dwarf_white-removebg-preview.png';
import cartoonReady from '../assets/hq_cartoon_boys_white-removebg-preview.png';
import moviePoster from '../assets/movie_poster.png';

const ProlificStudio = () => {
    return (
        <section className="bg-white pb-20 overflow-hidden">
            {/* Top Marquee Section */}
            <div className="rotate-1 scale-105 mb-16 shadow-lg relative z-20">
                {/* Line 1: Dark Red - Moves Left to Right (Reverse) */}
                <div className="bg-[#8B0000] py-4 md:py-6 flex overflow-hidden border-b border-white/10">
                    <div className="animate-marquee whitespace-nowrap flex-shrink-0 px-4" style={{ animationDirection: 'reverse' }}>
                        <span className="text-3xl md:text-5xl font-black text-white px-4">PROLIFIC STUDIO . PROLIFIC STUDIO . PROLIFIC STUDIO . PROLIFIC STUDIO .</span>
                    </div>
                    <div className="animate-marquee whitespace-nowrap flex-shrink-0 px-4" style={{ animationDirection: 'reverse' }}>
                        <span className="text-3xl md:text-5xl font-black text-white px-4">PROLIFIC STUDIO . PROLIFIC STUDIO . PROLIFIC STUDIO . PROLIFIC STUDIO .</span>
                    </div>
                </div>
                {/* Line 2: Dark Red - Moves Right to Left (Standard) */}
                <div className="bg-[#8B0000] py-4 md:py-6 flex overflow-hidden">
                    <div className="animate-marquee whitespace-nowrap flex-shrink-0 px-4">
                        <span className="text-3xl md:text-5xl font-black text-white px-4">PROLIFIC STUDIO . PROLIFIC STUDIO . PROLIFIC STUDIO . PROLIFIC STUDIO .</span>
                    </div>
                    <div className="animate-marquee whitespace-nowrap flex-shrink-0 px-4">
                        <span className="text-3xl md:text-5xl font-black text-white px-4">PROLIFIC STUDIO . PROLIFIC STUDIO . PROLIFIC STUDIO . PROLIFIC STUDIO .</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 relative">

                {/* Decorative Elements */}
                {/* Yellow Sun (Top Right) */}
                <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="hidden md:block absolute top-0 right-10 w-24 h-24 bg-[#FFEB3B] rounded-full animate-spin-slow" 
                    style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
                ></motion.div>

                {/* Curly Arrow (Left) */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hidden md:block absolute left-10 top-20"
                >
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 50 C 10 20, 50 20, 50 50 C 50 80, 90 80, 90 50 L 80 40 M 90 50 L 100 60" stroke="#FFC107" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>


                {/* Team Members */}
                <div className="flex flex-row justify-center gap-4 md:gap-32 mb-24 relative z-10">
                    {/* Character 1 */}
                    <div className="relative group">
                        <motion.div 
                            initial={{ opacity: 0, y: 50, rotate: -10 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="w-36 h-36 md:w-80 md:h-80 bg-[#FA8072] rounded-full flex items-center justify-center relative overflow-visible shadow-xl"
                        >
                            <img src={hqCartoonGirl} alt="Team Member 1" className="absolute -top-6 md:-top-10 w-full h-[120%] object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-110" />

                            {/* Social Icons */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#9C27B0] rounded-full flex items-center justify-center text-white hover:bg-[#7B1FA2] cursor-pointer shadow-md transition-transform hover:scale-110">
                                    <Facebook className="w-4 h-4 md:w-5 md:h-[18px]" />
                                </div>
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#9C27B0] rounded-full flex items-center justify-center text-white hover:bg-[#7B1FA2] cursor-pointer shadow-md transition-transform hover:scale-110">
                                    <Instagram className="w-4 h-4 md:w-5 md:h-[18px]" />
                                </div>
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#9C27B0] rounded-full flex items-center justify-center text-white hover:bg-[#7B1FA2] cursor-pointer shadow-md transition-transform hover:scale-110">
                                    <Twitter className="w-4 h-4 md:w-5 md:h-[18px]" />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Character 2 */}
                    <div className="relative group">
                        {/* Blue Circle */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50, rotate: 10 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="w-36 h-36 md:w-80 md:h-80 bg-[#2962FF] rounded-full flex items-center justify-center relative overflow-visible shadow-xl"
                        >
                            <img src={hqCartoonDwarf} alt="Team Member 2" className="absolute -top-4 md:-top-6 w-[90%] h-[110%] object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-110" />

                            {/* Social Icons */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#4CAF50] rounded-full flex items-center justify-center text-white hover:bg-[#388E3C] cursor-pointer shadow-md transition-transform hover:scale-110">
                                    <Facebook className="w-4 h-4 md:w-5 md:h-[18px]" />
                                </div>
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#4CAF50] rounded-full flex items-center justify-center text-white hover:bg-[#7B1FA2] cursor-pointer shadow-md transition-transform hover:scale-110">
                                    <Instagram className="w-4 h-4 md:w-5 md:h-[18px]" />
                                </div>
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#4CAF50] rounded-full flex items-center justify-center text-white hover:bg-[#388E3C] cursor-pointer shadow-md transition-transform hover:scale-110">
                                    <Twitter className="w-4 h-4 md:w-5 md:h-[18px]" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Banner Card */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-5xl mx-auto h-[250px] md:h-[500px] bg-[#0091EA] rounded-[30px] md:rounded-[60px] overflow-hidden flex items-center shadow-2xl"
                >

                    {/* Left Poster */}
                    <div className="block w-1/3 h-full p-2 md:p-8 relative z-10">
                        <motion.div 
                            initial={{ x: -50, opacity: 0, rotate: -15 }}
                            whileInView={{ x: 0, opacity: 1, rotate: -5 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full h-full bg-black/20 rounded-xl md:rounded-3xl overflow-hidden transform translate-y-2 md:translate-y-4 border-2 md:border-4 border-white/50 shadow-lg"
                        >
                            <img src={moviePoster} alt="Poster" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>

                    {/* Center Sunburst Banner */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                        <motion.div 
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
                            className="w-32 h-32 md:w-96 md:h-96 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 flex items-center justify-center text-center p-2 md:p-6 shadow-2xl animate-pulse-slow" 
                            style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
                        >
                            <h3 className="font-black text-[10px] md:text-4xl uppercase leading-tight text-white drop-shadow-md">
                                ARE <br /> YOU <br /> READY!
                            </h3>
                        </motion.div>
                    </div>

                    {/* Right Character */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-1/2 md:w-1/2 flex items-center justify-end z-20">
                        <motion.img 
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            src={cartoonReady} 
                            alt="Pro Duo" 
                            className="h-[120%] md:h-[140%] object-contain drop-shadow-2xl -mr-4 md:-mr-20" 
                        />
                    </div>

                    {/* Bottom Right Yellow Decoration */}
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#FFEB3B] rounded-full z-10 opacity-80"></div>
                </motion.div>

            </div>
        </section>
    );
};

export default ProlificStudio;
