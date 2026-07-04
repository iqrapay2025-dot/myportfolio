import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

const roles = ['Video Editor', 'Graphic Designer', 'Web Development', 'Reciter'];

export function Hero({ isDark }: HeroProps) {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const role = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < role.length) {
          setDisplayText(role.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, 2200);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(role.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((r) => (r + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, isPaused]);

  const textColor = isDark ? '#f2ede8' : '#1a1919';
  const mutedColor = isDark ? '#888' : '#686868';
  const borderGhost = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)';

  const scrollToWork = () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  const openWhatsApp = () => window.open('https://wa.me/2348155956187', '_blank', 'noopener,noreferrer');

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(5rem, 10vh, 7rem) clamp(1.25rem, 8vw, 8rem) clamp(4rem, 8vh, 6rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '70%',
          background: isDark
            ? 'radial-gradient(ellipse 80% 60% at 50% -5%, rgba(245,158,11,0.09) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 80% 60% at 50% -5%, rgba(245,158,11,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Side accent right */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: 0,
          width: '45%',
          height: '60%',
          background: isDark
            ? 'radial-gradient(ellipse at 90% 50%, rgba(245,158,11,0.04) 0%, transparent 60%)'
            : 'radial-gradient(ellipse at 90% 50%, rgba(245,158,11,0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '860px', position: 'relative', zIndex: 1 }}>
        {/* Eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.75rem',
            opacity: 0,
            animation: 'fadeSlideUp 0.8s ease 0.15s forwards',
          }}
        >
          <div style={{ width: '28px', height: '1.5px', backgroundColor: '#F59E0B', borderRadius: '2px' }} />
          <span
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#F59E0B',
              fontWeight: 600,
            }}
          >
            Creative Portfolio
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            opacity: 0,
            animation: 'fadeSlideUp 0.85s ease 0.3s forwards',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(3.2rem, 9vw, 7.5rem)',
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: '-0.035em',
              color: textColor,
              marginBottom: '0.1em',
              transition: 'color 300ms ease',
            }}
          >
            Muhammed
          </h1>
          <h1
            style={{
              fontSize: 'clamp(3.2rem, 9vw, 7.5rem)',
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: '-0.035em',
              color: '#F59E0B',
              marginBottom: '1.5rem',
            }}
          >
            Jumah
          </h1>
        </div>

        {/* Typing tagline */}
        <div
          style={{
            height: 'clamp(1.8rem, 4vw, 2.6rem)',
            marginBottom: '1.75rem',
            opacity: 0,
            animation: 'fadeSlideUp 0.85s ease 0.5s forwards',
          }}
        >
          <span
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.7rem)',
              fontWeight: 300,
              color: mutedColor,
              letterSpacing: '-0.01em',
              transition: 'color 300ms ease',
            }}
          >
            {displayText}
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '2px',
              height: '1.2em',
              backgroundColor: '#F59E0B',
              marginLeft: '3px',
              verticalAlign: 'middle',
              animation: 'blink 1s step-end infinite',
            }}
          />
        </div>

        {/* Intro */}
        <p
          style={{
            maxWidth: '500px',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
            lineHeight: 1.75,
            color: mutedColor,
            marginBottom: '2.5rem',
            fontWeight: 300,
            opacity: 0,
            animation: 'fadeSlideUp 0.85s ease 0.7s forwards',
            transition: 'color 300ms ease',
          }}
        >
          Blending creativity and design across mediums — from frame to pixel to line of code.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            opacity: 0,
            animation: 'fadeSlideUp 0.85s ease 0.9s forwards',
          }}
        >
          <PrimaryBtn onClick={scrollToWork}>View My Work</PrimaryBtn>
          <GhostBtn onClick={openWhatsApp} isDark={isDark} borderGhost={borderGhost} textColor={textColor}>
            Get In Touch
          </GhostBtn>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(1.5rem, 4vh, 2.5rem)',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0,
          animation: 'fadeIn 1s ease 1.6s forwards',
          cursor: 'pointer',
        }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: mutedColor,
            animation: 'float 2.5s ease-in-out infinite',
          }}
        >
          <ArrowDown size={14} />
        </div>
      </div>
    </section>
  );
}

function PrimaryBtn({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        padding: '0.85rem 2rem',
        backgroundColor: '#F59E0B',
        color: '#111',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 700,
        fontSize: '0.9rem',
        letterSpacing: '0.025em',
        transform: isHover ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: isHover ? '0 12px 28px rgba(245,158,11,0.35)' : '0 0 0 transparent',
        transition: 'transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease',
      }}
    >
      {children}
    </button>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function GhostBtn({
  onClick,
  children,
  isDark,
  borderGhost,
  textColor,
}: {
  onClick: () => void;
  children: React.ReactNode;
  isDark: boolean;
  borderGhost: string;
  textColor: string;
}) {
  const [isHover, setIsHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        padding: '0.85rem 2rem',
        backgroundColor: 'transparent',
        color: isHover ? '#25D366' : textColor,
        border: `1px solid ${isHover ? '#25D366' : borderGhost}`,
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 400,
        fontSize: '0.9rem',
        transform: isHover ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'all 200ms ease',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}
    >
      <WhatsAppIcon size={17} />
      {children}
    </button>
  );
}
