# ALPVERO

Website des Studios ALPVERO: statisches HTML, CSS und JavaScript, kein Build nötig.

Der Repo-Stamm ist die Website (`index.html`, versteckte Preisseite `angebot/`, `impressum.html`, `datenschutz.html`, `404.html`). Dadurch zeigt GitHub Pages sie direkt an, mit der Einstellung **Deploy from a branch, main, / (root)**. `.nojekyll` sorgt dafür, dass nichts verändert wird.

Briefing, Reports, Planung und Quellbilder liegen lokal im Ordner `intern/` und sind nicht im Repo.

Vorschau lokal: `node ~/.claude/skills/scroll-craft/scripts/serve.mjs --root . --port 8090`

Vor dem Livegang: Platzhalter `www.alpvero.example`, `hallo@alpvero.example` und alle `[OFFEN: …]` in Impressum und Datenschutz ersetzen. Eigene Domain: Datei `CNAME` mit der Domain anlegen.
Die Seite `angebot/` ist nicht verlinkt und `noindex`, aber unter ihrer Adresse erreichbar.
