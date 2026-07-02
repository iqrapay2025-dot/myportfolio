import { useState } from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  show: boolean;
  isDark: boolean;
}

export function ScrollToTop({ show, isDark }: ScrollToTopProps) {
  const [isHover, setIsHover] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 900,
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        backgroundColor: isHover ? '#F59E0B' : isDark ? '#1e1e1e' : '#fff',
        border: `1px solid ${isHover ? '#F59E0B' : isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)'}`,
        color: isHover ? '#111' : isDark ? '#f2ede8' : '#1a1919',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: show ? 1 : 0,
        pointerEvents: show ? 'auto' : 'none',
        transform: show
          ? isHover
            ? 'translateY(-3px) scale(1.08)'
            : 'translateY(0) scale(1)'
          : 'translateY(12px) scale(0.9)',
        boxShadow: isHover
          ? '0 0 20px rgba(245,158,11,0.45), 0 8px 20px rgba(0,0,0,0.2)'
          : isDark
          ? '0 4px 16px rgba(0,0,0,0.4)'
          : '0 4px 16px rgba(0,0,0,0.1)',
        transition: 'all 300ms ease',
      }}
    >
      <ArrowUp size={16} strokeWidth={2.5} />
    </button>
  );
}
