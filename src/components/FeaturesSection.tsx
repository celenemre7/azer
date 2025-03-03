<<<<<<< HEAD
import React, { useState, useCallback, useMemo, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaWhatsapp } from "react-icons/fa";
import type { Swiper as SwiperType } from "swiper";
import {
  Navigation,
  Pagination,
  Parallax,
  Controller,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

// Type Definitions
interface Feature {
  title: string;
  image: string;
  content: React.ReactNode;
  gradient: [string, string];
}

interface FeaturesSliderProps {
  features: Feature[];
  activeIndex: number;
  onSlideChange: (index: number) => void;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
  isActive: boolean;
  onClick: (index: number) => void;
=======
import React, { useState, useCallback, useMemo, memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaWhatsapp } from 'react-icons/fa';
import type { Swiper as SwiperType } from 'swiper';
import {
    Navigation,
    Pagination,
    Parallax,
    Controller,
    Autoplay,
    EffectCreative
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

// Type Definitions
interface Feature {
    title: string;
    image: string;
    content: React.ReactNode;
    gradient: [string, string];
}

interface FeaturesSliderProps {
    features: Feature[];
    activeIndex: number;
    onSlideChange: (index: number) => void;
}

interface FeatureCardProps {
    feature: Feature;
    index: number;
    isActive: boolean;
    onClick: (index: number) => void;
>>>>>>> 6cc402e48fbe96a2abc93424c417b1f456d16c43
}

// Custom Hook for Swiper Control
const useSwiperControl = () => {
<<<<<<< HEAD
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return {
    swiperInstance,
    setSwiperInstance,
    activeIndex,
    handleSlideChange,
  };
};

// Optimized Feature Card Component
const FeatureCard = memo(
  ({ feature, index, isActive, onClick }: FeatureCardProps) => (
    <article
      onClick={() => onClick(index)}
      className={`relative cursor-pointer group transition-all duration-500 ease-out-expo ${
        isActive
          ? "scale-100 opacity-100 z-10 shadow-2xl"
          : "scale-95 opacity-80 hover:scale-100 hover:opacity-100"
      }`}
      role="button"
      tabIndex={0}
      aria-label={`${feature.title} özelliğini seçin`}
    >
      <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-400/30 transition-colors">
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"
          aria-hidden="true"
        />

        <div className="relative p-8 h-full flex flex-col">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-emerald-400 font-semibold text-sm">
              0{index + 1}
            </span>
            <div
              className={`w-3 h-3 rounded-full transition-colors ${
                isActive ? "bg-emerald-400 animate-pulse" : "bg-white/30"
              }`}
            />
          </div>

          <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            {feature.title}
          </h3>

          <div className="text-gray-300/90 leading-relaxed flex-1">
            {feature.content}
          </div>

          <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-full h-1 bg-gradient-to-r from-emerald-400/40 to-transparent rounded-full animate-progress" />
          </div>
        </div>
      </div>
    </article>
  )
);

// Enhanced Swiper Component
const FeaturesSlider = ({
  features,
  activeIndex,
  onSlideChange,
}: FeaturesSliderProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    // Container genişliği lg: breakpoint ile sınırlandırılıp merkezlendi.
    <div className="relative group mb-12 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-emerald-400/10 hover:shadow-emerald-400/20 transition-shadow duration-500 w-full lg:w-[300px] lg:mx-auto">
      <Swiper
        onSwiper={setSwiper}
        modules={[
          Parallax,
          Navigation,
          Pagination,
          Controller,
          Autoplay,
          EffectCreative,
        ]}
        parallax
        speed={1200}
        loop
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
            opacity: 0.5,
          },
          next: {
            translate: ["120%", 0, 0],
            opacity: 0.5,
          },
        }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        onSlideChangeTransitionEnd={(swiper) => onSlideChange(swiper.realIndex)}
        className="!overflow-visible"
        style={{ aspectRatio: "9/16" }} // 9:16 oranı korunuyor
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-gray-800 overflow-hidden flex items-center justify-center"
              style={{
                background: `linear-gradient(45deg, ${feature.gradient[0]}, ${feature.gradient[1]})`,
              }}
            >
              <div className="absolute inset-0 bg-noise opacity-10" />
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
                data-swiper-parallax="-30%"
              />
            </div>
          </SwiperSlide>
        ))}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => swiper?.slideToLoop(i)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "bg-emerald-400 scale-125 shadow-emerald-glow"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`${i + 1}. slayda geç`}
            />
          ))}
        </div>
      </Swiper>
    </div>
  );
=======
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = useCallback((index: number) => {
        setActiveIndex(index);
    }, []);

    return {
        swiperInstance,
        setSwiperInstance,
        activeIndex,
        handleSlideChange
    };
};

// Optimized Feature Card Component
const FeatureCard = memo(({ feature, index, isActive, onClick }: FeatureCardProps) => (
    <article
        onClick={() => onClick(index)}
        className={`relative cursor-pointer group transition-all duration-500 ease-out-expo ${isActive
            ? 'scale-100 opacity-100 z-10 shadow-2xl'
            : 'scale-95 opacity-80 hover:scale-100 hover:opacity-100'
            }`}
        role="button"
        tabIndex={0}
        aria-label={`${feature.title} özelliğini seçin`}
    >
        <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-400/30 transition-colors">
            <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"
                aria-hidden="true"
            />

            <div className="relative p-8 h-full flex flex-col">
                <div className="mb-6 flex items-center justify-between">
                    <span className="text-emerald-400 font-semibold text-sm">
                        0{index + 1}
                    </span>
                    <div className={`w-3 h-3 rounded-full transition-colors ${isActive
                        ? 'bg-emerald-400 animate-pulse'
                        : 'bg-white/30'
                        }`} />
                </div>

                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                    {feature.title}
                </h3>

                <div className="text-gray-300/90 leading-relaxed flex-1">
                    {feature.content}
                </div>

                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-full h-1 bg-gradient-to-r from-emerald-400/40 to-transparent rounded-full animate-progress" />
                </div>
            </div>
        </div>
    </article>
));

// Enhanced Swiper Component
const FeaturesSlider = ({ features, activeIndex, onSlideChange }: FeaturesSliderProps) => {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    return (
        // Container genişliği lg: breakpoint ile sınırlandırılıp merkezlendi.
        <div className="relative group mb-12 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-emerald-400/10 hover:shadow-emerald-400/20 transition-shadow duration-500 w-full lg:w-[300px] lg:mx-auto">
            <Swiper
                onSwiper={setSwiper}
                modules={[Parallax, Navigation, Pagination, Controller, Autoplay, EffectCreative]}
                parallax
                speed={1200}
                loop
                effect="creative"
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-120%', 0, -500],
                        opacity: 0.5
                    },
                    next: {
                        translate: ['120%', 0, 0],
                        opacity: 0.5
                    },
                }}
                autoplay={{ delay: 7000, disableOnInteraction: false }}
                onSlideChangeTransitionEnd={(swiper) => onSlideChange(swiper.realIndex)}
                className="!overflow-visible"
                style={{ aspectRatio: '9/16' }} // 9:16 oranı korunuyor
            >
                {features.map((feature, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative w-full h-full bg-gray-800 overflow-hidden flex items-center justify-center"
                            style={{
                                background: `linear-gradient(45deg, ${feature.gradient[0]}, ${feature.gradient[1]})`
                            }}
                        >
                            <div className="absolute inset-0 bg-noise opacity-10" />
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                                loading="lazy"
                                data-swiper-parallax="-30%"
                            />
                        </div>
                    </SwiperSlide>
                ))}

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                    {features.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => swiper?.slideToLoop(i)}
                            className={`w-4 h-4 rounded-full transition-all duration-300 ${i === activeIndex
                                    ? 'bg-emerald-400 scale-125 shadow-emerald-glow'
                                    : 'bg-white/30 hover:bg-white/50'
                                }`}
                            aria-label={`${i + 1}. slayda geç`}
                        />
                    ))}
                </div>
            </Swiper>
        </div>
    );
>>>>>>> 6cc402e48fbe96a2abc93424c417b1f456d16c43
};

// Yeni Konum Yönetim Paneli Bileşeni
const LocationActions = () => (
<<<<<<< HEAD
  <div className="mt-8 p-8 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/10 hover:border-emerald-400/30 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-6">
    <div className="flex-1">
      <h3 className="text-2xl font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-3">
        <span role="img" aria-label="mosque">
          🕌
        </span>{" "}
        Xəritəyə əlavə et
      </h3>
      <p className="text-gray-300 leading-relaxed max-w-2xl">
        Xəritəyə yeni məscid və namaz otağı əlavə etmək və ya mövcud ibadət
        yerlərində düzəliş etmək üçün WhatsApp nömrəmizə konumu göndərməyiniz və
        ya düzəliş haqqında məlumat verməyiniz kifayətdir.
      </p>
    </div>
    <a
      href="https://wa.me/994513401040"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-emerald-400/20"
    >
      <div className="relative">
        <FaWhatsapp className="w-7 h-7 text-white animate-pulse-slow" />
        <div className="absolute inset-0 bg-emerald-400/20 rounded-full animate-ping-slow" />
      </div>
      <span className="font-semibold text-white group-hover:text-emerald-100 text-lg">
        WhatsApp İlə Əlaqə
      </span>
    </a>
  </div>
=======
    <div className="mt-8 p-8 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/10 hover:border-emerald-400/30 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                Xəritəyə əlavə et
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-2xl">
                Xəritəyə yeni məscid və namaz otağı əlavə etmək və ya mövcud ibadət yerlərində düzəliş etmək üçün 
                WhatsApp nömrəmizə konumu göndərməyiniz və ya düzəliş haqqında məlumat verməyiniz kifayətdir.
            </p>
        </div>
        <a
            href="https://wa.me/994553004214"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-emerald-400/20"
        >
            <div className="relative">
                <FaWhatsapp className="w-7 h-7 text-white animate-pulse-slow" />
                <div className="absolute inset-0 bg-emerald-400/20 rounded-full animate-ping-slow" />
            </div>
            <span className="font-semibold text-white group-hover:text-emerald-100 text-lg">
                WhatsApp İlə Əlaqə
            </span>
        </a>
    </div>
>>>>>>> 6cc402e48fbe96a2abc93424c417b1f456d16c43
);

// Main Component
const FeaturesSection = () => {
<<<<<<< HEAD
  const { swiperInstance, setSwiperInstance, activeIndex, handleSlideChange } =
    useSwiperControl();

  const features: Feature[] = useMemo(
    () => [
      {
        title: "Image 1",
        image: "/1.jpg",
        gradient: ["#059669cc", "#0891b2cc"],
        content: <div>Content for Image 1</div>,
      },
      {
        title: "Image 2",
        image: "/2.jpg",
        gradient: ["#0e7490cc", "#1e40afcc"],
        content: <div>Content for Image 2</div>,
      },
      {
        title: "Image 3",
        image: "/3.jpg",
        gradient: ["#4f46e5cc", "#9333eacc"],
        content: <div>Content for Image 3</div>,
      },
      {
        title: "Image 4",
        image: "/4.jpg",
        gradient: ["#f59e0bcc", "#f97316cc"],
        content: <div>Content for Image 4</div>,
      },
      {
        title: "Image 5",
        image: "/5.jpg",
        gradient: ["#10b981cc", "#3b82f6cc"],
        content: <div>Content for Image 5</div>,
      },
      {
        title: "Image 6",
        image: "/6.jpg",
        gradient: ["#8b5cf6cc", "#ec4899cc"],
        content: <div>Content for Image 6</div>,
      },
      {
        title: "Image 7",
        image: "/7.jpg",
        gradient: ["#3f621ccc", "#166534cc"],
        content: <div>Content for Image 7</div>,
      },
    ],
    []
  ); // Populated features array

  const handleCardClick = useCallback(
    (index: number) => {
      swiperInstance?.slideTo(index);
    },
    [swiperInstance]
  ); // Ensure handleCardClick is defined correctly

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden isolate">
      <div className="container mx-auto px-4 relative z-10">
        {/* Slider */}
        <div className="mb-12">
          <FeaturesSlider
            features={features}
            activeIndex={activeIndex}
            onSlideChange={handleSlideChange}
          />
        </div>

        {/* Location Actions */}
        <LocationActions />
      </div>
    </section>
  );
=======
    const { swiperInstance, setSwiperInstance, activeIndex, handleSlideChange } = useSwiperControl();

    const features = useMemo<Feature[]>(() => [
        {
            title: 'Azan Bildirişləri',
            image: '/2.jpg',
            gradient: ['#059669cc', '#0891b2cc'],
            content: (
                <>
                    <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
                        18:30
                    </div>
                    <ul className="space-y-2 text-left text-white/90">
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                            Axşam namazı: 18:30
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                            Cümbə namazı: 19:15
                        </li>
                    </ul>
                </>
            )
        },
        {
            title: 'Namaz Vaxtları',
            image: '/1.jpg',
            gradient: ['#0e7490cc', '#1e40afcc'],
            content: (
                <>
                    <div className="text-center mb-4">
                        <div className="text-2xl font-bold text-white mb-1">22:29</div>
                        <div className="text-sm text-white/80">Bakı, 11 Noyabr</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        {['Sübh 5:59', 'Zöhr 12:24', 'Əsr 15:45'].map((time, i) => (
                            <div key={i} className="bg-white/5 p-2 rounded-lg">
                                <div className="text-xs text-emerald-300 mb-1">{time.split(' ')[0]}</div>
                                <div className="text-sm font-medium text-white">{time.split(' ')[1]}</div>
                            </div>
                        ))}
                    </div>
                    <blockquote className="mt-6 text-xs italic text-white/70 leading-relaxed">
                        "Birinizin ölümü çatıb: 'Ey Rəbbim! Mənə bir az möhlət versəydin...'"
                        <span className="block mt-1 text-emerald-300">Münafiqun, 10</span>
                    </blockquote>
                </>
            )
        },
        {
            title: 'Məscid və Namaz Otaqları',
            image: '/3.jpg',
            gradient: ['#4f46e5cc', '#9333eacc'],
            content: (
                <>
                    <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
                        22:15
                    </div>
                    <div className="space-y-4 w-full">
                        <div className="bg-white/5 p-4 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                                    📍
                                </div>
                                <div>
                                    <div className="font-medium text-white">Nardaran Məscidi</div>
                                    <div className="text-xs text-emerald-300">1.2 km</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-emerald-400/20 to-transparent p-4 rounded-xl border border-emerald-400/30">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                                    🕌
                                </div>
                                <div>
                                    <div className="font-medium text-white">Heydər Məscidi</div>
                                    <div className="text-xs text-emerald-300">2.4 km</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        },
        {
            title: 'Qiblə Kompası',
            image: '/4.jpg',
            gradient: ['#f59e0bcc', '#f97316cc'],
            content: (
                <>
                    <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
                        207.39°
                    </div>
                    <div className="flex flex-col items-center justify-center h-full">
                        <div className="relative w-32 h-32 mb-6">
                            <div className="absolute inset-0 bg-emerald-400/20 rounded-full animate-pulse-slow"></div>
                            <div className="absolute inset-2 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                                <span className="text-2xl text-white">🕋</span>
                            </div>
                        </div>
                        <div className="text-lg font-semibold text-white">Qiblə istiqaməti</div>
                        <div className="text-sm text-emerald-300">Cənub-Qərb</div>
                    </div>
                </>
            )
        },
        {
            title: 'Namaz Təqvimi',
            image: '/5.jpg',
            gradient: ['#10b981cc', '#3b82f6cc'],
            content: (
                <>
                    <div className="space-y-4 w-full">
                        <div className="bg-white/5 p-4 rounded-xl">
                            <h3 className="text-sm font-medium text-white mb-2">Hesablama metodu:</h3>
                            <div className="space-y-2">
                                {['Qafqaz Müsəlmanları İdarəsi', 'Muslim World League'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5">
                                        <div className={`w-4 h-4 rounded-full border ${i === 0 ? 'border-emerald-400 bg-emerald-400/20' : 'border-white/20'}`}></div>
                                        <span className="text-sm text-white/80">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="text-xs text-white/60 text-center leading-relaxed">
                            Dəqiq hesablama üçün üstünlük verdiyiniz metodu seçin
                        </div>
                    </div>
                </>
            )
        },
        {
            title: 'Məscid Axtarışı',
            image: '/6.jpg',
            gradient: ['#8b5cf6cc', '#ec4899cc'],
            content: (
                <>
                    <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
                        1.5 km radius
                    </div>
                    <div className="space-y-4 w-full">
                        {[
                            { name: 'İmam Rza məscidi', distance: '837 m', checked: false },
                            { name: 'Bülbülə Cümə məscidi', distance: '1.38 km', checked: true },
                            { name: 'Heydər məscidi', distance: '1.73 km', checked: true }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                            >
                                <div
                                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center ${item.checked ? 'border-emerald-400 bg-emerald-400/20' : 'border-white/20'
                                        }`}
                                >
                                    {item.checked && <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>}
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm text-white">{item.name}</div>
                                    <div className="text-xs text-emerald-300">{item.distance}</div>
                                </div>
                                <button className="p-1 hover:bg-white/10 rounded-lg">
                                    <span className="text-lg">→</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )
        },
        {
            title: 'Xüsusi Tədbirlər',
            image: '/7.jpg',
            gradient: ['#3f621ccc', '#166534cc'],
            content: (
                <>
                    <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
                        Təqvim
                    </div>
                    <div className="space-y-4 w-full">
                        {[
                            { event: 'Təfsir dərsi', time: '19:00', location: 'Şəhidlər məscidi' },
                            { event: 'Uşaq proqramı', time: '16:30', location: 'Mərkəzi məscid' },
                            { event: 'Xeyriyyə iftarı', time: '18:45', location: 'Nardaran məscidi' }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                            >
                                <div className="w-8 h-8 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                                    <span className="text-lg">📅</span>
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm text-white">{item.event}</div>
                                    <div className="text-xs text-emerald-300">{item.time} - {item.location}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )
        }
    ], []);

    const handleCardClick = useCallback(
        (index: number) => {
            swiperInstance?.slideTo(index);
        },
        [swiperInstance]
    );

    return (
        <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden isolate">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-noise opacity-10" />
                <div className="absolute inset-0 bg-gradient-radial from-emerald-400/10 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6 animate-fade-in">
                        Təcrübənizi Yeniləyin
                    </h2>
                    <p className="text-xl text-gray-300/90 leading-relaxed animate-fade-in delay-100">
                        Dəqiq vaxt təyinatı, real-time navigasiya və smart xüsusiyyətlərlə dolu unikal məscid təcrübəsi
                    </p>
                </div>

                {/* Slider */}
                <div className="mb-12">
                    <FeaturesSlider
                        features={features}
                        activeIndex={activeIndex}
                        onSlideChange={handleSlideChange}
                    />
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            feature={feature}
                            index={index}
                            isActive={index === activeIndex}
                            onClick={handleCardClick}
                        />
                    ))}
                </div>

                <LocationActions />
            </div>
        </section>
    );
>>>>>>> 6cc402e48fbe96a2abc93424c417b1f456d16c43
};

export default FeaturesSection;
