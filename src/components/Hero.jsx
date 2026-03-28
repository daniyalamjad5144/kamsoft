import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24 bg-primaryRed">

            {/* Background Typography - Faded */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full select-none pointer-events-none overflow-hidden z-0 opacity-10">
                <span className="text-[12rem] md:text-[20rem] font-black text-white whitespace-nowrap leading-none tracking-tighter block text-center">
                    KAMSOFT
                </span>
            </div>

            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 relative z-10">

                {/* Left Column: Heading */}
                <div className="lg:col-span-5 text-left text-white">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-black leading-none tracking-tight"
                    >
                        <span className="block text-xl md:text-2xl font-black mb-2">ALL</span>
                        <span className="block text-5xl md:text-7xl lg:text-7xl xl:text-8xl mb-2 text-white">ANIMATION</span>
                        <span className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black whitespace-nowrap">PROJECTS ACCEPTED</span>
                    </motion.h1>
                </div>

                {/* Right Column: Description & CTA */}
                <div className="lg:col-span-5 lg:col-start-8 text-left text-white flex flex-col items-start">
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/90 text-base md:text-lg mb-8 font-medium leading-relaxed"
                    >
                        We create pixel-perfect 2D & 3D animations that captivate audiences. Elevate your brand with motion designs that truly stand out.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-base md:text-lg flex items-center gap-3 hover:scale-105 transition-transform duration-300 shadow-xl group hover:shadow-2xl whitespace-nowrap min-w-max">
                            START YOUR PROJECT NOW!
                            <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                                <ArrowUpRight size={18} />
                            </div>
                        </button>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
