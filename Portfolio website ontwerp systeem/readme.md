# Jesse Spijker — Portfolio Design System

Design systeem voor het portfolio van **Jesse Spijker**, student Industrieel Product Ontwerpen (IPO) aan De Haagse Hogeschool. Doel: een strak, minimalistisch en aantrekkelijk portfolio om een **afstudeerstage vanaf februari 2027** te vinden. Vervangt de oude WordPress-site (jessespijkerportfolio.nl).

**Bronnen:** jessespijkerportfolio.nl (content + foto's, hotlinked) · referentie-element: 21st.dev "sticky-services-stack" (@abushaidislam7) — projectkaarten die bij scrollen op elkaar stapelen · wensen uit chat: strak/minimalistisch, NL+EN, persoonlijk & enthousiast.

Alle content (projecten, bio, contact, beeld-URL's) staat in `content/content.md`.

## CONTENT FUNDAMENTALS
- **Taal:** Nederlands eerst, met EN-schakelaar (component `LangToggle`). Teksten per taal naast elkaar bijhouden.
- **Toon:** persoonlijk & enthousiast, maar nuchter — geen superlatieven-slop. Eerste persoon ("ik ontwerp", "ik word gedreven door problemen oplossen"). Jij/je naar de lezer.
- **Casing:** zinnen in normale casing; mono-labels in UPPERCASE ("01 — PROJECTEN", "OVER MIJ").
- **Projectomschrijvingen:** één zin, werkwoord-gedreven, concreet resultaat. Vb: "Steekwagen die elektrisch aangedreven de trap op en af kan."
- **Geen emoji.** Pijlen (→ ↗) als enige glyphs.
- **CTA's:** kort en direct: "Bekijk project", "Meer over mij", "Laten we kennismaken".

## VISUAL FOUNDATIONS
- **Vibe:** galerij-minimaal met een technisch/industrieel randje — veel wit(ruimte), hairlines, mono-nummering als knipoog naar technische tekeningen.
- **Kleur:** warm off-white grond `--paper #F4F3EF`, wit voor kaarten, bijna-zwart `--ink #171610`. Eén accent: diep petrol `--accent #1E6E64` — spaarzaam (markers, hover, één vlak per view). Kleine accenttekst altijd `--accent-text #15594F` (contrast). Donkere inverse-sectie (`--inverse`) alleen voor de footer/contact.
- **Type:** Archivo (display + body; koppen 600, tracking −0.02/−0.03em, leading ~1.0) + Space Mono voor labels/nummers (12px, +0.14em, uppercase). Géén lokale fontbestanden — Google Fonts via `tokens/typography.css`.
- **Spacing:** 4px-schaal, container 1200px, sectiepadding `--section-y` (64–128px). Lucht is het hoofdornament.
- **Achtergronden:** effen vlakken, nooit gradients of patronen. Fotografie doet het werk.
- **Borders/schaduw:** 1px hairlines (`--line`) als primaire scheiding; schaduw ALLEEN op de sticky stack-kaarten (`--shadow-stack`).
- **Radii:** 2px (tags) · 12px (beeldkaders) · 20px (stack-kaarten) · pill (knoppen).
- **Beeld:** productfoto's/renders op lichte of neutrale grond, warm licht; geen filters of duotones. Nieuwe projecten zonder beeld: `--surface-sunken` placeholder met mono-label "BEELD VOLGT".
- **Animatie:** functioneel en kort — de sticky stack (CSS `position: sticky`) is hét bewegingselement; verder alleen 150–200ms ease-out op hover (kleur, 2px lift op kaarten). Geen parallax, geen fades bij laden.
- **Hover:** links → `--accent-text` + underline; knoppen primary → iets lichter ink; kaartlinks → pijl schuift 4px.
- **Press:** scale(0.98).

## ICONOGRAFIE
Geen icoonset. Typografische glyphs zijn de iconen: `→` (interne link/CTA), `↗` (externe link: LinkedIn, mail), `—` (scheiding in labels). Geen SVG-iconen, geen emoji, geen icon fonts. Er is **geen logo**; het woordmerk is "Jesse Spijker" gezet in Archivo 600 (eventueel "JS" als monogram in plain type). Nooit een logo tekenen.

## Componenten (`components/`)
- `core/` — **Button** (primary/accent/ghost, pill), **Tag** (mono-chip), **SectionLabel** (genummerd mono-kopje met hairline), **LangToggle** (NL/EN pill)
- `navigation/` — **NavBar** (woordmerk, links, taal + CTA), **Footer** (inverse blok met grote CTA + contact)
- `projects/` — **ProjectCard** (stack-kaart: index, titel, omschrijving, tags, beeld), **StickyStack** (scroll-stapel wrapper — het 21st.dev-referentie-element)

*Intentional additions:* alles is nieuw ontworpen (geen bestaand systeem als bron); StickyStack toegevoegd omdat dit expliciet het gevraagde kernelement is.

## Index
- `styles.css` → `tokens/{colors,typography,spacing}.css`
- `content/content.md` — alle site-content + beeld-URL's
- `guidelines/` — specimen cards (kleur, type, spacing)
- `components/` — zie boven
- `ui_kits/portfolio/` — homepage-kit (hero, sticky projectstack, over mij, contact)
- `SKILL.md`

## Caveats
- Foto's zijn hotlinks naar de oude WordPress-site; vervang door lokale uploads vóór livegang.
- NEO (draadloos oplaadsysteem MacBook) en WAACS-stage hebben nog geen beeld/tekst — placeholders.
- "Design agency" uit de briefing is geïnterpreteerd als context van het NEO-project; check bij Jesse.
