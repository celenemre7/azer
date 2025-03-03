// pages/privacy-policy.tsx
<<<<<<< HEAD
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
=======
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

                        {/* Bölümler */}
                        {sections.map((section, idx) => (
                            <section key={idx} className="relative">
                                <div className="absolute -left-8 top-3.5 w-1.5 h-6 bg-indigo-600 rounded-full opacity-20"></div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                                    {section.title}
                                </h3>
                                <div className="prose prose-indigo text-gray-700 leading-relaxed text-lg">
                                    {section.content}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Alt Çizgi */}
                    <div className="border-t border-gray-100 px-8 py-6 bg-gray-50">
                        <p className="text-center text-gray-500 text-sm">
                            Last updated: {new Date().toLocaleDateString('az-AZ')}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

const sections = [
    {
        title: 'Introduction',
        content: (
            <p>
                This Privacy Policy outlines how mescid.az ("we", "our", or "us") collects, uses,
                and protects the information of users ("you" or "your") who use our mobile application
                ("the app"). By using the app, you agree to the terms of this Privacy Policy.
            </p>
        )
    },
    {
        title: 'Information We Collect',
        content: (
            <div className="space-y-6">
                <div>
                    <h4 className="font-medium text-gray-900 mb-2">Location Data</h4>
                    <p>
                        To provide accurate mosque and prayer room locations, the app requires access to your
                        GPS location data. This information is used to display nearby mosques and prayer rooms.
                        We do not store or share this data with third parties.
                    </p>
                </div>
                <div>
                    <h4 className="font-medium text-gray-900 mb-2">Device Information</h4>
                    <p>
                        We may collect technical information about your device, such as the model, operating system,
                        and device identifiers, to improve the app's performance. This data is anonymous and not
                        linked to any personal information.
                    </p>
                </div>
                <div>
                    <h4 className="font-medium text-gray-900 mb-2">Usage Data</h4>
                    <p>
                        We collect anonymous usage data to help us understand how the app is used. This includes
                        which sections of the app are accessed the most, which helps us improve the app’s functionality.
                    </p>
                </div>
            </div>
        )
    },
    {
        title: 'How We Use Your Information',
        content: (
            <div className="space-y-6">
                <div>
                    <h4 className="font-medium text-gray-900 mb-2">Location Services</h4>
                    <p>
                        Your GPS data is used solely to show nearby mosques and prayer rooms and to provide
                        Qibla direction. This data is processed in real-time and is not saved on our servers.
                    </p>
                </div>
                <div>
                    <h4 className="font-medium text-gray-900 mb-2">Notifications</h4>
                    <p>
                        If you enable notifications, we use the selected prayer time calculation method to send
                        alerts at the appropriate times. You can disable these notifications in your device’s settings.
                    </p>
                </div>
                <div>
                    <h4 className="font-medium text-gray-900 mb-2">App Improvements</h4>
                    <p>
                        We analyze anonymous usage data to enhance the app’s features, improve performance,
                        and fix any technical issues.
                    </p>
                </div>
            </div>
        )
    },
    {
        title: 'Third-Party Services',
        content: (
            <p>
                The app uses Google Maps to display mosque and prayer room locations. Google may collect
                data based on its own privacy policies, which we recommend you review.
            </p>
        )
    },
    {
        title: 'Data Security',
        content: (
            <p>
                We prioritize the security of your information and take reasonable steps to protect it. However,
                no method of electronic transmission or storage is completely secure, and we cannot guarantee
                absolute security.
            </p>
        )
    },
    {
        title: 'Children’s Privacy',
        content: (
            <p>
                Our app can be used by people of all ages. We do not knowingly collect personal information
                from children under 13. If you believe your child has provided us with personal information,
                please contact us, and we will delete that data.
            </p>
        )
    },
    {
        title: 'Changes to This Privacy Policy',
        content: (
            <p>
                We may update this Privacy Policy from time to time. If changes occur, we will notify users
                by posting the updated policy in the app. Continued use of the app indicates acceptance
                of any changes.
            </p>
        )
    },
    {
        title: 'Contact Us',
        content: (
            <p>
                For any questions or concerns about this Privacy Policy, you can contact us at:
                <a
                    href="mailto:info@mescid.az"
                    className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200 underline decoration-2 decoration-indigo-300 hover:decoration-indigo-600"
                >
                    info@mescid.az
                </a>.
            </p>
        )
    }
];
>>>>>>> 6cc402e48fbe96a2abc93424c417b1f456d16c43
