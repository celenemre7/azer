// pages/index.tsx

import React from 'react';
import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>MescidApp | Namaz Vakitləri, Qiblə və Məscidlər</title>
        <meta
          name="description"
          content="MescidApp ilə namaz vaxtlarını asanlıqla təqib edin, qiblə istiqamətini tapın və ətrafınızdakı məscidləri dərhal kəşf edin."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Hero Bölməsi: Arxa fon videosu + başlıq + mağaza linkləri */}
      <HeroSection />

      {/* Özəlliklər Bölməsi: Tətbiqin xüsusiyyətlərini kart şəklində göstərir */}
      <FeaturesSection />

      {/* CTA Bölməsi: İstifadəçini tətbiqi yükləməyə çağırış */}
      <section className="relative bg-gradient-to-br from-green-900 to-green-800 py-24 overflow-hidden">
        {/* Dekorativ arxaplan elementi */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url(/islamic-pattern.svg)',
          backgroundSize: '320px',
          backgroundRepeat: 'repeat'
        }}></div>

        <div className="relative container mx-auto px-4 text-center">
          {/* Başlıq hissəsi */}
          <div className="mb-8 space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-white">
                Namaz Həyatınızı Asanlaşdırın
              </span>
            </h2>
            <p className="text-lg md:text-xl text-green-100 opacity-90 leading-relaxed">
              Namaz vaxtlarını qaçırmayın, dəqiq qiblə istiqamətini tapın və
              <span className="block md:inline"> ən yaxın məscidə saniyələr ərzində çatın.</span>
            </p>
          </div>

          {/* CTA Düymələri */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
            <a
              href="#"
              className="group relative inline-flex h-16 w-48 items-center justify-center rounded-xl bg-black/90 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-black/95"
            >
              <img
                src="/app-store.png"
                alt="App Store-dan Yüklə"
                className="h-10 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-xl border border-white/10"></div>
            </a>

            <a
              href="#"
              className="group relative inline-flex h-16 w-48 items-center justify-center rounded-xl bg-black/90 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-black/95"
            >
              <img
                src="/play-store.png"
                alt="Google Play-dən Yüklə"
                className="h-10 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-xl border border-white/10"></div>
            </a>
          </div>

          {/* Alt açıqlama */}
          <p className="mt-8 text-sm text-green-200/80 opacity-90">
            iOS 15+ və Android 10+ ilə tam uyğun
          </p>
        </div>
      </section>
    </>
  );
}
