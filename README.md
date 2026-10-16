# ALPVERO

Website des Studios ALPVERO: statisches HTML, CSS und JavaScript, kein Build nötig.

- `website/` ist die veröffentlichbare Seite (`index.html`, versteckte Preisseite `angebot/`, Impressum, Datenschutz)
- `BRIEFING.md`, `SEO-KI-REPORT.md`, `CMS-EMPFEHLUNG.md`, `KOSTEN.md` dokumentieren Inhalt, Prüfung und Kosten
- `planung/` enthält Brief, Konzept und Screenshots, `_quelle/` Logo und Originalbilder (nicht veröffentlichen)

Vorschau lokal: `node ~/.claude/skills/scroll-craft/scripts/serve.mjs --root website --port 8090`

Vor dem Livegang: Platzhalter `www.alpvero.example`, `hallo@alpvero.example` und alle `[OFFEN: …]` in Impressum und Datenschutz ersetzen.
Die Seite `website/angebot/` ist nicht verlinkt und `noindex`. Repo daher privat lassen.

## GitHub Pages
Die Seite wird über `.github/workflows/pages.yml` veröffentlicht. Der Workflow lädt nur den Ordner `website/` hoch, Briefing, Reports, Planung und Quellbilder bleiben im Repo.

1. Im Repo unter Settings, Pages, Source auf **GitHub Actions** stellen.
2. Push auf `main` veröffentlicht die Seite. Sie erscheint unter `https://<konto>.github.io/ALPVERO/`. Alle Links der Seite sind relativ, das funktioniert auch unter diesem Unterpfad.
3. Eigene Domain: Datei `website/CNAME` mit der Domain anlegen und bei Pages eintragen. Danach `www.alpvero.example` in allen Dateien ersetzen.

Hinweise: Pages auf einem privaten Repo braucht einen bezahlten GitHub-Plan. Bei einem öffentlichen Repo sind Briefing, Kosten und Quellbilder für alle lesbar, und `/angebot/` ist per Adresse erreichbar. `404.html` und `.nojekyll` liegen in `website/`.
