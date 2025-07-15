"use client";
import React from 'react';
import { motion } from 'framer-motion';

const FeatureSection = () => {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Hiệu Năng Cao",
            description: "CPU Intel Xeon mới nhất với NVMe SSD cho tốc độ xử lý vượt trội.",
            gradient: "from-yellow-400 to-orange-500",
            bgGradient: "from-yellow-500/10 to-orange-500/10",
            borderColor: "border-yellow-500/20"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Bảo Mật Tuyệt Đối",
            description: "DDoS Protection, Firewall và SSL Certificate miễn phí cho mọi VPS.",
            gradient: "from-green-400 to-emerald-500",
            bgGradient: "from-green-500/10 to-emerald-500/10",
            borderColor: "border-green-500/20"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Hỗ Trợ 24/7",
            description: "Đội ngũ kỹ thuật chuyên nghiệp sẵn sàng hỗ trợ bạn mọi lúc.",
            gradient: "from-blue-400 to-cyan-500",
            bgGradient: "from-blue-500/10 to-cyan-500/10",
            borderColor: "border-blue-500/20"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
            ),
            title: "Backup Tự Động",
            description: "Hệ thống backup tự động hàng ngày đảm bảo dữ liệu luôn an toàn.",
            gradient: "from-purple-400 to-pink-500",
            bgGradient: "from-purple-500/10 to-pink-500/10",
            borderColor: "border-purple-500/20"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            title: "Uptime 99.9%",
            description: "Cam kết uptime 99.9% với hạ tầng datacenter tier-3 hiện đại.",
            gradient: "from-indigo-400 to-purple-500",
            bgGradient: "from-indigo-500/10 to-purple-500/10",
            borderColor: "border-indigo-500/20"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
            ),
            title: "Giá Cả Hợp Lý",
            description: "Gói VPS với mức giá cạnh tranh nhất thị trường, phù hợp mọi ngân sách.",
            gradient: "from-emerald-400 to-teal-500",
            bgGradient: "from-emerald-500/10 to-teal-500/10",
            borderColor: "border-emerald-500/20"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    return (
        <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
            {/* Background Elements */}
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
                        Tính Năng Vượt Trội
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        CloudHub VPS mang đến những tính năng tiên tiến nhất với công nghệ hàng đầu,
                        đảm bảo trải nghiệm hoàn hảo cho mọi nhu cầu của bạn.
                    </motion.p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                rotateY: 5,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative"
                        >
                            {/* Card Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>

                            {/* Main Card */}
                            <div className={`relative bg-white/80 backdrop-blur-sm border ${feature.borderColor} border-2 rounded-2xl p-8 h-full transition-all duration-500 group-hover:border-opacity-80 group-hover:bg-white/90 shadow-lg hover:shadow-xl`}>
                                {/* Icon Container */}
                                <motion.div
                                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl mb-6 shadow-lg`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="text-white">
                                        {feature.icon}
                                    </div>
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    {feature.description}
                                </p>

                                {/* Decorative elements */}
                                <div className="absolute top-4 right-4 w-20 h-20 opacity-5">
                                    <div className={`w-full h-full bg-gradient-to-r ${feature.gradient} rounded-full blur-2xl`}></div>
                                </div>

                                {/* Bottom gradient line */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Khám Phá Thêm Tính Năng →
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}

export default FeatureSection;