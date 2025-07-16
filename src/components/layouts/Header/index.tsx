"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">🤖</span>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                                AI Chatbot Cloudhub
                            </span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <motion.nav
                        className="hidden md:flex items-center space-x-8"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                            >
                                <Link
                                    href={item.href}
                                    className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group"
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.nav>

                    {/* CTA Buttons */}
                    <motion.div
                        className="hidden md:flex items-center space-x-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link
                            href="#login"
                            className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300"
                        >
                            Sign In
                        </Link>
                        <motion.a
                            href="#pricing"
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Free Trial
                        </motion.a>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                        opacity: isMobileMenuOpen ? 1 : 0,
                        height: isMobileMenuOpen ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="py-4 space-y-4 border-t border-gray-200">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-4 space-y-2">
                            <Link
                                href="#login"
                                className="block text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Sign In
                            </Link>
                            <motion.a
                                href="#pricing"
                                className="block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300"
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Start Free Trial
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </header>
    );
};

export default Header;