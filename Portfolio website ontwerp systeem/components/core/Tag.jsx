export function Tag({ children, tone = 'default' }) {
  const toneStyle = tone === 'accent'
    ? { color: 'var(--accent-text)', borderColor: 'var(--accent-text)' }
    : { color: 'var(--ink-2)', borderColor: 'var(--line-strong)' };
  return React.createElement('span', { style: {
    display: 'inline-block', padding: '5px 10px', border: '1px solid', borderRadius: 'var(--radius-xs)',
    fontFamily: 'var(--font-mono)', fontSize: 'var(--mono-label-size)', letterSpacing: 'var(--mono-label-tracking)',
    textTransform: 'uppercase', lineHeight: 1, whiteSpace: 'nowrap', ...toneStyle,
  } }, children);
}