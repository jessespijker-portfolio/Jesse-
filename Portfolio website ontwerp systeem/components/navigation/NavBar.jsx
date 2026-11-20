import { LangToggle } from '../core/LangToggle.jsx';
import { Button } from '../core/Button.jsx';
export function NavBar({ links = [], active, lang = 'nl', onLangChange, ctaLabel = 'Neem contact', ctaHref = '#contact', homeHref = '#' }) {
  return React.createElement('header', { style: {
    position: 'sticky', top: 0, zIndex: 50, background: 'rgba(244,243,239,0.9)', backdropFilter: 'blur(10px)',
    borderBottom: '1px solid var(--line)',
  } },
    React.createElement('nav', { style: {
      maxWidth: 'var(--container)', margin: '0 auto', padding: '14px var(--gutter)',
      display: 'flex', alignItems: 'center', gap: 28,
    } },
      React.createElement('a', { href: homeHref, style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, letterSpacing: '-0.02em', color: 'var(--ink)', textDecoration: 'none', marginRight: 'auto' } }, 'Jesse Spijker'),
      links.map((l, i) => React.createElement('a', { key: i, href: l.href, style: {
        fontSize: 15, textDecoration: 'none', color: l.label === active ? 'var(--ink)' : 'var(--ink-2)',
        borderBottom: l.label === active ? '2px solid var(--accent)' : '2px solid transparent', paddingBottom: 2,
      } }, l.label)),
      React.createElement(LangToggle, { lang, onChange: onLangChange }),
      React.createElement(Button, { size: 'sm', href: ctaHref }, ctaLabel)
    )
  );
}