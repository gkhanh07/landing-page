"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const links = {
        product: [
            { name: "Features", href: "#features" },
            { name: "Pricing", href: "#pricing" },
            { name: "API Documentation", href: "#" },
            { name: "Integrations", href: "#" },
        ],
        company: [
            { name: "About Us", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Blog", href: "#" },
            { name: "Press", href: "#" },
        ],
        support: [
            { name: "Help Center", href: "#" },
            { name: "Contact Support", href: "#contact" },
            { name: "Status Page", href: "#" },
            { name: "Community", href: "#" },
        ],
        legal: [
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
            { name: "Cookie Policy", href: "#" },
            { name: "GDPR", href: "#" },
        ]
    };

    const socialLinks = [
        {
            name: "Twitter",
            href: "#",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            )
        },
        {
            name: "LinkedIn",
            href: "#",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        },
        {
            name: "GitHub",
            href: "#",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 10.956.69-.069-.693-.465-.693-1.056v-3.756c-1.964.42-2.377-.94-2.377-.94-.69-1.758-1.688-2.224-1.688-2.224-1.378-.943.104-.924.104-.924 1.525.108 2.328 1.565 2.328 1.565 1.356 2.32 3.554 1.649 4.423 1.261.138-.98.529-1.649.964-2.028-3.378-.383-6.929-1.688-6.929-7.514 0-1.66.59-3.017 1.565-4.077-.157-.384-.679-1.927.148-4.016 0 0 1.275-.408 4.18 1.557a14.4 14.4 0 013.8-.512c1.29.006 2.589.174 3.8.512 2.904-1.965 4.178-1.557 4.178-1.557.827 2.089.305 3.632.149 4.016.976 1.06 1.563 2.417 1.563 4.077 0 5.838-3.557 7.127-6.944 7.502.547.47 1.035 1.397 1.035 2.817v4.178c0 .599-.002 1.083.691 1.056C20.871 21.404 24.029 17.066 24.029 11.987 24.029 5.367 18.662.001 12.017.001z" />
                </svg>
            )
        }
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 py-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                                AI Chatbot Cloudhub
                            </h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Transform your customer experience with intelligent AI conversations.
                                Available 24/7 to help your business grow and engage with customers like never before.
                            </p>
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Links Sections */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Product</h4>
                        <ul className="space-y-2">
                            {links.product.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            {links.company.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Support</h4>
                        <ul className="space-y-2">
                            {links.support.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            {links.legal.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Contact Section */}
                <motion.div
                    className="border-t border-gray-800 pt-8 pb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
                            <div className="space-y-2">
                                <div className="flex items-center text-gray-400">
                                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    support@aichatbotpro.com
                                </div>
                                <div className="flex items-center text-gray-400">
                                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +1 (555) 123-4567
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                            <p className="text-gray-400 mb-4">Stay updated with our latest features and AI innovations.</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-purple-500 text-white"
                                />
                                <motion.button
                                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-2 rounded-r-lg font-semibold transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-gray-800 pt-4 text-center">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} AI Chatbot Pro. All rights reserved. Made with ❤️ for better customer experiences.
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;