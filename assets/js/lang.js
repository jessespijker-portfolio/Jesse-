// Taalschakelaar voor de projectpagina's. Onthoudt de keuze (gedeeld met de homepage)
// onder de sleutel 'js-lang'.
(function () {
  var root = document.documentElement;
  function setLang(l) {
    root.classList.remove('lang-nl', 'lang-en');
    root.classList.add('lang-' + l);
    root.lang = l;
    try { localStorage.setItem('js-lang', l); } catch (e) {}
  }
  var saved = null;
  try { saved = localStorage.getItem('js-lang'); } catch (e) {}
  if (saved === 'en' || saved === 'nl') setLang(saved);
  document.querySelectorAll('.toggle button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-set')); });
  });
})();
