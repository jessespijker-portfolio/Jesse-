// Mount-helper voor specimen cards & UI kit.
// Gebruikt de gegenereerde _ds_bundle.js-namespace als die bestaat; anders worden de
// .jsx-bronnen gefetcht, imports/exports gestript en met Babel gecompileerd.
window.mountDS = async function (paths, names) {
  for (const k of Object.keys(window)) {
    try {
      const v = window[k];
      if (v && typeof v === 'object' && names.every((n) => typeof v[n] === 'function')) return v;
    } catch (e) { /* cross-origin frames e.d. overslaan */ }
  }
  let src = '';
  for (const p of paths) src += (await (await fetch(p)).text()) + '\n';
  src = src.replace(/^\s*import[^\n]*$/gm, '').replace(/^\s*export\s+/gm, '');
  const code = Babel.transform(src, { filename: 'ds.jsx', presets: ['react'] }).code;
  return new Function('React', code + ';return {' + names.join(',') + '};')(window.React);
};
