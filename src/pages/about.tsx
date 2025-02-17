// pages/about.tsx
import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import {
    FiClock,
    FiMapPin,
    FiBook,
    FiDownload,
    FiMessageCircle,
} from 'react-icons/fi';

// Props arayüzleri
interface SectionProps {
    title: string;
    Icon: React.ComponentType<any>;
    children: React.ReactNode;
}

interface ParagraphProps {
    children: React.ReactNode;
}

interface FeatureItemProps {
    title: string;
    description: string;
}

interface StoreLinkProps {
    href: string;
    src: string;
    alt: string;
}

// Bileşenler
const Section: React.FC<SectionProps> = ({ title, Icon, children }) => (
    <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
            <Icon className="text-2xl text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        </div>
        {children}
    </section>
);

const Paragraph: React.FC<ParagraphProps> = ({ children }) => (
    <p className="text-gray-700 text-lg leading-relaxed mb-6">{children}</p>
);

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => (
    <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </li>
);

const StoreLink: React.FC<StoreLinkProps> = ({ href, src, alt }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
        <Image src={src} alt={alt} width={150} height={50} />
    </a>
);

const About: NextPage = () => {
    return (
        <main className="bg-gradient-to-b from-blue-50 to-gray-50 min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 transition-all duration-300 hover:shadow-2xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
                            Mescid.az
                        </h1>
                        <p className="text-xl text-gray-600 font-medium">
                            İbadət Səyahətinizin Rəhbəri
                        </p>
                    </div>

                    <Section title="Haqqımızda" Icon={FiMessageCircle}>
                        <Paragraph>
                            Mescid.az, namaz qılan insanların ibadətlərini daha rahat və nizamlı
                            şəkildə yerinə yetirə bilməsi üçün hazırlanmış bir mobil tətbiqdir.
                            Tətbiqimiz vasitəsilə Azərbaycan şəhər və rayonları üçün dəqiq namaz
                            vaxtlarını öyrənə, qibləni asanlıqla təyin edə, ən yaxın məscid və namaz
                            otaqlarını tapa və Qurani-Kərimi oxuyaraq sevimli ayələri işarələyə
                            bilərsiniz.
                        </Paragraph>
                    </Section>

                    <Section title="Namaz Vakitləri" Icon={FiClock}>
                        <Paragraph>
                            Mescid.az, iki fərqli namaz təqvimi təqdim edir:
                        </Paragraph>
                        <ul className="space-y-4 my-6">
                            <FeatureItem
                                title="Muslim World League (MWL)"
                                description="Səudiyyə Ərəbistanı tərəfindən tərtib olunmuş beynəlxalq namaz vaxtları"
                            />
                            <FeatureItem
                                title="Qafqaz Müsəlmanlar İdarəsi"
                                description="Azərbaycana uyğun namaz vaxtları"
                            />
                        </ul>
                    </Section>

                    <Section title="Xəritə Xüsusiyyətləri" Icon={FiMapPin}>
                        <Paragraph>
                            Tətbiqimizin xəritə bölməsi sizə yaxınlıqdakı məscid və namaz otaqlarını
                            göstərir. İstədiyiniz ibadət yerinə Google Maps, Apple Maps, Waze və
                            Yandex Maps vasitəsilə asanlıqla istiqamət ala bilərsiniz.
                        </Paragraph>
                    </Section>

                    <Section title="Quran Xüsusiyyətləri" Icon={FiBook}>
                        <Paragraph>
                            Qurani-Kərim bölməsində isə müqəddəs kitabımızı oxuya, son oxuduğunuz
                            yeri işarələyə və sevimli ayələrinizi qeyd edə bilərsiniz. Quran mətni
                            tətbiqə Quran.az vasitəsilə inteqrasiya edilib.
                        </Paragraph>
                    </Section>

                    <div className="bg-blue-50 rounded-xl p-6 my-8 border-l-4 border-blue-600">
                        <p className="text-gray-700 text-lg font-semibold mb-4">
                            📌 Mescid.az tamamilə reklamsızdır və heç bir gəlir məqsədi güdmür.
                            Tətbiqimizin əsas missiyası, müsəlmanların namazlarını vaxtında qılmalarına
                            və ibadət yerlərinə rahat şəkildə çatmalarına dəstək olmaqdır.
                        </p>
                    </div>

                    <div className="bg-green-50 rounded-xl p-8 text-center my-12 space-y-6 shadow-inner">
                        <h3 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
                            <FiDownload className="text-green-600" />
                            Tətbiqi Yükləyin
                        </h3>
                        <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
                            <StoreLink
                                href="https://play.google.com/store/apps/details?id=com.example"
                                src="/play-store.png"
                                alt="Google Play Store"
                            />
                            <StoreLink
                                href="https://apps.apple.com/app/example"
                                src="/app-store.png"
                                alt="Apple App Store"
                            />
                        </div>
                    </div>

                    <div className="mt-10 text-center border-t pt-8">
                        <p className="text-gray-600 text-lg font-medium flex items-center justify-center gap-2">
                            <FiMessageCircle className="text-blue-600" />
                            Əlaqə üçün:
                            <a
                                href="https://wa.me/+994553004214"
                                className="text-blue-600 hover:underline font-semibold"
                            >
                                WhatsApp +994 55 300 42 14
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;
