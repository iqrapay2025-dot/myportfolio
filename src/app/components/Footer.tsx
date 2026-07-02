interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  const textColor = isDark ? '#f2ede8' : '#1a1919';
  const mutedColor = isDark ? '#555' : '#999';
  const borderColor = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';

  return (
    <footer
      style={{
        padding: '2.5rem clamp(1.25rem, 8vw, 8rem)',
        borderTop: `1px solid ${borderColor}`,
        transition: 'border-color 300ms ease',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span
            style={{
              fontSize: '1rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: textColor,
              transition: 'color 300ms ease',
            }}
          >
            <span style={{ color: '#F59E0B' }}>M</span>J
          </span>
          <span style={{ color: mutedColor, fontSize: '0.85rem' }}>· Muhammed Jumah</span>
        </div>

        <p style={{ fontSize: '0.8rem', color: mutedColor, transition: 'color 300ms ease' }}>
          © {new Date().getFullYear()} Muhammed Jumah. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
