// pages/privacy-policy.tsx
import React, { useEffect, useState } from "react";

export default function PrivacyPolicy() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString("az-AZ"));
  }, []);

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık Bölümü */}
        <div className="text-center mb-12 space-y-2">
          <h1 className="text-5xl font-extrabold text-gray-900 font-serif tracking-tight">
            GİZLİLİK SİYASƏTİ
          </h1>
          <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 font-medium mt-4">
            Son güncəlləmə: {currentDate}
          </p>
        </div>

        {/* İçerik Konteynırı */}
        <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
          {/* Üst Bilgi */}
          <div className="bg-indigo-50 px-8 py-6 border-b border-indigo-100">
            <h2 className="text-3xl font-bold text-indigo-900 font-serif">
              Gizlilik Siyasəti
              <span className="text-indigo-600 ml-3">·</span>
            </h2>
          </div>

          {/* İçerik Alanı */}
          <div className="px-8 py-12 space-y-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              1. TOPLANAN MƏLUMATLAR
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Mescid.az tətbiqi istifadəçilərdən heç bir şəxsi məlumat toplamır.
              Yalnız Firebase analitika vasitəsilə anonim istifadəçi
              statistikası toplanır:
              <br />
              Tətbiqə neçə istifadəçinin daxil olduğu
              <br />
              Hansı regionlardan daxil olunduğu
              <br />
              Tətbiqin hansı cihazlarda və əməliyyat sistemlərində istifadə
              edildiyi
              <br />
              Tətbiqin hansı səhifələrinin daha çox istifadə edildiyi
              <br />
              Potensial səhvlərin və çökmələrin analizi (hansı cihazlarda və
              hansı əməliyyat sistemlərində baş verdiyi)
              <br />
              Bu məlumatlar yalnız tətbiqin optimallaşdırılması və istifadəçi
              təcrübəsinin yaxşılaşdırılması üçün istifadə olunur və heç bir
              üçüncü tərəflə paylaşılmır.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              2. GPS VƏ YER MƏLUMATLARI
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              GPS icazəsi yalnız istifadəçinin qiblə istiqamətini və xəritədə
              məscidləri görməsinə imkan yaratmaq üçün tələb olunur. GPS
              məlumatları tətbiq tərəfindən saxlanılmır və üçüncü tərəflərlə
              paylaşılmır.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              3. BİLDİRİŞLƏR
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              İstifadəçilərə namaz vaxtları və gündəlik Quran ayəsi barədə
              bildirişlər göndərilir. Bu bildirişlər yalnız tətbiq daxilində
              aktivləşdirilə və istəyə bağlı olaraq deaktiv edilə bilər.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              4. ÜÇÜNCÜ TƏRƏF XİDMƏTLƏRİ
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Quran səhifəsindəki məlumatlar Quran.az API vasitəsilə təqdim
              edilir.
              <br />
              Xəritə və naviqasiya xidmətləri üçün Google Maps istifadə olunur,
              digər naviqasiya tətbiqlərinə yönləndirmələr də mümkündür.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              5. TƏHLÜKƏSİZLİK
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Mescid.az tətbiqi istifadəçi məlumatlarını qorumaq üçün lazımi
              texniki tədbirləri görür və heç bir şəxsi məlumat saxlamır.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              6. ƏLAQƏ
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Gizlilik siyasəti ilə bağlı suallarınız üçün mescid.az vebsaytı
              vasitəsilə bizimlə əlaqə saxlaya bilərsiniz.
            </p>
          </div>

          {/* Alt Çizgi */}
          <div className="border-t border-gray-100 px-8 py-6 bg-gray-50">
            <p className="text-center text-gray-500 text-sm">
              Last updated: {currentDate}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
