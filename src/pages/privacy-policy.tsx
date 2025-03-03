// pages/privacy-policy.tsx
import React from 'react';

export default function PrivacyPolicy() {
    return (
        <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Başlık Bölümü */}
                <div className="text-center mb-12 space-y-2">
                    <h1 className="text-5xl font-extrabold text-gray-900 font-serif tracking-tight">
                        Gizlilik Siyasəti
                    </h1>
                    <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full"></div>
                    <p className="text-lg text-gray-600 font-medium mt-4">
                        Son güncəlləmə: {new Date().toLocaleDateString('az-AZ')}
                    </p>
                </div>

                {/* İçerik Konteynırı */}
                <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
                    {/* Üst Bilgi */}
                    <div className="bg-indigo-50 px-8 py-6 border-b border-indigo-100">
                        <h2 className="text-3xl font-bold text-indigo-900 font-serif">
                            Privacy Policy
                            <span className="text-indigo-600 ml-3">·</span>
                        </h2>
                    </div>

                    {/* İçerik Alanı */}
                    <div className="px-8 py-12 space-y-16">
                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                1. TOPLANAN MƏLUMATLAR
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Mescid.az tətbiqi istifadəçilərdən heç bir şəxsi məlumat toplamır.
                                Yalnız Firebase analitika vasitəsilə anonim istifadəçi statistikası toplanır.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                2. GPS VƏ YER MƏLUMATLARI
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                GPS icazəsi yalnız istifadəçinin qiblə istiqamətini və xəritədə
                                məscidləri görməsinə imkan yaratmaq üçün tələb olunur.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                3. BİLDİRİŞLƏR
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                İstifadəçilərə namaz vaxtları və gündəlik Quran ayəsi barədə
                                bildirişlər göndərilir.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                4. ƏLAQƏ
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Gizlilik siyasəti ilə bağlı suallarınız üçün 
                                <a href="mailto:xeritechi@gmail.com" className="text-indigo-600 hover:text-indigo-800 ml-1">
                                    xeritechi@gmail.com
                                </a> 
                                vasitəsilə bizimlə əlaqə saxlaya bilərsiniz.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
