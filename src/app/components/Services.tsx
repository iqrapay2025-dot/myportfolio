import { useState } from 'react';
import { Film, PenTool, Code2 } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { SectionLabel } from './About';

interface ServicesProps {
  isDark: boolean;
}

const services = [
  {
    icon: Film,
    title: 'Video Editing',
    description:
      'Turning raw footage into scroll-stopping stories — clean cuts, smooth transitions, and pacing that keeps people watching till the end.',
    accent: '#F59E0B',
    number: '01',
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    description:
      'Visuals that communicate before anyone reads a word — social posts, branding, and layouts built for quick, clear impact.',
    accent: '#F97316',
    number: '02',
  },
  {
    icon: Code2,
    title: 'Web Developer',
    description:
      'Building functional, good-looking websites using AI-assisted tools — fast iteration, real results, no long dev cycles.',
    accent: '#FBBF24',
    number: '03',
  },
];

export function Services({ isDark }: ServicesProps) {
  const textColor = isDark ? '#f2ede8' : '#1a1919';
  const mutedColor = isDark ? '#888' : '#686868';

  return (
    <section
      id="services"
      style={{
        padding: 'clamp(5rem, 10vh, 8rem) clamp(1.25rem, 8vw, 8rem)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <AnimatedSection delay={0}>
          <SectionLabel>What I Do</SectionLabel>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap',
              marginTop: '2rem',
              marginBottom: '3.5rem',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                color: textColor,
                transition: 'color 300ms ease',
              }}
            >
              Services &amp; <span style={{ color: '#F59E0B' }}>Skills</span>
            </h2>
          </div>
        </AnimatedSection>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={200 + i * 120}>
              <ServiceCard service={service} isDark={isDark} textColor={textColor} mutedColor={mutedColor} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  isDark,
  textColor,
  mutedColor,
}: {
  service: (typeof services)[0];
  isDark: boolean;
  textColor: string;
  mutedColor: string;
}) {
  const [isHover, setIsHover] = useState(false);
  const Icon = service.icon;
  const cardBg = isDark ? '#141414' : '#ffffff';
  const cardBorder = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        padding: 'clamp(1.75rem, 3vw, 2.25rem)',
        borderRadius: '12px',
        backgroundColor: cardBg,
        border: `1px solid ${isHover ? `${service.accent}40` : cardBorder}`,
        position: 'relative',
        overflow: 'hidden',
        transform: isHover ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: isHover
          ? isDark
            ? `0 20px 48px rgba(0,0,0,0.5), 0 0 0 1px ${service.accent}20`
            : `0 20px 48px rgba(0,0,0,0.1), 0 0 0 1px ${service.accent}20`
          : 'none',
        transition: 'all 300ms ease',
        cursor: 'default',
      }}
    >
      {/* Top-right number */}
      <span
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.75rem',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          color: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)',
        }}
      >
        {service.number}
      </span>

      {/* Bottom accent line on hover */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(to right, ${service.accent}, transparent)`,
          opacity: isHover ? 1 : 0,
          transition: 'opacity 300ms ease',
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '10px',
          backgroundColor: `${service.accent}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: service.accent,
          marginBottom: '1.5rem',
          transition: 'background-color 300ms ease',
        }}
      >
        <Icon size={22} strokeWidth={1.8} />
      </div>

      <h3
        style={{
          fontSize: '1.15rem',
          fontWeight: 700,
          color: textColor,
          marginBottom: '0.75rem',
          letterSpacing: '-0.01em',
          transition: 'color 300ms ease',
        }}
      >
        {service.title}
      </h3>
      <p
        style={{
          fontSize: '0.9rem',
          lineHeight: 1.75,
          color: mutedColor,
          fontWeight: 300,
          transition: 'color 300ms ease',
        }}
      >
        {service.description}
      </p>
    </div>
  );
}
