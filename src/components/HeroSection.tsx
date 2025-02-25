// components/HeroSection.tsx
import React from 'react';

export default function HeroSection() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden isolate">
            {/* Video Container with Parallax Effect */}
            <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden">
                <video
                    className="w-full h-full object-cover scale-105 animate-zoom-in"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                >
                    <source src="/video.mp4" type="video/mp4" />
                    <source src="/video.webm" type="video/webm" />
                    <track kind="captions" srcLang="az" label="Azerbaijani" />
                </video>
            </div>

            {/* Dynamic Gradient Layers */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-primary-900/30" />
            <div className="absolute inset-0 bg-noise opacity-10" />

            {/* Main Content Container with extra bottom padding */}
            <div className="relative z-10 container mx-auto px-4 pb-24">
                <div className="max-w-7xl mx-auto text-center space-y-8">
                    {/* Animated Logo & Title */}
                    <div className="space-y-6 animate-fade-in-up [animation-delay:200ms]">
                        <div className="relative inline-block before:absolute before:-inset-2 before:bg-emerald-500/20 before:rounded-full before:blur-xl">
                            <img
                                src="/logo.png"
                                alt="MescidApp Logo"
                                className="h-24 w-24 mx-auto drop-shadow-2xl transition-transform duration-1000 hover:rotate-[15deg]"
                                loading="eager"
                            />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-[1.15] tracking-tighter bg-[linear-gradient(45deg,_#fff_30%,_#d1fae5)] bg-clip-text text-transparent">
                            <span className="relative inline-block before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-emerald-400 before:animate-underline-expand">
                                MəscidApp
                            </span>
                        </h1>
                    </div>

                    {/* Description with Enhanced Typography */}
                    <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-lg animate-fade-in-up [animation-delay:400ms]">
                        Namaz vaxtlarını <span className="text-emerald-300 font-semibold">gecikdirməyin</span>,{' '}
                        <span className="text-emerald-300 font-semibold">dəqiq</span> qiblə istiqamətini və{' '}
                        <span className="text-emerald-300 font-semibold">namaz qılmaq</span> üçün ən yaxın məscidi saniyələr ərzində tapın.
                    </p>

                    {/* Enhanced CTA Buttons with Bottom Spacing */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up [animation-delay:600ms] mb-24 md:mb-24 lg:mb-32">
                        {[
                            {
                                os: 'iOS',
                                store: 'App Store',
                                icon: '/app-store.png',
                                link: 'https://apps.apple.com/az/app/mescid-az-namaz-vaxtlar%C4%B1/id6741332172'
                            },
                            {
                                os: 'Android',
                                store: 'Google Play',
                                icon: '/play-store.png',
                                link: 'https://play.google.com/store/apps/details?id=app.prayertime.mescidaz&hl=az'
                            }
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-gradient-to-br from-white/5 to-white/[0.01] backdrop-blur-2xl border border-white/10 rounded-2xl px-8 py-5 transition-all duration-300 hover:border-emerald-400/30 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-1 w-full sm:w-auto"
                            >
                                <div className="flex items-center justify-center">
                                    <div className="relative p-4 bg-white/5 rounded-xl">
                                        <img
                                            src={item.icon}
                                            alt={item.store}
                                            className="h-12 w-auto transition-transform group-hover:scale-125"
                                        />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Premium Scroll Indicator: Sadece md ve üzeri ekranlarda görünür */}
            <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20 group mt-12">
                <div className="flex flex-col items-center justify-center space-y-4 w-full">
                    <div className="mt-4">
                        <div className="relative w-12 h-20 border-2 border-white/20 rounded-[2.5rem] overflow-hidden backdrop-blur-sm flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
                            <div className="w-1.5 h-4 bg-white/80 rounded-full animate-scroll-wheel transform origin-center" />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-radial-gradient from-emerald-500/30 to-transparent" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-y-2 opacity-60 group-hover:opacity-100 transition-opacity w-full">
                        <span className="text-xs font-medium tracking-wider text-emerald-200 uppercase animate-pulse-slow text-center">
                            Kəşf edin
                        </span>
                        <svg
                            className="w-5 h-5 text-white animate-bounce-slow mx-auto"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
