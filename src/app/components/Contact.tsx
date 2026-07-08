import { useState } from 'react';
const musicImg = new URL('../../imports/music.png', import.meta.url).href;
import { Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { SectionLabel } from './About';

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function AudiomackIcon({ size = 18 }: { size?: number }) {
  return <img src={musicImg} alt="Audiomack" style={{ width: size, height: size, objectFit: 'contain' }} />;
}

interface ContactProps {
  isDark: boolean;
}

export function Contact({ isDark }: ContactProps) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const textColor = isDark ? '#f2ede8' : '#1a1919';
  const mutedColor = isDark ? '#888' : '#686868';
  const cardBg = isDark ? '#141414' : '#ffffff';
  const cardBorder = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';
  const inputBg = isDark ? '#1e1e1e' : '#f8f6f1';
  const inputBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(5rem, 10vh, 8rem) clamp(1.25rem, 8vw, 8rem)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <AnimatedSection delay={0}>
          <SectionLabel>Get In Touch</SectionLabel>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: textColor,
              marginTop: '2rem',
              marginBottom: '1rem',
              transition: 'color 300ms ease',
            }}
          >
            Let's Work <span style={{ color: '#F59E0B' }}>Together</span>
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: mutedColor,
              fontWeight: 300,
              maxWidth: '480px',
              marginBottom: '3.5rem',
              transition: 'color 300ms ease',
            }}
          >
            Available for freelance projects and full-time creative roles. Let's build something great.
          </p>
        </AnimatedSection>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* Info column */}
          <AnimatedSection delay={200}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <ContactInfoCard
                isDark={isDark}
                icon={Mail}
                label="Email"
                value="abuaasiya08@gmail.com"
                href="mailto:abuaasiya08@gmail.com"
                cardBg={cardBg}
                cardBorder={cardBorder}
                textColor={textColor}
                mutedColor={mutedColor}
              />
              <ContactInfoCard
                isDark={isDark}
                icon={Phone}
                label="Phone"
                value="+234 815 595 6187"
                href="tel:+2348155956187"
                cardBg={cardBg}
                cardBorder={cardBorder}
                textColor={textColor}
                mutedColor={mutedColor}
              />

              {/* Social links */}
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: '12px',
                  backgroundColor: cardBg,
                  border: `1px solid ${cardBorder}`,
                }}
              >
                <p
                  style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#F59E0B',
                    fontWeight: 600,
                    marginBottom: '1rem',
                  }}
                >
                  Find Me Online
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <SocialBtn
                    icon={TikTokIcon}
                    label="TikTok"
                    href="https://www.tiktok.com/@ibnsalmaan"
                    brandColor="#EE1D52"
                    textColor={textColor}
                    cardBorder={cardBorder}
                  />
                  <SocialBtn
                    icon={InstagramIcon}
                    label="Instagram"
                    href="https://www.instagram.com/the_tranquil1?igsh=a2lhcWw1OWs5cWMx"
                    brandColor="#E1306C"
                    textColor={textColor}
                    cardBorder={cardBorder}
                  />
                  <SocialBtn
                    icon={AudiomackIcon}
                    label="Audiomack"
                    href="https://audiomack.com/ibnsalman"
                    brandColor="#FFCD00"
                    textColor={textColor}
                    cardBorder={cardBorder}
                  />
                  <SocialBtn
                    icon={XIcon}
                    label="X (Twitter)"
                    href="https://x.com/MuhammadJumah4"
                    brandColor="#1DA1F2"
                    textColor={textColor}
                    cardBorder={cardBorder}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form column */}
          <AnimatedSection delay={300}>
            <form
              onSubmit={handleSubmit}
              style={{
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                borderRadius: '12px',
                backgroundColor: cardBg,
                border: `1px solid ${cardBorder}`,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {submitted ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    padding: '3rem 1rem',
                    textAlign: 'center',
                  }}
                >
                  <CheckCircle size={40} color="#F59E0B" strokeWidth={1.5} />
                  <p style={{ fontSize: '1rem', fontWeight: 600, color: textColor }}>Message sent!</p>
                  <p style={{ fontSize: '0.9rem', color: mutedColor, fontWeight: 300 }}>
                    I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <>
                  <FormField
                    label="Name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    inputBg={inputBg}
                    inputBorder={inputBorder}
                    textColor={textColor}
                    mutedColor={mutedColor}
                    isDark={isDark}
                  />
                  <FormField
                    label="Email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    inputBg={inputBg}
                    inputBorder={inputBorder}
                    textColor={textColor}
                    mutedColor={mutedColor}
                    isDark={isDark}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: textColor,
                        transition: 'color 300ms ease',
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        backgroundColor: inputBg,
                        border: `1px solid ${inputBorder}`,
                        color: textColor,
                        fontSize: '0.9rem',
                        fontFamily: 'inherit',
                        resize: 'vertical',
                        outline: 'none',
                        transition: 'border-color 200ms ease, background-color 300ms ease, color 300ms ease',
                        lineHeight: 1.6,
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#F59E0B')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = inputBorder)}
                    />
                  </div>
                  <SubmitBtn>Send Message</SubmitBtn>
                </>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function ContactInfoCard({
  icon: Icon,
  label,
  value,
  href,
  cardBg,
  cardBorder,
  textColor,
  mutedColor,
}: {
  isDark: boolean;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  label: string;
  value: string;
  href: string;
  cardBg: string;
  cardBorder: string;
  textColor: string;
  mutedColor: string;
}) {
  const [isHover, setIsHover] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        padding: '1rem 1.5rem',
        borderRadius: '12px',
        backgroundColor: cardBg,
        border: `1px solid ${isHover ? 'rgba(245,158,11,0.3)' : cardBorder}`,
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        textDecoration: 'none',
        transform: isHover ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 250ms ease',
      }}
    >
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '8px',
          backgroundColor: 'rgba(245,158,11,0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F59E0B',
          flexShrink: 0,
        }}
      >
        <Icon size={18} strokeWidth={1.8} />
      </div>
      <div>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: mutedColor, fontWeight: 600 }}>
          {label}
        </p>
        <p style={{ fontSize: '0.9rem', color: textColor, fontWeight: 500, transition: 'color 300ms ease' }}>{value}</p>
      </div>
    </a>
  );
}

function SocialBtn({
  icon: Icon,
  label,
  href,
  brandColor,
  textColor,
  cardBorder,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  href: string;
  brandColor: string;
  textColor: string;
  cardBorder: string;
}) {
  const [isHover, setIsHover] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      title={label}
      style={{
        width: '46px',
        height: '46px',
        borderRadius: '12px',
        border: `1px solid ${isHover ? brandColor : cardBorder}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: isHover ? brandColor : textColor,
        textDecoration: 'none',
        transition: 'all 220ms ease',
        backgroundColor: isHover ? `${brandColor}18` : 'transparent',
        transform: isHover ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
        boxShadow: isHover ? `0 6px 20px ${brandColor}30` : 'none',
      }}
    >
      <Icon size={19} />
    </a>
  );
}

function FormField({
  label,
  type,
  placeholder,
  value,
  onChange,
  inputBg,
  inputBorder,
  textColor,
  mutedColor,
}: {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  inputBg: string;
  inputBorder: string;
  textColor: string;
  mutedColor: string;
  isDark: boolean;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: textColor, transition: 'color 300ms ease' }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: '0.75rem 1rem',
          borderRadius: '8px',
          backgroundColor: inputBg,
          border: `1px solid ${inputBorder}`,
          color: textColor,
          fontSize: '0.9rem',
          fontFamily: 'inherit',
          outline: 'none',
          transition: 'border-color 200ms ease, background-color 300ms ease, color 300ms ease',
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = '#F59E0B')}
        onBlur={(e) => (e.currentTarget.style.borderColor = inputBorder)}
      />
    </div>
  );
}

function SubmitBtn({ children }: { children: React.ReactNode }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <button
      type="submit"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        padding: '0.875rem',
        backgroundColor: '#F59E0B',
        color: '#111',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 700,
        fontSize: '0.9rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        transform: isHover ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: isHover ? '0 8px 24px rgba(245,158,11,0.35)' : 'none',
        transition: 'all 200ms ease',
      }}
    >
      <Send size={15} strokeWidth={2} />
      {children}
    </button>
  );
}
