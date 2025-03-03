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
            <h2 className="text-3xl font-bold text-indigo-900 font-serif shadow-md p-4 rounded-lg">
              İstifadə Şərtləri
              <span className="text-indigo-600 ml-3">·</span>
            </h2>
          </div>

          {/* İçerik Alanı */}
          <div className="px-8 py-12 space-y-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              İSTİFADƏ ŞƏRTLƏRİ
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg bg-gray-100 p-4 rounded-lg shadow-sm">
              Bu İstifadə Şərtləri ("Şərtlər") Mescid.az mobil tətbiqetməsinin
              ("Tətbiq") istifadə qaydalarını müəyyən edir. Tətbiqi yükləməklə
              və istifadə etməklə bu Şərtləri qəbul etdiyinizi təsdiq edirsiniz.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              1. TƏTBİQİN TƏYİNATI
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg bg-gray-100 p-4 rounded-lg shadow-sm">
              Mescid.az tətbiqi istifadəçilərə namaz vaxtlarını göstərmək, qiblə
              istiqamətini təyin etmək, məscid və namaz otaqlarının xəritəsini
              təqdim etmək, Quran təfsirini oxumaq kimi funksiyalar təklif edir.
              Tətbiq tamamilə pulsuzdur, reklam içərmir və heç bir ödənişli
              versiyası mövcud deyil.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              2. NAMAZ VAXTININ HESABLANMASI
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Tətbiqdə təqdim edilən namaz vaxtları:
              <br />
              Qafqaz Müsəlmanlar İdarəsinin hesablamalarına əsaslanan vaxtlar
              <br />
              Muslim World League (Səudiyyə Ərəbistanı) metoduna əsaslanan
              vaxtlar
              <br />
              Mescid.az tətbiqi yalnız bu qurumların təqdim etdiyi məlumatları
              istifadə edir və namaz vaxtlarının dəqiqliyinə görə məsuliyyət
              daşımır.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              3. MƏLUMATLARIN TOPLANMASI
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Mescid.az tətbiqi istifadəçilərdən şəxsi məlumat toplamır və
              qeydiyyat tələb etmir. Tətbiq yalnız Firebase analitika vasitəsilə
              anonim statistik məlumatları toplayır:
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
              Bu məlumatlar yalnız tətbiqin təkmilləşdirilməsi və istifadəçi
              təcrübəsinin yaxşılaşdırılması üçün istifadə olunur və heç bir
              üçüncü tərəflə paylaşılmır.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              4. GPS və BİLDİRİŞ İCAZƏLƏRİ
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              GPS icazəsi tətbiqin xəritə və qiblə funksiyalarının işləməsi üçün
              tələb olunur. GPS icazəsi verilmədiyi halda bu funksiyalar aktiv
              olmayacaq.
              <br />
              Bildirişlər namaz vaxtlarını və gündəlik Quran ayələrini
              istifadəçiyə çatdırmaq üçün istifadə edilir.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              5. ÜÇÜNCÜ TƏRƏF XİDMƏTLƏRİ
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Xəritə funksiyası Google Maps xəritəsi üzərində işləyir.
              <br />
              Naviqasiya funksiyası üçün istifadəçilər Yandex Map, Google Maps,
              Apple Maps və ya Waze kimi xidmətlərə yönləndirilə bilər. Bu
              xidmətlərdən istifadəyə görə Mescid.az tətbiqi məsuliyyət daşımır.
              <br />
              Quran səhifəsində təqdim olunan məlumatlar Quran.az API-si
              vasitəsilə təmin edilir.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              6. MƏSULİYYƏTİN MƏHDUDLAŞDIRILMASI
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Mescid.az tətbiqi istifadəçilərə təqdim etdiyi məlumatların tam
              doğruluğunu və davamlı əlçatanlığını təmin etməyə çalışır, lakin
              bu məlumatların düzgünlüyünə zəmanət vermir və istifadə
              nəticəsində yarana biləcək hər hansı itki və ya zərərə görə
              məsuliyyət daşımır.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              7. ƏLAQƏ
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              İstifadəçilər tətbiq daxilində sorğu göndərmə funksiyası və ya
              mescid.az vebsaytı vasitəsilə bizimlə əlaqə saxlaya bilərlər.
            </p>
          </div>

          {/* Alt Çizgi */}
          <div className="border-t border-gray-100 px-8 py-6 bg-gray-50">
            <p className="text-center text-gray-500 text-sm">
              Last updated: {new Date().toLocaleDateString("az-AZ")}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
