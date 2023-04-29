import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

import '@/styles/globals.css';
import { Navbar } from '../../Components/Navbar';
import { Footer } from '../../Components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Navbar />
        <div className="pt-65">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>

      <Script
        src="https://kit.fontawesome.com/44b146606d.js"
        crossorigin="anonymous"
      />
    </ThemeProvider>
  );
}
