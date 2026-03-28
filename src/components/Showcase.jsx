import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import card2d from '../assets/card_2d.png';
import card3d from '../assets/card_3d.png';
import cardLogo from '../assets/card_logo.png';
import cardGaming from '../assets/card_gaming.png';
import familyImg from '../assets/1384578-removebg-preview.png';

const Showcase = () => {
    const cards = [
        { title: '2D\nANIMATION', img: card2d },
        { title: '3D\nANIMATION', img: card3d },
        { title: 'LOGO\nANIMATION', img: cardLogo },
        { title: 'GAMING\nTRAILER', img: cardGaming },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="relative pt-32 pb-48 bg-darkNavy z-20">
            {/* Overlapping Character Image */}
            <div className="relative -mt-48 md:-mt-64 z-30 flex justify-center pointer-events-none mb-12">
                <img
                    src={familyImg}
                    alt="Animation Characters"
                    className="w-3/4 md:w-4/5 max-w-3xl object-contain drop-shadow-2xl"
                />
            </div>

            {/* Background elements wrapper to clip overflow for watermark */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Watermark */}
                <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 0.05 }}
                    transition={{ duration: 1 }}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 hidden lg:flex flex-row items-center justify-center select-none opacity-5 gap-4"
                >
                    <span className="text-[80px] font-black leading-none [writing-mode:vertical-lr] rotate-180 text-white">ANIMATION</span>
                    <span className="text-[80px] font-black leading-none [writing-mode:vertical-lr] rotate-180 text-white">STUDIO</span>
                </motion.div>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.h2 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-4"
                >
                    <div>ARE YOU READY</div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">FOR PROJECT</div>
                </motion.h2>

                <motion.button 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-12 group bg-white text-black px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 mx-auto hover:bg-gray-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] cursor-pointer"
                >
                    START YOUR PROJECT NOW
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </div>

            {/* Overlapping Cards */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="container mx-auto px-4 mt-40 relative z-20"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mb-20 md:-mb-64">
                    {cards.map((card, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -15, transition: { duration: 0.3 } }}
                            className="group relative rounded-3xl overflow-hidden aspect-[3/4.5] cursor-pointer shadow-2xl transition-transform duration-500"
                        >
                            <img
                                src={card.img}
                                alt={card.title.replace('\n', ' ')}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay Gradient at bottom for text readability */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                            <h3 className="absolute bottom-8 left-0 right-0 text-center text-3xl font-black text-white leading-none tracking-tight whitespace-pre-line drop-shadow-md">
                                {card.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Showcase;

