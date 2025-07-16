"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Email Us",
            description: "Get in touch with our team",
            contact: "support@aichatbotpro.com"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: "Call Us",
            description: "Speak with our experts",
            contact: "+1 (555) 123-4567"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
            title: "Live Chat",
            description: "Chat with our AI assistant",
            contact: "Available 24/7"
        }
    ];

    return (
        <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-transparent to-blue-100/30"></div>
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-200/20 to-red-200/20 rounded-full blur-3xl"></div>

            <div className="relative container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Get in <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Touch</span>
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Ready to transform your customer experience? Our team is here to help you get started with AI Chatbot Pro.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Let's Start a Conversation</h3>
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-lg rounded-2xl border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                                        <p className="text-gray-600 mb-2">{info.description}</p>
                                        <p className="text-purple-600 font-medium">{info.contact}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white/80 backdrop-blur-lg rounded-3xl border border-gray-200 shadow-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Your Company"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Tell us about your project and how we can help..."
                                        required
                                    />
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
