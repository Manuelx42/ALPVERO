# Briefing: ALPVERO

| | |
|---|---|
| Stand | 2026-10-16 |
| Alte Website | keine |
| Neue Domain | [OFFEN: Domain] (im Code Platzhalter `www.alpvero.example`, vor Livegang überall ersetzen) |
| Ordner | `ALPVERO/website/`, Vorschau `http://localhost:8090` |
| Brief | Interview mit dem Nutzer (Antworten in `planung/BRIEF.md`) |

## 1. Das Unternehmen
ALPVERO ist ein Studio (Auftritt als „wir“, nicht als Einzelperson), das Websites für kleine und mittlere Unternehmen baut: professionell konzipiert, auf das Unternehmensziel ausgerichtet, SEO-optimiert und für KI-Assistenten lesbar optimiert. Zum Paket gehören Domainumzug und neues Hosting. Es gibt noch keine Kundenzahlen, deshalb zeigt die Seite nur Beispielprojekte.

- Branche: Webdesign für KMU
- Standort: [OFFEN]
- Kontakt: E-Mail im Code `hallo@alpvero.example` (Platzhalter), Telefon [OFFEN], Anschrift [OFFEN]
- Logo: Bergzeichnung in Weiß auf Schwarz (Vorlage des Nutzers, `_quelle/logo-original.webp`), freigestellt als `assets/img/logo-mark.png`

## 2. Ziel der Website
- Hauptziel: Besucher sehen sich Arbeit an und halten ALPVERO für eine seriöse Agentur. Handlung: **„Erstgespräch vereinbaren“** (ein Label überall, kostenlos).
- Stimmung laut Nutzer: ruhig, professionell, kraftvoll, soll Eindruck machen. Die Seite selbst ist eine Scroll-Erfahrung.
- Zielgruppe: kleine und mittlere Unternehmen mit alter oder fehlender Website. Ansprache per **Sie**.

## 3. Seitenstruktur
| Seite / Abschnitt | Inhalt | Zweck |
|---|---|---|
| `index.html` Aufbruch | Gepinnte Bergszene aus vier Ebenen, H1 „Websites, die Ihr Ziel kennen.“, ein Satz, Button | Eindruck, Handlung |
| Leistung | Fünf Zeilen: Konzept, Handy, Google/Bing, KI, Umzug und Hosting | Was bekommt man |
| Ablauf | Gepinnte Route mit sechs Stationen und Höhenmeterzähler (der Ablauf aus der Praxis, siehe CLAUDE.md) | Höhepunkt, Transparenz |
| Referenzen | Seitliche Fahrt über vier Projekte mit Screenshots | Beleg |
| Fragen | Sechs Fragen als aufklappbare Einträge | Einwände |
| Kontakt (Gipfel) | Schneefläche, „Wohin soll Ihre Website?“, Button, E-Mail | Schluss, hält |
| `angebot/index.html` | **Versteckte** Preisseite, darunter Referenzen | Angebote zum Verschicken |
| `impressum.html`, `datenschutz.html` | Pflichtseiten | Recht |

## 4. Funktionen
| Funktion | Was sie tut | Umsetzung |
|---|---|---|
| Höhenleiste (rechts) | Sechs Punkte springen zu den Abschnitten, Linie füllt sich mit dem Scrollen; mobil dünne Linie am unteren Rand | `assets/alpvero.js`, `--climb` |
| Route „Aufstieg“ (Signature) | Scroll zeichnet die Route (Bergprofil in der Art des Logos), sechs Stationen leuchten, der Höhenmeterzähler läuft bis 3.000 | SVG-Strich mit `pathLength`, `--sc-p` der Engine, `alpvero.js` |
| Ebenen-Hero | Himmel, ferne Kette, Wortmarke, nahe Kette, Geröll bewegen sich verschieden schnell, die Wortmarke steht zwischen den Ketten | CSS mit `--sc-p`, Engine-Pin |
| Referenz-Fahrt | Seitliche Fahrt, bei reduzierter Bewegung ein Raster | Engine `pan` |
| FAQ | Aufklappbar, auch ohne JavaScript | `<details>` |
| Erstgespräch | `mailto:` mit vorbereiteter Nachricht | kein Formular, kein Dienst |
| Versteckte Preisseite | Nicht verlinkt, `noindex, nofollow`, nicht in Sitemap und `llms.txt`, nicht in `robots.txt` genannt (das würde den Pfad verraten) | `angebot/index.html` |

## 5. Inhalte und Quellen
- Texte: aus dem Interview (Angebot: „professionell konzeptierte Webseiten, auf Ihr Unternehmensziel ausgerichtet, SEO-optimiert, KI-optimiert“) und dem Ablauf aus den bisherigen Projekten. Keine erfundenen Zahlen, Bewertungen oder Zitate.
- Preise (nur `angebot/`): ohne Änderungen 649 €, mit Änderungen (zwei Runden) 950 €, Kleinunternehmerpreise, zuzüglich Hosting; zubuchbar Selbstpflege-Werkzeug 249,99 €, Landingpages, Blog, Newsletter und weitere Funktionen nach Absprache.
- Referenzen: vier Projekte aus diesem Ordner (Dachdeckerei Lankes, Endlich gut genug, Lammnest, Chalet Morgenlicht). Screenshots stammen aus den lokalen Builds (`_quelle` nicht nötig, Bilder in `assets/img/ref-*`). Gekennzeichnet als „Beispielprojekt“, Chalet Morgenlicht als „Musterprojekt (erfundenes Unternehmen)“. Keine Links, weil die Seiten nicht online sind.
- Bilder: Berg- und Schneebilder (Himmel, drei Bergketten, Gipfel) sind **KI-generiert** (kie.ai, Seedream) und dienen nur als Stimmung. Auf Wunsch des Nutzers steht auf der Website kein Hinweis darauf. Sie zeigen keine Personen, keine Kunden und keine Referenzen. Wer das ändern will: Hinweis im Impressum unter „Bildnachweis“ ergänzen.
- Bildrechte: Das Logo stammt vom Nutzer. Die Screenshots zeigen Projekte des Nutzers.

## 6. Design-Richtung
Grammatik **Aufstieg** (eigene Struktur: ein Berg als Navigation, Höhenmeter statt Kapitelnummern; kein Filmic, keine Galerie, kein Editorial). Dunkler Basalt-Grund, Eisgrün als einzige Akzentfarbe, am Ende ein Schnee-Schluss als harter Wechsel. Archivo (Überschriften) und Geist (Text), lokal eingebunden.

## 7. Technik
Statisches HTML, CSS und JavaScript, kein Build. Engine `scrollcraft.js/.css`, eigene Stile `assets/alpvero.css`, eigenes Skript `assets/alpvero.js`. Alle Texte stehen im HTML. Ohne JavaScript und bei reduzierter Bewegung ist alles lesbar (geprüft). Lighthouse (lokal): Desktop 97/100/100/100, Mobil 89/100/100/100 (Leistung/Barrierefreiheit/Best Practices/SEO), CLS 0.

## 8. Einschränkungen gegenüber der alten Seite
Es gibt keine alte Seite. Einschränkungen der neuen Seite:
- Kein Kontaktformular: „Erstgespräch vereinbaren“ öffnet das E-Mail-Programm. Lösung: Formular-Dienst anbinden (Datenschutz ergänzen) oder Terminbuchung einbinden.
- Referenzen ohne Live-Links, weil die Projekte nicht online sind. Lösung: Projekte auf Unterseiten oder eigener Domain bereitstellen und verlinken.
- Preise sind bewusst nicht auf der öffentlichen Seite.

## 9. Rechtliches (Rechts-Check)
1. **Cookies:** Alte Seite: keine. Neue Seite: keine Cookies, kein `localStorage`, keine Anfragen an fremde Hosts, Schriften lokal, keine Karte, kein Video. Per Browser-Test auf allen vier Seiten belegt (0 Cookies, 0 Storage, 0 Fremdhosts). Deshalb kein Banner nötig.
2. **Datenschutzerklärung:** Neu geschrieben. Enthält Hoster/Server-Logs, „keine Cookies, keine Tracker“, Kontakt per E-Mail (Mailto, kein Formular), Rechte. Offen: Hosting-Anbieter, Speicherdauer, AV-Vertrag, Aufsichtsbehörde, Verantwortlicher.
3. **Impressum:** Aufbau nach § 5 DDG. Offen: Name, Anschrift, Telefon, echte E-Mail, Bestätigung Kleinunternehmer (§ 19 UStG), ggf. USt-/Wirtschafts-IdNr. Kein Verweis auf die abgeschaltete EU-Plattform.
4. **Preisseite:** Kleinunternehmerhinweis und „zuzüglich Hosting“ stehen drauf. Hosting-Betrag ist [OFFEN].
5. **Referenzen:** Nennung realer Firmen und Personen (Dachdeckerei Lankes, Sabine Müller / Endlich gut genug) ist nur mit deren Einverständnis sauber. [OFFEN: Einverständnis oder Namen anonymisieren].
6. **KI-Bilder ohne Kennzeichnung:** Zeigen nur Landschaft, keine Personen und keine Referenzen, daher unkritisch. Keine Rechtsberatung: vor dem Livegang die Texte prüfen lassen.

## 10. Offene Punkte für den Kunden
- [OFFEN: Domain] und Hosting-Anbieter, Hosting-Kosten für die Preisseite
- [OFFEN: Impressumsangaben] (Name, Anschrift, Telefon, E-Mail, Steuerstatus)
- [OFFEN: echte E-Mail-Adresse] statt `hallo@alpvero.example`
- [OFFEN: Einverständnis der Referenzkunden] oder Namen anonymisieren
- [OFFEN: Selbstpflege-Werkzeug] Was kostet es laufend, und ist das in den 249,99 € enthalten? (Nutzerangabe: Installation, Werkzeugkosten und Schulung)
- Später: echte Kundenzahlen, Kundenstimmen und Live-Links, sobald vorhanden (nicht erfinden)
