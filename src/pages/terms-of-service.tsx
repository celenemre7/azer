// pages/terms-of-service.tsx
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