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
}

// Custom Hook for Swiper Control
const useSwiperControl = () => {
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
};

// Yeni Konum Yönetim Paneli Bileşeni
const LocationActions = () => (
  <div className="mt-8 p-8 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/10 hover:border-emerald-400/30 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-6">
    <div className="flex-1">
      <h3 className="text-2xl font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-3">
        <span role="img" aria-label="mosque">🕌</span> Xəritəyə əlavə et
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
);

// Main Component
const FeaturesSection = () => {
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
};

export default FeaturesSection;
