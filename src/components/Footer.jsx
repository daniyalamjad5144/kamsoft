import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Youtube, ArrowRight } from 'lucide-react';
import logo from '../assets/card_logo.png'; // Assuming a logo exists, otherwise we'll use text

// Custom specific icons for Pinterest if not in lucide (Lucide usually has most, but generic fallback for now)
const Pinterest = ({ size, color }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M20 12h2" />
        <path d="M2 12h2" />
        <circle cx="12" cy="12" r="10" />
    </svg>
);
// Note: Lucide does likely have Pinterest, let's try to import it directly if possible or just use a placeholder icon. 
// Actually, I'll stick to standard Lucide imports available.

const Footer = () => {
    return (
        <footer className="bg-white text-black pt-12 pb-4 relative font-sans">
            <div className="container mx-auto px-4 md:px-8">
                {/* Top Section: Logo & CTA */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    {/* Logo Area */}
                    <div className="mb-6 md:mb-0">
                        {/* Using text to match 'Prolific Studio' style if image not available, 
                             but using the existing project logic. 
                             I will try to mimic the logo in the image with HTML/CSS as a fallback. */}
                        <div className="flex flex-col">
                            <div className="flex items-end">
                                <span className="text-primaryRed text-5xl font-extrabold italic" style={{ fontFamily: 'cursive' }}>Prolific</span>
                            </div>
                            <span className="text-3xl font-sans font-medium tracking-wide -mt-2">Studio</span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button className="bg-[#1A1025] text-white px-8 py-3 rounded-full flex items-center gap-4 hover:bg-opacity-90 transition-all font-bold tracking-wide text-sm sm:text-base">
                        START YOUR PROJECT NOW!
                        <div className="bg-white rounded-full p-1 text-black">
                            <ArrowRight size={16} strokeWidth={3} />
                        </div>
                    </button>
                </div>

                {/* Main Grid Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 mb-12">
                    {/* Column 1: Services */}
                    <div>
                        <h3 className="text-3xl font-black font-serif uppercase mb-6 tracking-wide">Services</h3>
                        <ul className="space-y-3 font-bold text-[#4DA6E9]">
                            {['2D ANIMATION', '3D ANIMATION', 'GAMING TRAILER', 'GAMING', 'PRODUCT ANIMATION', 'STORYBOARD ANIMATION', 'LOGO ANIMATION'].map((item) => (
                                <li key={item} className="flex items-center gap-2">
                                    <span className="text-primaryRed text-xl">•</span>
                                    <a href="#" className="hover:underline decoration-2 underline-offset-4">{item}</a>
                                </li>
                            ))}
                        </ul>
                        <button className="mt-8 bg-[#1A1025] text-white px-10 py-3 rounded-full font-bold text-sm tracking-widest hover:bg-opacity-90 transition-all uppercase">
                            Much More
                        </button>
                    </div>

                    {/* Column 2: Contact */}
                    <div>
                        <h3 className="text-3xl font-black font-serif uppercase mb-6 tracking-wide">Contact</h3>
                        <ul className="space-y-3 font-bold text-[#4DA6E9]">
                            <li className="flex items-center gap-2">
                                <span className="text-primaryRed text-xl">•</span>
                                <a href="tel:113-456-7890">(113)-456-7890</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primaryRed text-xl">•</span>
                                <a href="tel:878-789-7890">(878)-789-7890</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primaryRed text-xl">•</span>
                                <a href="mailto:info@example.com" className="uppercase">INFO@EXAMPLE.COM</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primaryRed text-xl">•</span>
                                <a href="mailto:info@dummy.com" className="uppercase">INFO@DUMMY.COM</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Locations */}
                    <div>
                        <h3 className="text-3xl font-black font-serif uppercase mb-6 tracking-wide">Locations</h3>
                        <ul className="space-y-6">
                            {/* Karachi */}
                            <li className="flex items-start gap-2">
                                <span className="text-primaryRed text-xl mt-1">•</span>
                                <div>
                                    <h4 className="text-[#4DA6E9] font-bold uppercase text-lg">KARACHI OFFICE :</h4>
                                    <p className="text-black font-bold text-sm leading-relaxed max-w-xs">
                                        Business Center, Office #202 2nd, Shahrah-e-Faisal Rd, Block-6 PECHS, Karachi
                                    </p>
                                </div>
                            </li>
                            {/* Colorado */}
                            <li className="flex items-start gap-2">
                                <span className="text-primaryRed text-xl mt-1">•</span>
                                <div>
                                    <h4 className="text-[#4DA6E9] font-bold uppercase text-lg">COLORADO OFFICE :</h4>
                                    <p className="text-black font-bold text-sm leading-relaxed max-w-xs">
                                        2100 Geng Rd Palo Alto, CA 94303 United States
                                    </p>
                                </div>
                            </li>
                            {/* Florida */}
                            <li className="flex items-start gap-2">
                                <span className="text-primaryRed text-xl mt-1">•</span>
                                <div>
                                    <h4 className="text-[#4DA6E9] font-bold uppercase text-lg">FLORIDA OFFICE :</h4>
                                    <p className="text-black font-bold text-sm leading-relaxed max-w-xs">
                                        336 W BURLEIGH BLVD UNIT 110, Tavares, FL 32778
                                    </p>
                                </div>
                            </li>
                            {/* UK */}
                            <li className="flex items-start gap-2">
                                <span className="text-primaryRed text-xl mt-1">•</span>
                                <div>
                                    <h4 className="text-[#4DA6E9] font-bold uppercase text-lg">UK OFFICE :</h4>
                                    <p className="text-black font-bold text-sm leading-relaxed max-w-xs">
                                        3rd Floor, Bridge Street News Building, London SE1 9SG, United Kingdom
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Social Icons */}
                    <div className="flex gap-2">
                        {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((Icon, idx) => (
                            <a key={idx} href="#" className="w-10 h-10 bg-[#333] rounded-full flex items-center justify-center text-white hover:bg-primaryRed transition-colors">
                                <Icon size={20} fill="white" strokeWidth={0} />
                            </a>
                        ))}
                        {/* Pinterest Custom (Lucide might not have a solid fill version easily accessible via standard map without prop spaghetti, so handling purely) */}
                        <a href="#" className="w-10 h-10 bg-[#333] rounded-full flex items-center justify-center text-white hover:bg-primaryRed transition-colors">
                            {/* Simple Pinterest Icon SVG */}
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.512-6.232 7.512-1.216 0-2.359-.635-2.75-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
                            </svg>
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-gray-600 text-sm font-medium text-center md:text-right">
                        &copy; 2024 Prolific Studio Best Animation Studio in USA | All Rights Reserved
                    </div>
                </div>
            </div>
            {/* Bottom Gradient Line */}
            <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-green-400 to-green-500 mt-4"></div>
        </footer>
    );
};

export default Footer;
