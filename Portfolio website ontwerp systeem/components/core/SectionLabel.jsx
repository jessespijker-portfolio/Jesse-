export function SectionLabel({ index, children, inverse = false }) {
  const c = inverse ? 'var(--inverse-muted)' : 'var(--text-label)';
  return React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 16 } },
    React.createElement('span', { style: {
      fontFamily: 'var(--font-mono)', fontSize: 'var(--mono-label-size)', letterSpacing: 'var(--mono-label-tracking)',
      textTransform: 'uppercase', color: c, whiteSpace: 'nowrap',
    } }, index ? index + ' \u2014 ' + '' : '', children),
    React.createElement('span', { style: { flex: 1, height: 1, background: inverse ? 'rgba(244,243,239,0.2)' : 'var(--line)' } })
  );
}