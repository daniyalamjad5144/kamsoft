import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import character2d from '../assets/character_2d_boy.png';
import character3d from '../assets/character_3d_boy.png';

const AnimationTypes = () => {
    const [activeType, setActiveType] = useState('2d'); // '2d' or '3d'
    const [bgColors, setBgColors] = useState({ '2d': '#A125F2', '3d': '#00B2FF' }); // Fallbacks

    useEffect(() => {
        // Dynamically extract the background color of the images to match exactly
        const extractColor = (src, type) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = 10;
                canvas.height = 10;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, 10, 10);
                
                // Get sample pixel from top-left (x=2, y=2 to avoid edge artifacts)
                const data = ctx.getImageData(2, 2, 1, 1).data;
                const r = data[0];
                const g = data[1];
                const b = data[2];
                const a = data[3];

                // Only set if not fully transparent
                if (a > 10) {
                    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
                    setBgColors(prev => ({ ...prev, [type]: hex }));
                }
            };
        };

        extractColor(character2d, '2d');
        extractColor(character3d, '3d');
    }, []);

    const toggleType = () => {
        setActiveType(prev => prev === '2d' ? '3d' : '2d');
    };

    return (
        <section className="relative w-full h-[600px] overflow-hidden">
            <motion.div 
                className="w-full h-full"
                animate={{ backgroundColor: bgColors[activeType] }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <div className="container mx-auto h-full relative flex items-center justify-between px-4 md:px-12">

                    <AnimatePresence mode="wait">
                        {/* Content for 2D Animation */}
                        {activeType === '2d' && (
                            <motion.div
                                key="2d"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="w-full h-full absolute inset-0 flex items-center justify-between px-4 md:px-12"
                            >
                                <motion.div 
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -100, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex flex-col items-start justify-center z-10 md:w-1/2"
                                >
                                    <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6 drop-shadow-md">
                                        2D ANIMATION
                                    </h2>
                                    <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm md:text-base flex items-center gap-2 hover:scale-105 transition-transform shadow-lg group">
                                        START YOUR PROJECT NOW!
                                        <div className="bg-black rounded-full p-1 group-hover:translate-x-1 transition-transform">
                                            <ArrowRight className="text-white w-3 h-3" />
                                        </div>
                                    </button>
                                </motion.div>

                                <motion.div 
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: "100%", opacity: 0 }}
                                    transition={{ duration: 0.6, type: "spring", damping: 20 }}
                                    className="absolute right-4 md:right-32 bottom-0 h-[90%] md:h-full flex items-end justify-end"
                                >
                                    {/* Removed drop-shadow to blend seamlessly with the matched background */}
                                    <img src={character2d} alt="2D Character" className="h-full object-contain max-w-[400px] md:max-w-[500px]" />
                                </motion.div>

                                {/* Sidebar Controls - Right Side */}
                                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-[#FCEE09] flex flex-col items-center justify-center gap-4 z-20 shadow-2xl">
                                    <button onClick={toggleType} className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#2D1B4E] text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg">
                                        <ArrowUp className="w-6 h-6 md:w-8 md:h-8" />
                                    </button>
                                    <button onClick={toggleType} className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0066FF] text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg">
                                        <ArrowDown className="w-6 h-6 md:w-8 md:h-8" />
                                    </button>
                                </div>
                            </motion.div>
                        )}


                        {/* Content for 3D Animation */}
                        {activeType === '3d' && (
                            <motion.div
                                key="3d"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="w-full h-full absolute inset-0 flex items-center justify-between px-4 md:px-12"
                            >
                                {/* Sidebar Controls - Left Side */}
                                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-[#FCEE09] flex flex-col items-center justify-center gap-4 z-20 shadow-2xl">
                                    <button onClick={toggleType} className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#2D1B4E] text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg">
                                        <ArrowUp className="w-6 h-6 md:w-8 md:h-8" />
                                    </button>
                                    <button onClick={toggleType} className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0066FF] text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg">
                                        <ArrowDown className="w-6 h-6 md:w-8 md:h-8" />
                                    </button>
                                </div>

                                <motion.div 
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: "100%", opacity: 0 }}
                                    transition={{ duration: 0.6, type: "spring", damping: 20 }}
                                    className="absolute left-4 md:left-40 bottom-0 h-[90%] md:h-full flex items-end justify-start"
                                >
                                    {/* Removed drop-shadow to blend seamlessly with the matched background */}
                                    <img src={character3d} alt="3D Character" className="h-full object-contain max-w-[400px] md:max-w-[600px]" />
                                </motion.div>

                                <motion.div 
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 100, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="ml-auto flex flex-col items-end justify-center z-10 md:w-1/2 text-right"
                                >
                                    <h2 className="font-black text-white leading-none mb-6 drop-shadow-md">
                                        <span className="block text-8xl md:text-[150px]">3D</span>
                                        <span className="block text-5xl md:text-6xl -mt-4">ANIMATION</span>
                                    </h2>
                                    <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm md:text-base flex items-center gap-2 hover:scale-105 transition-transform shadow-lg group">
                                        START YOUR PROJECT NOW!
                                        <div className="bg-black rounded-full p-1 group-hover:translate-x-1 transition-transform">
                                            <ArrowRight className="text-white w-3 h-3" />
                                        </div>
                                    </button>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </motion.div>
        </section>
    );
};

export default AnimationTypes;
