// components/Layout/Footer.tsx

import React from 'react';
import Link from 'next/link';
import {
    Facebook,
    Twitter,
    Instagram,
    Compass,
    Clock,
    MapPin,
    Calendar,
    Home, // Mosque yerine alternatif
    Phone, // Eksik import eklendi
    Map // Mosque için alternatif
} from 'react-feather';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    // Sosyal medya linkleri
    const socialLinks = [
        { icon: <Facebook className="w-5 h-5" />, url: "#", label: "Facebook" },
        { icon: <Twitter className="w-5 h-5" />, url: "#", label: "Twitter" },
        { icon: <Instagram className="w-5 h-5" />, url: "#", label: "Instagram" }
    ];

    // Ana Hizmetler (Mosque -> Map ile değiştirildi)
    const coreServices = [
        {
            icon: <Clock className="w-6 h-6 text-green-300" />,
            title: "Namaz Vaxtları",
            url: "/namaz-vaxtlari",
            description: "Dəqiq vaxt təqvimi və ezan bildirişləri"
        },
        {
            icon: <Compass className="w-6 h-6 text-green-300" />,
            title: "Qiblə Kompası",
            url: "/qible-kompasi",
            description: "Real-time qiblə istiqaməti təyini"
        },
        {
            icon: <Map className="w-6 h-6 text-green-300" />, // Mosque yerine Map
            title: "Məscid Axtar",
            url: "/mescid-axtar",
            description: "Yaxınlıqdakı ibadət yerləri"
        },
        {
            icon: <Calendar className="w-6 h-6 text-green-300" />,
            title: "Təqvim Seçimi",
            url: "/teqvim-metodlari",
            description: "Hesablama metodlarınızı fərdiləşdirin"
        }
    ];

    // İletişim Bilgileri (Phone eklendi)
    const contactInfo = [
        { icon: <MapPin className="w-5 h-5" />, text: "Bakı, Azərbaycan" },
        { icon: <Clock className="w-5 h-5" />, text: "24/7 Elektron Dəstək" },
        { icon: <Phone className="w-5 h-5" />, text: "+994 55 300 42 14" }
    ];

    return (
        <footer className="bg-gradient-to-b from-green-800 to-green-900 text-white border-t-4 border-green-600">
            <div className="container mx-auto px-4 xl:px-0 py-12">

                {/* Temel Hizmetler Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {coreServices.map((service, index) => (
                        <Link
                            key={index}
                            href={service.url}
                            className="group p-6 bg-green-700 rounded-lg hover:bg-green-600 transition-all"
                        >
                            <div className="flex items-start space-x-4">
                                {service.icon}
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                                    <p className="text-sm text-green-100">{service.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Ana İçerik Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-green-700 pt-12">

                    {/* Logo ve Açıklama */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <img
                                src="/logo.png"
                                alt="Mescid.az Logo"
                                className="h-14 w-14"
                                loading="lazy"
                            />
                            <div>
                                <h1 className="text-2xl font-bold">Mescid.az</h1>
                                <p className="text-sm text-green-200">Dini Həyatınızın Rəhbəri</p>
                            </div>
                        </div>
                        <p className="text-sm text-green-100 leading-relaxed">
                            "Ey Rəbbim! Mənə bir az möhlət versəydin, sədəqə verib əməlisalehlərdən olardım!"
                            <br />(Münafiqun, 10)
                        </p>
                    </div>

                    {/* İbadet Yerleri Listesi */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 pb-2 border-b-2 border-green-500">
                            Yaxın Məscidlər
                        </h3>
                        <nav>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/mescidler/imam-rza" className="flex items-center hover:text-green-300">
                                        <Home className="w-4 h-4 mr-2" /> {/* Mosque yerine Home */}
                                        İmam Rza Məscidi (837 m)
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/mescidler/bulbule" className="flex items-center hover:text-green-300">
                                        <Home className="w-4 h-4 mr-2" />
                                        Bülbülə Cümə Məscidi (1.38 km)
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/mescidler/heydar" className="flex items-center hover:text-green-300">
                                        <Home className="w-4 h-4 mr-2" />
                                        Heydər Məscidi (1.73 km)
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* İletişim ve Sosyal Medya */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4 pb-2 border-b-2 border-green-500">
                                Əlaqə
                            </h3>
                            <div className="space-y-3">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <span className="text-green-300">{info.icon}</span>
                                        <span className="text-sm">{info.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4 pb-2 border-b-2 border-green-500">
                                Sosial Şəbəkələr
                            </h3>
                            <div className="flex space-x-3">
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        aria-label={link.label}
                                        className="p-2 bg-green-700 rounded-lg hover:bg-green-600 transition-colors"
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Telif Hakkı */}
                <div className="border-t border-green-700 mt-8 pt-8 text-center">
                    <div className="text-sm text-green-300">
                        © {currentYear} Mescid.az - Bütün hüquqlar qorunur<br />
                        <div className="mt-2 flex justify-center space-x-4">
                            <Link href="/privacy" className="hover:text-white">Gizlilik Siyasəti</Link>
                            <Link href="/terms" className="hover:text-white">İstifadə Şərtləri</Link>
                            <Link href="/calculation-methods" className="hover:text-white">Hesablama Metodları</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}