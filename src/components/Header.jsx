import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 flex transition-transform duration-300 ${isScrolled ? '-translate-y-full md:translate-y-0' : ''}`}>
            {/* Left: Logo Section - Dark Navy */}
            <div className="bg-darkNavy text-white px-6 md:px-8 py-4 flex items-center justify-center md:justify-start min-w-[150px] md:min-w-[200px] lg:min-w-[220px]">
                <Link to="/" className="font-black text-xl md:text-2xl tracking-wider select-none hover:text-primaryRed transition-colors">
                    KAMSOFT
                </Link>
            </div>

            {/* Right: Contact & Nav Section - White */}
            <div className="flex-1 bg-white flex items-center justify-between px-6 md:px-10 py-4 shadow-sm border-b border-gray-100 relative">

                {/* Contact Info - Hidden on mobile, visible on lg */}
                <div className="hidden lg:flex items-center gap-6 font-semibold text-darkNavy text-xs">
                    <a href="mailto:info@example.com" className="flex items-center gap-2 hover:text-black transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white transition-all">
                            <Mail size={14} />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="text-[9px] font-black tracking-widest text-gray-400 uppercase">Mail Us</span>
                            <span className="text-xs font-bold">info@example.com</span>
                        </div>
                    </a>
                    <a href="tel:123456789002" className="flex items-center gap-2 hover:text-black transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white transition-all">
                            <Phone size={14} />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="text-[9px] font-black tracking-widest text-gray-400 uppercase">Call Us Now</span>
                            <span className="text-xs font-bold">(123)-456-789002</span>
                        </div>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden ml-auto">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-darkNavy p-2">
                        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>

                {/* CTA Button - Hidden mobile */}
                <div className="hidden lg:flex items-center gap-4 ml-auto">
                    <Link to="/quote">
                        <Button className="bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-xl border-none text-sm px-6 py-3 cursor-pointer">
                            Get a Quote!
                        </Button>
                    </Link>
                    <Link to="/chat">
                        <Button className="bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-xl border-none text-sm px-6 py-3 cursor-pointer">
                            Live Chat
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-8 px-6 flex flex-col gap-6 animate-in slide-in-from-top-5 duration-300 lg:hidden h-screen bg-white/95 backdrop-blur-md z-50">
                    <nav className="flex flex-col gap-6 text-center">
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black text-darkNavy hover:text-primaryRed transition-colors">HOME</Link>
                        <Link to="/quote" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black text-darkNavy hover:text-primaryRed transition-colors">GET A QUOTE</Link>
                        <Link to="/chat" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black text-darkNavy hover:text-primaryRed transition-colors">LIVE CHAT</Link>
                    </nav>
                    <div className="flex flex-col gap-4 mt-8 border-t border-gray-100 pt-8">
                        <a href="mailto:info@kamsoft.com" className="flex items-center justify-center gap-4 text-darkNavy text-lg font-medium">
                            <Mail size={20} className="text-black" /> info@kamsoft.com
                        </a>
                        <a href="tel:1234567890" className="flex items-center justify-center gap-4 text-darkNavy text-lg font-medium">
                            <Phone size={20} className="text-black" /> (123) 456-7890
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
