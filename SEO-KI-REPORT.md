# SEO- und KI-Report: ALPVERO

Stand: 2026-10-16 · Geprüft mit `_werkzeuge/seo-check.py` und Lighthouse (lokal)

Kurzfassung: Alle Inhalte stehen als HTML im Quelltext, Titel, Beschreibungen, Open Graph, JSON-LD, Sitemap, `robots.txt` und `llms.txt` sind gesetzt. Die Preisseite `/angebot/` ist bewusst unsichtbar für Suchmaschinen. Vor dem Livegang fehlen die echte Domain, Impressumsangaben und eine echte E-Mail-Adresse (Platzhalter `www.alpvero.example`).

## 1. Klassisches SEO (Google, Bing)
| Maßnahme | Umsetzung | Status |
|---|---|---|
| Eindeutiger `<title>` pro Seite | alle vier Seiten | ✅ |
| Meta-Description pro Seite | alle vier Seiten | ✅ |
| Genau eine H1, saubere Überschriften | `index.html`: „Websites, die Ihr Ziel kennen.“ | ✅ |
| Canonical | `index.html`, Impressum, Datenschutz. Preisseite bewusst ohne (noindex) | ✅ |
| Sitemap | `sitemap.xml` mit Start, Impressum, Datenschutz, **ohne** `/angebot/` | ✅ |
| `robots.txt` | erlaubt alle, nennt `/angebot/` nicht (sonst wäre der Pfad auffindbar) | ✅ |
| Versteckte Preisseite | `<meta name="robots" content="noindex, nofollow">`, kein Link von der Seite | ✅ |
| Open Graph / Twitter Card | `index.html`, `assets/og.jpg` 1200×630 | ✅ |
| Alt-Texte, `width`/`height`, Lazy Loading | alle Bilder; Hero-Bilder ohne Lazy | ✅ |
| Hinweis | `/angebot/` ist per URL erreichbar. Wer die Adresse kennt, sieht sie. Für echten Schutz wäre ein Passwort mit Hosting-Funktion nötig | ⚠️ |

## 2. Performance (Core Web Vitals, Lighthouse lokal)
| Messung | Leistung | Barrierefreiheit | Best Practices | SEO | LCP | CLS |
|---|---|---|---|---|---|---|
| Desktop | 97 | 100 | 100 | 100 | 1,3 s | 0,001 |
| Mobil (simuliert, gedrosselt) | 89 | 100 | 100 | 100 | 3,4 s | 0 |

Maßnahmen: Höhe der gepinnten Abschnitte vorab per CSS (kein Sprung nach dem Laden), Hero-Himmel mit `imagesrcset` vorgeladen, kleine Handy-Ebenen (900 px), Schrift lokal und vorgeladen.

## 3. Strukturierte Daten (JSON-LD)
`ProfessionalService` mit Name, URL, Logo, Beschreibung, `knowsAbout`, `areaServed`. Adresse und Telefon fehlen, weil sie noch offen sind. [OFFEN: nach Eintrag ins Impressum ergänzen]

## 4. Optimierung für KI-Suche und KI-Agenten
| Maßnahme | Umsetzung | Status |
|---|---|---|
| Inhalte als HTML, lesbar ohne JS | geprüft ohne JavaScript, nichts unsichtbar | ✅ |
| `robots.txt` erlaubt KI-Crawler | GPTBot, ClaudeBot, PerplexityBot, Google-Extended ausdrücklich erlaubt (Entscheidung des Betreibers bestätigen) | ✅ |
| `llms.txt` | Kurzbeschreibung, Fakten, Ablauf, Seiten, Fragen; `/angebot/` nicht genannt | ✅ |
| Fakten in klaren Sätzen | Leistung, Ablauf und FAQ als Text | ✅ |
| FAQ mit direkten Antworten | sechs Fragen, `<details>` | ✅ |
| Semantisches HTML | `header`, `nav`, `main`, `section` mit Überschrift | ✅ |
| Bedienbar für Agenten | echte Links und Buttons, kein Formular nötig (`mailto:`) | ✅ |
| Kontaktwege maschinenlesbar | `mailto:` (echte Adresse offen), `tel:` offen | ☐ |

## 5. Barrierefreiheit
Lighthouse 100. Skip-Link, sichtbarer Fokus, Tippflächen mindestens 44 px, `prefers-reduced-motion` (Referenzen werden zum Raster, Route steht fertig gezeichnet), ohne JavaScript alles lesbar.

## 6. Ergebnis seo-check.py
60 Prüfungen bestanden, 3 rot:
- `angebot/index.html`: Canonical fehlt. **Absicht**, die Seite ist `noindex`.
- `impressum.html`, `datenschutz.html`: Platzhalter `[OFFEN: …]` stehen noch im Text. **Müssen vor dem Livegang ausgefüllt werden.**

Gelbe Hinweise: kein `tel:`-Link (Telefon noch offen), `noindex` auf der Preisseite (Absicht), JSON-LD ohne Adresse und Telefon (offen).

## 7. To-dos nach dem Launch
- [ ] Domain eintragen: `www.alpvero.example` in allen Dateien ersetzen (Canonical, OG, JSON-LD, Sitemap, `robots.txt`, `llms.txt`)
- [ ] Google Search Console: Domain verifizieren, Sitemap einreichen
- [ ] Bing Webmaster Tools: Sitemap einreichen, IndexNow aktivieren
- [ ] Google Business Profile anlegen (falls ein Standort angegeben wird)
- [ ] Nach 4 bis 6 Wochen: Indexierung prüfen, dass `/angebot/` nicht auftaucht

### Weiterleitungen alt → neu
Keine, es gibt keine alte Seite.
