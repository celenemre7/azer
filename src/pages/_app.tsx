// pages/_app.tsx

import type { AppProps } from 'next/app';
import '../styles/globals.css';   // Tailwind global stilleri
import Layout from '../components/Layout/Layout'; // Navbar + Footer sarmalayan Layout

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
