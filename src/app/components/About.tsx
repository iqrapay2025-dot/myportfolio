import { useState } from 'react';
import {
  Figma,
  Scissors,
  Cpu,
  Video,
  Layers,
} from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

interface AboutProps {
  isDark: boolean;
}

const tools = [
  {
    name: 'Figma',
    icon: Figma,
    color: '#F24E1E',
    learning: false,
  },
  {
    name: 'CapCut',
    icon: Scissors,
    color: '#888888',
    learning: false,
  },
  {
    name: 'Pixel Lab',
    icon: Cpu,
    color: '#6366F1',
    learning: false,
  },
  {
    name: 'Premiere Pro',
    icon: Video,
    color: '#9999FF',
    learning: true,
  },
  {
    name: 'After Effects',
    icon: Layers,
    color: '#D291FF',
    learning: true,
  },
];

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
        {children}
      </span>
    </div>
  );
}

export function About({ isDark }: AboutProps) {
  const textColor = isDark ? '#f2ede8' : '#1a1919';
  const mutedColor = isDark ? '#888' : '#686868';
  const cardBg = isDark ? '#141414' : '#ffffff';
  const cardBorder = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';

  return (
    <section
      id="about"
      style={{
        padding: 'clamp(5rem, 10vh, 8rem) clamp(1.25rem, 8vw, 8rem)',
        position: 'relative',
      }}
    >
      {/* Subtle section tint */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: isDark ? 'rgba(20,20,20,0.5)' : 'rgba(0,0,0,0.02)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        <AnimatedSection delay={0}>
          <SectionLabel>About Me</SectionLabel>
        </AnimatedSection>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(3rem, 6vw, 5rem)',
            marginTop: '3.5rem',
            alignItems: 'start',
          }}
        >
          {/* Bio */}
          <AnimatedSection delay={100}>
            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  color: textColor,
                  marginBottom: '1.5rem',
                  transition: 'color 300ms ease',
                }}
              >
                Creativity meets<br />
                <span style={{ color: '#F59E0B' }}>craft.</span>
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.85,
                  color: mutedColor,
                  fontWeight: 300,
                  transition: 'color 300ms ease',
                }}
              >
                I'm Muhammed Jumah, a creative who works across video, design, and
                code. I edit stories that move people, design visuals that communicate
                fast, and build websites with the help of AI tools — turning ideas into
                finished products without getting stuck waiting on a "perfect" skillset
                first.
              </p>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.85,
                  color: mutedColor,
                  fontWeight: 300,
                  marginTop: '1rem',
                  transition: 'color 300ms ease',
                }}
              >
                I'm currently sharpening my motion design chops in Premiere Pro and
                After Effects, so I can bring even more depth and polish to every edit.
              </p>
            </div>
          </AnimatedSection>

          {/* Tools grid */}
          <AnimatedSection delay={200}>
            <div>
              <p
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#F59E0B',
                  fontWeight: 600,
                  marginBottom: '1.25rem',
                }}
              >
                Tools I Use
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                  gap: '0.75rem',
                }}
              >
                {tools.map((tool, i) => (
                  <AnimatedSection key={tool.name} delay={300 + i * 80}>
                    <ToolCard
                      tool={tool}
                      isDark={isDark}
                      cardBg={cardBg}
                      cardBorder={cardBorder}
                      textColor={textColor}
                    />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function ToolCard({
  tool,
  isDark,
  cardBg,
  cardBorder,
  textColor,
}: {
  tool: (typeof tools)[0];
  isDark: boolean;
  cardBg: string;
  cardBorder: string;
  textColor: string;
}) {
  const [isHover, setIsHover] = useState(false);
  const Icon = tool.icon;

  const iconColor =
    tool.color === '#888888'
      ? isDark ? '#ccc' : '#555'
      : tool.color;

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        padding: '1rem',
        borderRadius: '10px',
        backgroundColor: cardBg,
        border: `1px solid ${isHover ? 'rgba(245,158,11,0.3)' : cardBorder}`,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
        cursor: 'default',
        transform: isHover ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'all 250ms ease',
      }}
    >
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '8px',
          backgroundColor: `${tool.color}18`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: iconColor,
        }}
      >
        <Icon size={18} />
      </div>
      <span
        style={{
          fontSize: '0.82rem',
          fontWeight: 600,
          color: textColor,
          transition: 'color 300ms ease',
        }}
      >
        {tool.name}
      </span>
      {tool.learning && (
        <span
          style={{
            fontSize: '0.62rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#F59E0B',
            backgroundColor: 'rgba(245,158,11,0.1)',
            padding: '2px 7px',
            borderRadius: '999px',
            alignSelf: 'flex-start',
          }}
        >
          Learning
        </span>
      )}
    </div>
  );
}
