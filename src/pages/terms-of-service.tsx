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
                    {/* İçerik Alanı */}
                    <div className="px-8 py-12 space-y-16">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed">
                                Bu İstifadə Şərtləri ("Şərtlər") Mescid.az mobil tətbiqetməsinin ("Tətbiq") istifadə qaydalarını müəyyən edir. 
                                Tətbiqi yükləməklə və istifadə etməklə bu Şərtləri qəbul etdiyinizi təsdiq edirsiniz.
                            </p>
                        </div>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                1. TƏTBİQİN TƏYİNATI
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Mescid.az tətbiqi istifadəçilərə namaz vaxtlarını göstərmək, qiblə istiqamətini təyin etmək, 
                                məscid və namaz otaqlarının xəritəsini təqdim etmək, Quran təfsirini oxumaq kimi funksiyalar təklif edir. 
                                Tətbiq tamamilə pulsuzdur, reklam içərmir və heç bir ödənişli versiyası mövcud deyil.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                2. NAMAZ VAXTININ HESABLANMASI
                            </h3>
                            <div className="text-gray-700 leading-relaxed text-lg space-y-4">
                                <p>Tətbiqdə təqdim edilən namaz vaxtları:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Qafqaz Müsəlmanlar İdarəsinin hesablamalarına əsaslanan vaxtlar</li>
                                    <li>Muslim World League (Səudiyyə Ərəbistanı) metoduna əsaslanan vaxtlar</li>
                                </ul>
                                <p>
                                    Mescid.az tətbiqi yalnız bu qurumların təqdim etdiyi məlumatları istifadə edir və 
                                    namaz vaxtlarının dəqiqliyinə görə məsuliyyət daşımır.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                3. MƏLUMATLARIN TOPLANMASI
                            </h3>
                            <div className="text-gray-700 leading-relaxed text-lg space-y-4">
                                <p>
                                    Mescid.az tətbiqi istifadəçilərdən şəxsi məlumat toplamır və qeydiyyat tələb etmir. 
                                    Tətbiq yalnız Firebase analitika vasitəsilə anonim statistik məlumatları toplayır:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Tətbiqə neçə istifadəçinin daxil olduğu</li>
                                    <li>Hansı regionlardan daxil olunduğu</li>
                                    <li>Tətbiqin hansı cihazlarda və əməliyyat sistemlərində istifadə edildiyi</li>
                                    <li>Tətbiqin hansı səhifələrinin daha çox istifadə edildiyi</li>
                                    <li>Potensial səhvlərin və çökmələrin analizi</li>
                                </ul>
                                <p>
                                    Bu məlumatlar yalnız tətbiqin təkmilləşdirilməsi və istifadəçi təcrübəsinin 
                                    yaxşılaşdırılması üçün istifadə olunur və heç bir üçüncü tərəflə paylaşılmır.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                4. GPS və BİLDİRİŞ İCAZƏLƏRİ
                            </h3>
                            <div className="text-gray-700 leading-relaxed text-lg space-y-4">
                                <p>
                                    GPS icazəsi tətbiqin xəritə və qiblə funksiyalarının işləməsi üçün tələb olunur. 
                                    GPS icazəsi verilmədiyi halda bu funksiyalar aktiv olmayacaq.
                                </p>
                                <p>
                                    Bildirişlər namaz vaxtlarını və gündəlik Quran ayələrini istifadəçiyə 
                                    çatdırmaq üçün istifadə edilir.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                5. ÜÇÜNCÜ TƏRƏF XİDMƏTLƏRİ
                            </h3>
                            <div className="text-gray-700 leading-relaxed text-lg space-y-4">
                                <p>Xəritə funksiyası Google Maps xəritəsi üzərində işləyir.</p>
                                <p>
                                    Naviqasiya funksiyası üçün istifadəçilər Yandex Map, Google Maps, Apple Maps və ya 
                                    Waze kimi xidmətlərə yönləndirilə bilər. Bu xidmətlərdən istifadəyə görə Mescid.az 
                                    tətbiqi məsuliyyət daşımır.
                                </p>
                                <p>
                                    Quran səhifəsində təqdim olunan məlumatlar Quran.az API-si vasitəsilə təmin edilir.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                6. MƏSULİYYƏTİN MƏHDUDLAŞDIRILMASI
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Mescid.az tətbiqi istifadəçilərə təqdim etdiyi məlumatların tam doğruluğunu və davamlı 
                                əlçatanlığını təmin etməyə çalışır, lakin bu məlumatların düzgünlüyünə zəmanət vermir və 
                                istifadə nəticəsində yarana biləcək hər hansı itki və ya zərərə görə məsuliyyət daşımır.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                7. ƏLAQƏ
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
