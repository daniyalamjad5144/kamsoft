import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, User, Bot, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const LiveChat = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Welcome to Kamsoft Support! How can we help you create amazing animations today?", sender: "bot", time: "10:00 AM" }
    ]);
    const [inputValue, setInputValue] = useState("");

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newUserMessage = {
            id: messages.length + 1,
            text: inputValue,
            sender: "user",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages([...messages, newUserMessage]);
        setInputValue("");

        // Simulate bot reply
        setTimeout(() => {
            const newBotMessage = {
                id: messages.length + 2,
                text: "Thanks for reaching out! One of our creative experts will be with you shortly to discuss your project.",
                sender: "bot",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, newBotMessage]);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#F0F2F5] pt-24 pb-12 flex justify-center items-center px-4">
            
            <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="bg-white w-full max-w-4xl h-[75vh] min-h-[500px] rounded-3xl shadow-2xl flex overflow-hidden border border-gray-100"
            >
                {/* Left Sidebar (Info) */}
                <div className="hidden md:flex w-1/3 bg-darkNavy text-white flex-col p-8 relative overflow-hidden">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative z-10"
                    >
                        <h2 className="text-3xl font-black mb-4">KAMSOFT <br/><span className="text-primaryRed">SUPPORT</span></h2>
                        <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                            Need help with a project or have questions about our animation services? Chat directly with our creative team.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <MessageSquare size={18} />
                                </div>
                                <span className="font-semibold text-sm">Instant Replies</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <User size={18} />
                                </div>
                                <span className="font-semibold text-sm">Expert Consultation</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decor */}
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primaryBlue/20 rounded-full blur-[50px]"></div>
                    <div className="absolute top-10 -right-20 w-40 h-40 bg-primaryRed/20 rounded-full blur-[40px]"></div>
                </div>

                {/* Right Chat Area */}
                <div className="flex-1 flex flex-col bg-gray-50/50">
                    {/* Chat Header */}
                    <div className="h-20 bg-white border-b border-gray-100 px-6 flex items-center justify-between shadow-sm z-10">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <div className="w-12 h-12 bg-primaryRed text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                                    K
                                </div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                            </div>
                            <div>
                                <h3 className="font-bold text-darkNavy leading-tight">Kamsoft Team</h3>
                                <p className="text-xs text-gray-500 font-medium">Online</p>
                            </div>
                        </div>
                        <Link to="/">
                            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                                <X size={20} />
                            </button>
                        </Link>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col scroll-smooth">
                        {messages.map((msg, index) => (
                            <motion.div 
                                key={msg.id}
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`flex max-w-[75%] gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                    
                                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1 shadow-sm ${msg.sender === 'user' ? 'bg-darkNavy text-white' : 'bg-primaryBlue text-white'}`}>
                                        {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                                    </div>
                                    
                                    <div className="flex flex-col">
                                        <div className={`p-4 rounded-2xl shadow-sm ${
                                            msg.sender === 'user' 
                                            ? 'bg-darkNavy text-white rounded-tr-none' 
                                            : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                                        }`}>
                                            <p className="text-sm leading-relaxed">{msg.text}</p>
                                        </div>
                                        <span className={`text-[10px] text-gray-400 mt-1 font-medium ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                            {msg.time}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Chat Input */}
                    <form onSubmit={handleSend} className="h-20 bg-white border-t border-gray-100 px-4 md:px-6 flex items-center gap-3">
                        <input 
                            type="text" 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type your message here..." 
                            className="flex-1 bg-gray-100 border-transparent focus:bg-white focus:border-primaryBlue focus:ring-2 focus:ring-primaryBlue/20 rounded-full px-6 py-3 text-sm transition-all focus:outline-none"
                        />
                        <button 
                            type="submit"
                            disabled={!inputValue.trim()}
                            className="w-12 h-12 rounded-full bg-primaryBlue text-white flex items-center justify-center hover:bg-blue-600 hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-md"
                        >
                            <Send size={18} className="ml-1" />
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default LiveChat;
