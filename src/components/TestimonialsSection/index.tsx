"use client";
import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO, TechStart Inc.",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            content: "This AI chatbot has transformed our customer service. We've seen a 40% increase in customer satisfaction and our response time has improved dramatically.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "CTO, Digital Solutions",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            content: "The API integration was seamless and the customization options are incredible. Our development team had it up and running in just a few hours.",
            rating: 5
        },
        {
            name: "Emily Rodriguez",
            role: "Marketing Director, E-commerce Pro",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            content: "The multilingual support has helped us expand globally. Our international customers love the instant support in their native language.",
            rating: 5
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10"></div>
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-400/15 to-cyan-600/15 rounded-full blur-3xl"></div>

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
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Customers Say</span>
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Join thousands of satisfied businesses who have transformed their customer experience with our AI chatbot.
                    </motion.p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                            whileHover={{
                                scale: 1.05,
                                rotateY: 5,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Rating Stars */}
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-yellow-400 fill-current"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Testimonial Content */}
                            <blockquote className="text-gray-200 text-lg leading-relaxed mb-6">
                                "{testimonial.content}"
                            </blockquote>

                            {/* Author Info */}
                            <div className="flex items-center">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <div className="text-white font-semibold">{testimonial.name}</div>
                                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.a
                        href="#pricing"
                        className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Join Our Happy Customers
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
