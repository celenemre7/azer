// components/Layout/Navbar.tsx

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-white shadow-lg border-b border-gray-100 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo / Marka */}
                <Link href="/">
                    <div className="flex items-center space-x-3 cursor-pointer">
                        <img
                            src="/logo.png"
                            alt="MescidApp Logo"
                            className="h-10 w-10 object-contain"
                        />
                        <span className="font-bold text-2xl text-green-800 tracking-wide">
                            Mescid.az
                        </span>
                    </div>
                </Link>

                {/* Hamburger Icon (Mobile Only) */}
                <button
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                    className="md:hidden flex flex-col items-center justify-center space-y-1 focus:outline-none"
                >
                    {/* Hamburger Çizgileri */}
                    <span
                        className={`w-7 h-[3px] bg-green-800 rounded-full transform transition-all ease-in-out duration-300
                            ${menuOpen ? 'rotate-45 translate-y-[5px]' : 'rotate-0 translate-y-0'}`}
                    />
                    <span
                        className={`w-7 h-[3px] bg-green-800 rounded-full transform transition-all ease-in-out duration-300
                            ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
                    />
                    <span
                        className={`w-7 h-[3px] bg-green-800 rounded-full transform transition-all ease-in-out duration-300
                            ${menuOpen ? '-rotate-45 -translate-y-[10px]' : 'rotate-0 translate-y-0'}`}
                    />
                </button>

                {/* Menü Linkleri (Desktop) */}
                <div className="hidden md:flex space-x-4 font-medium">
                    <Link
                        href="/"
                        className="px-4 py-2 rounded-md text-green-800 hover:bg-gray-100 transition-colors"
                    >
                        Ana Səhifə
                    </Link>
                    <Link
                        href="/about"
                        className="px-4 py-2 rounded-md text-green-800 hover:bg-gray-100 transition-colors"
                    >
                        Haqqımızda
                    </Link>
                    <Link
                        href="/terms-of-service"
                        className="px-4 py-2 rounded-md text-green-800 hover:bg-gray-100 transition-colors"
                    >
                        İstifadə Şərtləri
                    </Link>
                    <Link
                        href="/privacy-policy"
                        className="px-4 py-2 rounded-md text-green-800 hover:bg-gray-100 transition-colors"
                    >
                        Gizlilik Siyasəti
                    </Link>
                    <Link
                        href="/contact"
                        className="px-4 py-2 rounded-md text-green-800 hover:bg-gray-100 transition-colors"
                    >
                        Əlaqə
                    </Link>
                </div>
            </div>

            {/* Menü Linkleri (Mobile) */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 transition-all">
                    <ul className="flex flex-col space-y-1 py-3 px-4">
                        <li>
                            <Link
                                href="/"
                                onClick={() => setMenuOpen(false)}
                                className="block px-4 py-2 rounded-md text-green-800 hover:bg-gray-100 transition-colors"
                            >
                                Ana Səhifə
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                onClick={() => setMenuOpen(false)}
                                className="block px-4 py-2 rounded-md text-green-800 hover:bg-gray-100 transition-colors"
                            >
                                Haqqımızda
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/terms-of-service"
                                onClick={() => setMenuOpen(false)}
                                className="block px-4 py-2 rounded-md text-green-800 hover:bg-gray-100 transition-colors"
                            >
                                İstifadə Şərtləri
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/privacy-policy"
                                onClick={() => setMenuOpen(false)}
                                className="block px-4 py-2 rounded-md text-green-800 hover:bg-gray-100 transition-colors"
                            >
                                Gizlilik Siyasəti
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                onClick={() => setMenuOpen(false)}
                                className="block px-4 py-2 rounded-md text-green-800 hover:bg-gray-100 transition-colors"
                            >
                                Əlaqə
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}