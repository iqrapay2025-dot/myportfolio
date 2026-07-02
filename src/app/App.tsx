import { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((scrollY / docHeight) * 100);
      }
      setShowScrollTop(scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bg = isDark ? '#0a0a0a' : '#f8f6f1';
  const fg = isDark ? '#f2ede8' : '#1a1919';

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: bg,
        color: fg,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        transition: 'background-color 300ms ease, color 300ms ease',
        position: 'relative',
      }}
    >
      {/* Scroll progress bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '2.5px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(to right, #F59E0B, #F97316)',
          zIndex: 9999,
          transition: 'width 80ms linear',
          borderRadius: '0 2px 2px 0',
        }}
      />

      <NavBar isDark={isDark} onToggleTheme={() => setIsDark((d) => !d)} />

      <main>
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Services isDark={isDark} />
        <Portfolio isDark={isDark} />
        <Contact isDark={isDark} />
      </main>

      <Footer isDark={isDark} />
      <ScrollToTop isDark={isDark} show={showScrollTop} />
    </div>
  );
}
