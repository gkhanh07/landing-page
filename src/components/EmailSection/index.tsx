'use client'
import React from 'react'
import Link from 'next/link'

const EmailSection = () => {
    return (
        <section className='relative grid md:grid-cols-2 gap-8 px-4 xl:px-16 py-16 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800'>
            {/* Background */}
            <div className='absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10'></div>
            <div className='absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl'></div>
            <div className='absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl'></div>

            {/* Left Column - VPS Info */}
            <div className='relative z-10'>
                <h5 className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-3'>
                    Liên Hệ Thuê VPS
                </h5>

                <p className='text-gray-400 mb-6 text-base'>
                    VPS chất lượng cao, ổn định, bảo mật. Hỗ trợ 24/7.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-[#ed297b] text-sm">support@cloudhub.vn</span>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-[#ed297b] text-sm">1900 123 456</span>
                    </div>
                </div>
            </div>

            {/* Right Column - VPS Plans */}
            <div className='relative z-10'>
                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
                    <h6 className="text-xl font-bold text-white mb-4">Gói VPS Phổ Biến</h6>

                    {/* VPS Plans */}
                    <div className="space-y-3 mb-6">
                        <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                            <div className="flex justify-between items-center mb-1">
                                <h4 className="font-semibold text-[#ed297b]">VPS Basic</h4>
                                <span className="text-lg font-bold text-white">199K/tháng</span>
                            </div>
                            <p className="text-gray-400 text-xs">1 vCPU • 1GB RAM • 20GB SSD</p>
                        </div>

                        <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                            <div className="flex justify-between items-center mb-1">
                                <h4 className="font-semibold text-[#ed297b]">VPS Pro</h4>
                                <span className="text-lg font-bold text-white">399K/tháng</span>
                            </div>
                            <p className="text-gray-400 text-xs">2 vCPU • 4GB RAM • 50GB SSD</p>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                        <Link href="https://cloudhub.vn/"
                            className='block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-center font-medium py-3 rounded-lg transition-all duration-300'>
                            Xem Tất Cả Gói VPS →
                        </Link>

                        <button className='bg-transparent border border-[#ed297b] text-[#ed297b] hover:bg-[#ed297b] hover:text-white font-medium py-3 px-6 rounded-lg w-full transition-all duration-300'>
                            Tư Vấn Miễn Phí
                        </button>
                    </div>

                    {/* Features */}
                    <div className="mt-4 pt-4 border-t border-gray-700/50">
                        <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                            <span>✓ 99.9% Uptime</span>
                            <span>✓ Hỗ trợ 24/7</span>
                            <span>✓ Backup tự động</span>
                            <span>✓ Bảo mật SSL</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EmailSection
