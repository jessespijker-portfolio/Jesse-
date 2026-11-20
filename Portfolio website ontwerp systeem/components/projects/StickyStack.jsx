export function StickyStack({ children, top = 110, step = 26, gap = 40 }) {
  const items = React.Children.toArray(children);
  return React.createElement('div', { style: { display: 'grid', gap } },
    items.map((child, i) => React.createElement('div', { key: i, style: { position: 'sticky', top: top + i * step } }, child))
  );
}