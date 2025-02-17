// components/Layout/Layout.tsx

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode; // <Layout> içerisine yerleştirdiğimiz bileşenleri temsil eder
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
