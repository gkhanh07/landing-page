"use client";
import React from 'react';
import { motion } from 'framer-motion';

const PricingSection = () => {
    const plans = [
        {
            name: "Starter",
            price: "$29",
            period: "/month",
            description: "Perfect for small businesses getting started with AI",
            features: [
                "Up to 1,000 conversations/month",
                "Basic AI responses",
                "Email support",
                "Standard customization",
                "1 integration",
                "Basic analytics"
            ],
            highlighted: false,
            color: "from-blue-500 to-cyan-500",
            bgColor: "from-blue-500/10 to-cyan-500/10"
        },
        {
            name: "Professional",
            price: "$79",
            period: "/month",
            description: "Advanced features for growing businesses",
            features: [
                "Up to 10,000 conversations/month",
                "Advanced AI with context memory",
                "Priority support & live chat",
                "Full UI customization",
                "5 integrations",
                "Advanced analytics & reports",
                "Multi-language support",
                "Custom training data"
            ],
            highlighted: true,
            color: "from-purple-500 to-pink-500",
            bgColor: "from-purple-500/10 to-pink-500/10"
        },
        {
            name: "Enterprise",
            price: "$199",
            period: "/month",
            description: "Unlimited power for enterprise solutions",
            features: [
                "Unlimited conversations",
                "Custom AI model training",
                "24/7 dedicated support",
                "White-label solution",
                "Unlimited integrations",
                "Enterprise-grade security",
                "Custom deployment options",
                "SLA guarantee",
                "On-premise hosting available"
            ],
            highlighted: false,
            color: "from-emerald-500 to-teal-500",
            bgColor: "from-emerald-500/10 to-teal-500/10"
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
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
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
                        Simple, Transparent <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Pricing</span>
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Choose the perfect plan for your business. All plans include our core AI features with 14-day free trial.
                    </motion.p>
                </motion.div>

                {/* Pricing Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`relative rounded-3xl p-8 transition-all duration-300 ${plan.highlighted
                                    ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white scale-105 shadow-2xl'
                                    : 'bg-white/80 backdrop-blur-lg border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                                }`}
                            whileHover={{
                                scale: plan.highlighted ? 1.08 : 1.05,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-sm mb-4 ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                                    {plan.description}
                                </p>
                                <div className="flex items-baseline justify-center">
                                    <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                                        {plan.price}
                                    </span>
                                    <span className={`text-lg ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                                        {plan.period}
                                    </span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start">
                                        <svg
                                            className={`w-5 h-5 mt-0.5 mr-3 flex-shrink-0 ${plan.highlighted ? 'text-green-300' : 'text-green-500'
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className={`text-sm ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <motion.button
                                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${plan.highlighted
                                        ? 'bg-white text-purple-600 hover:bg-gray-100'
                                        : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Free Trial
                            </motion.button>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-600 mb-4">
                        All plans include 14-day free trial • No setup fees • Cancel anytime
                    </p>
                    <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            SSL Encrypted
                        </div>
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            GDPR Compliant
                        </div>
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            99.9% Uptime
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingSection;
