// pages/privacy-policy.tsx
import React from 'react';

export default function PrivacyPolicy() {
    return (
        <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Başlık Bölümü */}
                <div className="text-center mb-12 space-y-2">
                    <h1 className="text-5xl font-extrabold text-gray-900 font-serif tracking-tight">
                        GİZLİLİK SİYASƏTİ
                    </h1>
                    <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full"></div>
                </div>

                {/* İçerik Konteynırı */}
                <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
                    {/* İçerik Alanı */}
                    <div className="px-8 py-12 space-y-16">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed">
                                Bu Gizlilik Siyasəti Mescid.az tətbiqinin istifadəçilərin məlumatlarını necə 
                                topladığı və istifadə etdiyi barədə məlumat verir.
                            </p>
                        </div>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                1. TOPLANAN MƏLUMATLAR
                            </h3>
                            <div className="text-gray-700 leading-relaxed text-lg space-y-4">
                                <p>
                                    Mescid.az tətbiqi istifadəçilərdən heç bir şəxsi məlumat toplamır. 
                                    Yalnız Firebase analitika vasitəsilə anonim istifadəçi statistikası toplanır:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Tətbiqə neçə istifadəçinin daxil olduğu</li>
                                    <li>Hansı regionlardan daxil olunduğu</li>
                                    <li>Tətbiqin hansı cihazlarda və əməliyyat sistemlərində istifadə edildiyi</li>
                                    <li>Tətbiqin hansı səhifələrinin daha çox istifadə edildiyi</li>
                                    <li>Potensial səhvlərin və çökmələrin analizi</li>
                                </ul>
                                <p>
                                    Bu məlumatlar yalnız tətbiqin optimallaşdırılması və istifadəçi təcrübəsinin 
                                    yaxşılaşdırılması üçün istifadə olunur və heç bir üçüncü tərəflə paylaşılmır.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                2. GPS VƏ YER MƏLUMATLARI
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                GPS icazəsi yalnız istifadəçinin qiblə istiqamətini və xəritədə məscidləri 
                                görməsinə imkan yaratmaq üçün tələb olunur. GPS məlumatları tətbiq tərəfindən 
                                saxlanılmır və üçüncü tərəflərlə paylaşılmır.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                3. BİLDİRİŞLƏR
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                İstifadəçilərə namaz vaxtları və gündəlik Quran ayəsi barədə bildirişlər göndərilir. 
                                Bu bildirişlər yalnız tətbiq daxilində aktivləşdirilə və istəyə bağlı olaraq 
                                deaktiv edilə bilər.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                4. ÜÇÜNCÜ TƏRƏF XİDMƏTLƏRİ
                            </h3>
                            <div className="text-gray-700 leading-relaxed text-lg space-y-4">
                                <p>
                                    Quran səhifəsindəki məlumatlar Quran.az API vasitəsilə təqdim edilir.
                                </p>
                                <p>
                                    Xəritə və naviqasiya xidmətləri üçün Google Maps istifadə olunur, 
                                    digər naviqasiya tətbiqlərinə yönləndirmələr də mümkündür.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                5. TƏHLÜKƏSİZLİK
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Mescid.az tətbiqi istifadəçi məlumatlarını qorumaq üçün lazımi texniki 
                                tədbirləri görür və heç bir şəxsi məlumat saxlamır.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                6. ƏLAQƏ
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Gizlilik siyasəti ilə bağlı suallarınız üçün{' '}
                                <a href="mailto:xeritechi@gmail.com" className="text-indigo-600 hover:text-indigo-800">
                                    xeritechi@gmail.com
                                </a>{' '}
                                vasitəsilə bizimlə əlaqə saxlaya bilərsiniz.
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
