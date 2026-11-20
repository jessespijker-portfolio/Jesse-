import { SectionLabel } from '../core/SectionLabel.jsx';
export function Footer({ heading = 'Laten we kennismaken', sub, email = 'Jessespijker@gmail.com', phone,linkedin = 'Jesse Spijker', note = '\u00A9 Jesse Spijker', sectionIndex = '03' }) {
  const link = (href, label, ext) => React.createElement('a', { href, style: {
    color: 'var(--inverse-text)', textDecoration: 'none', fontSize: 18, borderBottom: '1px solid rgba(244,243,239,0.3)', paddingBottom: 2,
  }, }, label + (ext ? ' \u2197' : ''));
  return React.createElement('footer', { id: 'contact', style: { background: 'var(--inverse)', color: 'var(--inverse-text)' } },
    React.createElement('div', { style: { maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--section-y) var(--gutter) 40px' } },
      React.createElement(SectionLabel, { inverse: true, index: sectionIndex }, 'Contact'),
      React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2-size)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '28px 0 12px', color: 'var(--inverse-text)' } }, heading),
      sub ? React.createElement('p', { style: { margin: '0 0 36px', maxWidth: 560, color: 'var(--inverse-muted)', fontSize: 17 } }, sub) : null,
      React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '16px 40px', marginTop: 24 } },
        link('mailto:' + email, email, true),
        phone ? link('tel:' + phone.replace(/[^0-9+]/g, ''), phone, false) : null,
        link('https://www.linkedin.com/', 'LinkedIn \u2014 ' + linkedin, true)
      ),
      React.createElement('div', { style: { marginTop: 72, paddingTop: 20, borderTop: '1px solid rgba(244,243,239,0.15)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 'var(--mono-label-size)', letterSpacing: 'var(--mono-label-tracking)', textTransform: 'uppercase', color: 'var(--inverse-muted)' } },
        React.createElement('span', null, note),
        React.createElement('span', null, 'IPO \u2014 De Haagse Hogeschool')
      )
    )
  );
}