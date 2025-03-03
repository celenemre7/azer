// pages/terms-of-service.tsx
<<<<<<< HEAD
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
=======
import React from 'react';

export default function TermsOfService() {
    return (
        <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Başlık Bölümü */}
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
                            User Agreement
                            <span className="text-indigo-600 ml-3">·</span>
                        </h2>
                    </div>

                    {/* İçerik Alanı */}
                    <div className="px-8 py-12 space-y-16">

                        {/* Bölümler */}
                        {[
                            {
                                title: "Introduction",
                                content: (
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        This User Agreement outlines the terms and conditions for using the mescid.az
                                        mobile application ("the app"). By using the app, you agree to comply
                                        with these terms.
                                    </p>
                                )
                            },
                            {
                                title: "Service Description",
                                content: (
                                    <>
                                        <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                            The mescid.az app provides users with several services, including the ability to:
                                        </p>
                                        <ul className="space-y-4 pl-6">
                                            {[
                                                "View daily prayer times using two calculation methods, with options for prayer notifications.",
                                                "Use a Qibla compass to determine the direction of the Qibla.",
                                                "View the locations of mosques and prayer rooms on a Google Maps-based map."
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-start text-gray-700">
                                                    <div className="flex-shrink-0 mt-1.5 mr-3">
                                                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                                                    </div>
                                                    <span className="text-lg leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )
                            },
                            {
                                title: "User Responsibilities",
                                content: (
                                    <div className="space-y-8">
                                        {[
                                            {
                                                title: "Location Access",
                                                text: "The app relies on accurate GPS data to function properly. Ensure that your device’s GPS is enabled to access nearby mosque and prayer room locations. Disabling GPS may limit the app’s functionality."
                                            },
                                            {
                                                title: "Appropriate Use",
                                                text: "The app is designed for religious purposes only, and users are expected to use it in line with its intended religious use."
                                            },
                                            {
                                                title: "Notifications",
                                                text: "If you enable the app’s notification feature, you will receive prayer time alerts. You are responsible for managing these notifications through your device settings."
                                            }
                                        ].map((item, idx) => (
                                            <div key={idx} className="group">
                                                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-3 h-3 bg-indigo-600 rounded-full mr-3 transition-all group-hover:w-4"></span>
                                                    {item.title}
                                                </h4>
                                                <p className="text-gray-700 leading-relaxed text-lg pl-6">
                                                    {item.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )
                            },
                            {
                                title: "Prohibited Conduct",
                                content: (
                                    <ul className="space-y-4 pl-6">
                                        {[
                                            "Use the app for illegal or unauthorized activities.",
                                            "Interfere with the proper functioning of the app or try to disrupt its operations."
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start text-gray-700">
                                                <div className="flex-shrink-0 mt-2 mr-3">
                                                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <span className="text-lg leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )
                            },
                            {
                                title: "Limitation of Liability",
                                content: (
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        We strive to ensure the accuracy of the information provided in the app, but we do not
                                        guarantee the correctness of mosque locations, GPS data, or Qibla direction. We are not
                                        liable for any damages or losses that result from using the app, including any inaccuracies
                                        in GPS or mosque locations.
                                    </p>
                                )
                            },
                            {
                                title: "Modification of Terms and Services",
                                content: (
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        We reserve the right to modify or discontinue any aspect of the app at any time without
                                        notice. Users will be notified of significant changes through the app, and continued use
                                        of the app indicates acceptance of any changes.
                                    </p>
                                )
                            },
                            {
                                title: "Contact Us",
                                content: (
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        For any questions about this User Agreement, please contact us at:{" "}
                                        <a
                                            href="mailto:info@mescid.az"
                                            className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200 underline decoration-2 decoration-indigo-300 hover:decoration-indigo-600"
                                        >
                                            info@mescid.az
                                        </a>
                                    </p>
                                )
                            }
                        ].map((section, idx) => (
                            <section key={idx} className="relative">
                                <div className="absolute -left-8 top-3.5 w-1.5 h-6 bg-indigo-600 rounded-full opacity-20"></div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                    {section.title}
                                </h3>
                                {section.content}
                            </section>
                        ))}
                    </div>

                    {/* Alt Çizgi */}
                    <div className="border-t border-gray-100 px-8 py-6 bg-gray-50">
                        <p className="text-center text-gray-500 text-sm">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
>>>>>>> 6cc402e48fbe96a2abc93424c417b1f456d16c43
