import React from 'react';
import { motion } from 'framer-motion';
import { Send, UploadCloud, ArrowRight } from 'lucide-react';

const GetQuote = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-darkNavy text-white pt-32 pb-20 px-4 md:px-12 flex items-center justify-center relative overflow-hidden"
        >
            {/* Background Animations */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                    className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-primaryRed/20 blur-[100px] rounded-full"
                ></motion.div>
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                    className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-primaryBlue/20 blur-[120px] rounded-full"
                ></motion.div>
            </div>

            <div className="container mx-auto max-w-4xl relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mb-10"
                >
                    <h1 className="text-4xl md:text-5xl font-black mb-4">GET A <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryRed to-pink-500">QUOTE</span></h1>
                    <p className="text-gray-300">Tell us about your project and let's create something brilliant together.</p>
                </motion.div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div 
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <label className="block text-sm font-bold mb-2">First Name</label>
                            <input type="text" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primaryBlue transition-colors" placeholder="John" />
                        </motion.div>
                        <motion.div 
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <label className="block text-sm font-bold mb-2">Last Name</label>
                            <input type="text" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primaryBlue transition-colors" placeholder="Doe" />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div 
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <label className="block text-sm font-bold mb-2">Email Address</label>
                            <input type="email" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primaryRed transition-colors" placeholder="john@example.com" />
                        </motion.div>
                        <motion.div 
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <label className="block text-sm font-bold mb-2">Service Required</label>
                            <select className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primaryRed transition-colors text-white">
                                <option className="text-black">2D Animation</option>
                                <option className="text-black">3D Animation</option>
                                <option className="text-black">Logo Animation</option>
                                <option className="text-black">Gaming Trailer</option>
                            </select>
                        </motion.div>
                    </div>

                    <motion.div 
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <label className="block text-sm font-bold mb-2">Project Details</label>
                        <textarea rows="4" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primaryBlue transition-colors resize-none" placeholder="Describe your project vision..."></textarea>
                    </motion.div>

                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex justify-center mt-8"
                    >
                        <button type="button" className="group bg-gradient-to-r from-primaryRed to-primaryBlue hover:from-pink-600 hover:to-indigo-600 text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(209,49,75,0.4)] hover:shadow-[0_0_35px_rgba(59,89,248,0.6)]">
                            SEND REQUEST
                            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </motion.div>
                </form>
            </div>
        </motion.div>
    );
};

export default GetQuote;
