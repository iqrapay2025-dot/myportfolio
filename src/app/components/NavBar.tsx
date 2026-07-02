import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavBarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'work' },
  { label: 'Contact', id: 'contact' },
];

export function NavBar({ isDark, onToggleTheme }: NavBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile) setIsMobileOpen(false);
  }, [isMobile]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  const bgColor = isScrolled
    ? isDark ? 'rgba(10,10,10,0.94)' : 'rgba(248,246,241,0.94)'
    : 'transparent';

  const borderColor = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';
  const textColor = isDark ? '#f2ede8' : '#1a1919';
  const mutedColor = isDark ? '#888' : '#666';

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(1.25rem, 5vw, 4rem)',
          backgroundColor: bgColor,
          backdropFilter: isScrolled ? 'blur(16px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px) saturate(180%)' : 'none',
          borderBottom: isScrolled ? `1px solid ${borderColor}` : 'none',
          transition: 'background-color 300ms ease, border-color 300ms ease',
          boxSizing: 'border-box',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.2rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: textColor,
            transition: 'color 300ms ease',
            padding: 0,
            flexShrink: 0,
          }}
        >
          <span style={{ color: '#F59E0B' }}>M</span>J
        </button>

        {/* Desktop nav */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                label={link.label}
                mutedColor={mutedColor}
                onClick={() => scrollTo(link.id)}
              />
            ))}
            <ThemeToggleBtn
              isDark={isDark}
              onToggle={onToggleTheme}
              borderColor={borderColor}
              textColor={textColor}
            />
          </div>
        )}

        {/* Mobile controls */}
        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ThemeToggleBtn
              isDark={isDark}
              onToggle={onToggleTheme}
              borderColor={borderColor}
              textColor={textColor}
            />
            <button
              onClick={() => setIsMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: textColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px',
                transition: 'color 200ms ease',
              }}
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        )}
      </nav>

      {/* Mobile drawer */}
      {isMobile && (
        <div
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            zIndex: 998,
            backgroundColor: isDark ? '#0a0a0a' : '#f8f6f1',
            borderBottom: `1px solid ${borderColor}`,
            overflow: 'hidden',
            maxHeight: isMobileOpen ? '280px' : '0',
            transition: 'max-height 350ms cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <div
            style={{
              padding: '1.25rem clamp(1.25rem, 5vw, 4rem) 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: mutedColor,
                  cursor: 'pointer',
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  textAlign: 'left',
                  padding: '0.65rem 0',
                  borderBottom: `1px solid ${borderColor}`,
                  transition: 'color 200ms ease',
                  fontFamily: 'inherit',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F59E0B')}
                onMouseLeave={(e) => (e.currentTarget.style.color = mutedColor)}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function NavLink({ label, mutedColor, onClick }: { label: string; mutedColor: string; onClick: () => void }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        background: 'none',
        border: 'none',
        color: isHover ? '#F59E0B' : mutedColor,
        cursor: 'pointer',
        fontSize: '0.875rem',
        letterSpacing: '0.025em',
        padding: '0.5rem 0',
        transition: 'color 200ms ease',
        fontFamily: 'inherit',
      }}
    >
      {label}
    </button>
  );
}

function ThemeToggleBtn({
  isDark,
  onToggle,
  borderColor,
  textColor,
}: {
  isDark: boolean;
  onToggle: () => void;
  borderColor: string;
  textColor: string;
}) {
  const [isHover, setIsHover] = useState(false);
  return (
    <button
      onClick={onToggle}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      aria-label="Toggle theme"
      style={{
        background: 'none',
        border: `1px solid ${isHover ? '#F59E0B' : borderColor}`,
        borderRadius: '50%',
        width: '36px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: isHover ? '#F59E0B' : textColor,
        transition: 'border-color 200ms ease, color 200ms ease',
        flexShrink: 0,
      }}
    >
      {isDark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
