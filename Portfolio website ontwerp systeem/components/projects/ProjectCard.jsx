import { Tag } from '../core/Tag.jsx';
export function ProjectCard({ index, title, description, image, imageAlt = '', tags = [], href, linkLabel = 'Bekijk project', placeholderLabel = 'BEELD VOLGT' }) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('article', {
    onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
    style: {
      display: 'grid', gridTemplateColumns: 'minmax(260px, 5fr) minmax(0, 6fr)', gap: 'clamp(24px, 4vw, 56px)',
      background: 'var(--surface-card)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-stack)', padding: 'clamp(28px, 4vw, 56px)', minHeight: 380, alignItems: 'center',
    } },
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 20, minWidth: 0 } },
      React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 'var(--mono-label-size)', letterSpacing: 'var(--mono-label-tracking)', color: 'var(--accent-text)' } }, index),
      React.createElement('h3', { style: { margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05, color: 'var(--text-heading)' } }, title),
      React.createElement('p', { style: { margin: 0, fontSize: 'var(--text-body-size)', color: 'var(--text-body)', textWrap: 'pretty' } }, description),
      tags.length ? React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 8 } }, tags.map((t, i) => React.createElement(Tag, { key: i }, t))) : null,
      href ? React.createElement('a', { href, style: { display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 500, fontSize: 15, color: hover ? 'var(--link-hover)' : 'var(--link)', textDecoration: 'none', marginTop: 4 } },
        linkLabel,
        React.createElement('span', { style: { transition: 'transform 180ms ease-out', transform: hover ? 'translateX(4px)' : 'none' } }, '\u2192')
      ) : null
    ),
    image
      ? React.createElement('img', { src: image, alt: imageAlt, style: { width: '100%', height: '100%', maxHeight: 420, objectFit: 'cover', borderRadius: 'var(--radius-md)', background: 'var(--surface-sunken)' } })
      : React.createElement('div', { style: { width: '100%', height: '100%', minHeight: 280, borderRadius: 'var(--radius-md)', background: 'var(--surface-sunken)', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 'var(--mono-label-size)', letterSpacing: 'var(--mono-label-tracking)', color: 'var(--text-label)' } }, placeholderLabel)
  );
}