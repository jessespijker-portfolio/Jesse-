export function Button({ variant = 'primary', size = 'md', children, href, onClick, arrow = false, style }) {
  const pad = size === 'sm' ? '8px 18px' : size === 'lg' ? '16px 32px' : '12px 26px';
  const fs = size === 'sm' ? 14 : size === 'lg' ? 17 : 15;
  const variants = {
    primary: { background: 'var(--ink)', color: 'var(--paper)', border: '1px solid var(--ink)' },
    accent: { background: 'var(--accent)', color: 'var(--accent-on)', border: '1px solid var(--accent)' },
    ghost: { background: 'transparent', color: 'var(--ink)', border: '1px solid var(--line-strong)' },
  };
  const [hover, setHover] = React.useState(false);
  const hoverFx = variant === 'ghost'
    ? { borderColor: 'var(--ink)' }
    : { opacity: 0.88 };
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 10, padding: pad, fontSize: fs,
    fontFamily: 'var(--font-body)', fontWeight: 500, lineHeight: 1, borderRadius: 'var(--radius-pill)',
    cursor: 'pointer', textDecoration: 'none', transition: 'all 180ms ease-out',
    ...variants[variant], ...(hover ? hoverFx : null), ...style,
  };
  const content = [children, arrow ? React.createElement('span', { key: 'a', style: { transition: 'transform 180ms ease-out', transform: hover ? 'translateX(4px)' : 'none' } }, '\u2192') : null];
  const props = { style: base, onClick, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) };
  return href
    ? React.createElement('a', { href, ...props }, content)
    : React.createElement('button', { type: 'button', ...props }, content);
}