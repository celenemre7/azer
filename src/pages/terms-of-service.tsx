// pages/terms-of-service.tsx
import React from "react";

export default function TermsOfService() {
    return (
        <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Başlıq Bölümü */}
                <div className="text-center mb-12 space-y-2">
                    <h1 className="text-5xl font-extrabold text-gray-900 font-serif tracking-tight">
                        İstifadə Şərtləri
                    </h1>
                    <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full"></div>
                </div>

                {/* İçerik Konteynırı */}
                <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
                    {/* Üst Bilgi */}
                    <div className="bg-indigo-50 px-8 py-6 border-b border-indigo-100">
                        <h2 className="text-3xl font-bold text-indigo-900 font-serif">
                            İstifadə Şərtləri
                            <span className="text-indigo-600 ml-3">·</span>
                        </h2>
                    </div>

                    {/* İçerik Alanı */}
                    <div className="px-8 py-12 space-y-16">
                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                1. TƏTBİQİN TƏYİNATI
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Mescid.az tətbiqi istifadəçilərə namaz vaxtlarını göstərmək, qiblə
                                istiqamətini təyin etmək, məscid və namaz otaqlarının xəritəsini
                                təqdim etmək kimi funksiyalar təklif edir.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                2. NAMAZ VAXTININ HESABLANMASI
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Tətbiqdə təqdim edilən namaz vaxtları Qafqaz Müsəlmanlar İdarəsinin 
                                hesablamalarına əsaslanır. Mescid.az tətbiqi namaz vaxtlarının 
                                dəqiqliyinə görə məsuliyyət daşımır.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                3. GPS və BİLDİRİŞ İCAZƏLƏRİ
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                GPS icazəsi tətbiqin xəritə və qiblə funksiyalarının işləməsi üçün
                                tələb olunur. Bildirişlər namaz vaxtlarını və gündəlik Quran 
                                ayələrini istifadəçiyə çatdırmaq üçün istifadə edilir.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                4. ƏLAQƏ
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                İstifadəçilər tətbiq daxilində sorğu göndərmə funksiyası və ya{' '}
                                <a href="mailto:xeritechi@gmail.com" className="text-indigo-600 hover:text-indigo-800">
                                    xeritechi@gmail.com
                                </a>{' '}
                                vasitəsilə bizimlə əlaqə saxlaya bilərlər.
                            </p>
                        </section>
                    </div>

                    {/* Alt Çizgi */}
                    <div className="border-t border-gray-100 px-8 py-6 bg-gray-50">
                        <p className="text-center text-gray-500 text-sm">
                            Son güncəlləmə: {new Date().toLocaleDateString("az-AZ")}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
