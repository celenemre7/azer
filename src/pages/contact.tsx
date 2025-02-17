import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
    return (
        <main className="bg-gradient-to-b from-emerald-50 to-white min-h-screen py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Başlık Kısmı */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-4 tracking-tight">
                        Əlaqə
                    </h1>
                    <p className="text-xl text-emerald-800/90 max-w-2xl mx-auto leading-relaxed">
                        Bizimlə əlaqə saxlamaq üçün aşağıdakı formu doldura bilərsiniz və ya birbaşa əlaqə vasitələrimizdən istifadə edə bilərsiniz.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
                    {/* İletişim Bilgileri */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white rounded-2xl p-8 shadow-lg shadow-emerald-100/50 border border-emerald-50">
                            <h3 className="text-xl font-semibold text-emerald-900 mb-6">Birbaşa əlaqə</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-emerald-100/50 rounded-lg">
                                        <EnvelopeIcon className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-emerald-900 mb-1">E-poçt</h4>
                                        <a href="mailto:info@mescid.az" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                                            info@mescid.az
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-emerald-100/50 rounded-lg">
                                        <PhoneIcon className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-emerald-900 mb-1">Telefon</h4>
                                        <a href="tel:+994123456789" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                                            +994 12 345 67 89
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-emerald-100/50 rounded-lg">
                                        <MapPinIcon className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-emerald-900 mb-1">Ünvan</h4>
                                        <p className="text-emerald-600">Bakı, Azərbaycan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Alanı */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg shadow-emerald-100/50 border border-emerald-50">
                            <h2 className="text-3xl font-bold text-emerald-900 mb-8">Mesaj Göndər</h2>

                            <form className="space-y-6">
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-emerald-900/90">
                                            Adınız
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Adınızı daxil edin"
                                            className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200/50 transition-all outline-none"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-emerald-900/90">
                                            E-poçt
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="E-poçt ünvanınızı daxil edin"
                                            className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200/50 transition-all outline-none"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-emerald-900/90">
                                        Mesajınız
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        placeholder="Mesajınızı buraya yazın..."
                                        className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200/50 transition-all outline-none"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                                >
                                    Mesajı Göndər
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}