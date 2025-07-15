"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white py-30 px-4 md:px-10 overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10"></div>
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/15 to-red-600/15 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-20">
                <div className="flex-1 text-center md:text-left relative">

                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl -m-8"></div>

                    <div className="relative z-10 p-8">

                        <motion.h1
                            className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Thuê <span className="text-[#ed297b] drop-shadow-lg">VPS</span> Chất Lượng Cao
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            Máy chủ ảo VPS hiệu năng cao, ổn định, bảo mật tuyệt đối. Hỗ trợ 24/7, giá cả cạnh tranh cho mọi nhu cầu từ cá nhân đến doanh nghiệp.
                        </motion.p>
                        <motion.div
                            className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        >
                            <motion.a
                                href="#get-started"
                                className="bg-gradient-to-r from-[#ed297b] to-pink-600 hover:from-pink-600 hover:to-[#ed297b] text-white px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-xl"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Thuê VPS Ngay
                            </motion.a>
                            <motion.a
                                href="#learn-more"
                                className="text-[#ed297b] hover:text-white text-lg font-medium bg-white/5 backdrop-blur-sm px-6 py-4 rounded-2xl border border-[#ed297b]/30 hover:border-white/30 transition-all duration-300"
                                whileHover={{ y: -2, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Link href="https://cloudhub.vn/">
                                    Xem Bảng Giá →
                                </Link>
                            </motion.a>
                        </motion.div>
                    </div>

                </div>

                <motion.div
                    className="flex-1 relative"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                >
                    {/* Glassmorphism frame for image */}
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl -m-4"></div>

                    <motion.div
                        className="relative z-10 p-6"
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="ml-10 relative">
                            <Image
                                width={450}
                                height={450}
                                src="/images/vps.png"
                                alt="VPS Server"
                                className="rounded-2xl shadow-2xl"
                            />
                            {/* Glowing effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-2xl blur-xl -z-10"></div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;