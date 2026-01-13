import React, { useState } from 'react';
import { ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';
import character2d from '../assets/character_2d_boy.png';
import character3d from '../assets/character_3d_boy.png';

const AnimationTypes = () => {
    const [activeType, setActiveType] = useState('2d'); // '2d' or '3d'
    const [isTransitioning, setIsTransitioning] = useState(false);

    const toggleType = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveType(prev => prev === '2d' ? '3d' : '2d');
            setIsTransitioning(false);
        }, 300); // Wait for exit animation
    };

    return (
        <section className="relative w-full h-[600px] overflow-hidden">
            <div className={`w-full h-full transition-colors duration-500 ease-in-out ${activeType === '2d' ? 'bg-[#A125F2]' : 'bg-[#00B2FF]'}`}>
                <div className="container mx-auto h-full relative flex items-center justify-between px-4 md:px-12">

                    {/* Content for 2D Animation */}
                    {activeType === '2d' && (
                        <>
                            <div className={`flex flex-col items-start justify-center z-10 md:w-1/2 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                                <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                                    2D ANIMATION
                                </h2>
                                <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm md:text-base flex items-center gap-2 hover:scale-105 transition-transform shadow-lg">
                                    START YOUR PROJECT NOW!
                                    <div className="bg-black rounded-full p-1">
                                        <ArrowRight className="text-white w-3 h-3" />
                                    </div>
                                </button>
                            </div>

                            <div className={`absolute right-4 md:right-32 bottom-0 h-[90%] md:h-full flex items-end justify-end transition-transform duration-500 ${isTransitioning ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                                <img src={character2d} alt="2D Character" className="h-full object-contain max-w-[400px] md:max-w-[500px] mix-blend-multiply" />
                            </div>

                            {/* Sidebar Controls - Right Side */}
                            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-[#FCEE09] flex flex-col items-center justify-center gap-4 z-20">
                                <button onClick={toggleType} className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#2D1B4E] text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                                    <ArrowUp className="w-6 h-6 md:w-8 md:h-8" />
                                </button>
                                <button onClick={toggleType} className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0066FF] text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                                    <ArrowDown className="w-6 h-6 md:w-8 md:h-8" />
                                </button>
                            </div>
                        </>
                    )}


                    {/* Content for 3D Animation */}
                    {activeType === '3d' && (
                        <>
                            {/* Sidebar Controls - Left Side */}
                            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-[#FCEE09] flex flex-col items-center justify-center gap-4 z-20">
                                <button onClick={toggleType} className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#2D1B4E] text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                                    <ArrowUp className="w-6 h-6 md:w-8 md:h-8" />
                                </button>
                                <button onClick={toggleType} className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0066FF] text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                                    <ArrowDown className="w-6 h-6 md:w-8 md:h-8" />
                                </button>
                            </div>

                            <div className={`absolute left-4 md:left-40 bottom-0 h-[90%] md:h-full flex items-end justify-start transition-transform duration-500 ${isTransitioning ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                                <img src={character3d} alt="3D Character" className="h-full object-contain max-w-[400px] md:max-w-[600px] mix-blend-multiply" />
                            </div>

                            <div className={`ml-auto flex flex-col items-end justify-center z-10 md:w-1/2 text-right transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                                <h2 className="font-black text-white leading-none mb-6">
                                    <span className="block text-8xl md:text-[150px]">3D</span>
                                    <span className="block text-5xl md:text-6xl -mt-4">ANIMATION</span>
                                </h2>
                                <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm md:text-base flex items-center gap-2 hover:scale-105 transition-transform shadow-lg">
                                    START YOUR PROJECT NOW!
                                    <div className="bg-black rounded-full p-1">
                                        <ArrowRight className="text-white w-3 h-3" />
                                    </div>
                                </button>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </section>
    );
};

export default AnimationTypes;
