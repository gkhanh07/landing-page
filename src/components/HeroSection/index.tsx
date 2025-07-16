"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10"></div>
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/15 to-purple-600/15 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                            <span className="text-sm font-medium text-purple-200">🤖 AI-Powered Chatbot</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Build Smarter
                            <br />
                            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                AI Conversations
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        Transform your customer interactions with our intelligent AI chatbot.
                        Provide instant, personalized responses 24/7 and boost engagement with cutting-edge technology.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <motion.a
                            href="#pricing"
                            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Free Trial
                        </motion.a>
                        <motion.a
                            href="#features"
                            className="text-white hover:text-purple-200 text-lg font-medium bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More →
                        </motion.a>
                    </motion.div>

                    {/* Chatbot Demo Mockup */}
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    >
                        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl p-6">
                            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-gray-400 text-sm ml-4">AI Chatbot Demo</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-end">
                                        <div className="bg-cyan-500 text-white px-4 py-2 rounded-lg max-w-xs">
                                            Hello! Can you help me with my order?
                                        </div>
                                    </div>
                                    <div className="flex justify-start">
                                        <div className="bg-gray-700 text-white px-4 py-2 rounded-lg max-w-xs">
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                                <span className="text-xs text-gray-300">AI Assistant</span>
                                            </div>
                                            Of course! I'd be happy to help you with your order. Could you please provide your order number?
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;