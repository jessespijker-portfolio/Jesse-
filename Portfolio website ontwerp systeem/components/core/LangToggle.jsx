export function LangToggle({ lang = 'nl', onChange }) {
  const opt = (code) => {
    const active = lang === code;
    return React.createElement('button', {
      key: code, type: 'button', onClick: () => onChange && onChange(code),
      style: {
        padding: '6px 12px', border: 'none', borderRadius: 'var(--radius-pill)', cursor: 'pointer',
        fontFamily: 'var(--font-mono)', fontSize: 'var(--mono-label-size)', letterSpacing: '0.08em',
        textTransform: 'uppercase', lineHeight: 1, transition: 'all 150ms ease-out',
        background: active ? 'var(--ink)' : 'transparent', color: active ? 'var(--paper)' : 'var(--ink-2)',
      }
    }, code);
  };
  return React.createElement('div', { style: {
    display: 'inline-flex', gap: 2, padding: 3, border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-pill)',
  } }, [opt('nl'), opt('en')]);
}