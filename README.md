# Praktikums-Dashboard – Damain Dressel

Eine einfache, responsive Webseite für GitHub Pages zur Verwaltung deiner Schreinerpraktikums-Anfragen.

## Enthalten
- Übersicht über die vier angeschriebenen Stellen (Schreinerei Sauber ist nicht enthalten)
- Status je Betrieb: Anfrage versendet, wartet, Antwort, Zusage oder Absage
- Notizen zu Antworten und betriebliche Angaben
- Praktikumstermine innerhalb 01.02.2027–26.02.2027 eintragen
- Kalenderdatei `.ics` exportieren
- Praktikumsvertrag der Berufsschule 1 Fürth öffnen
- Datenexport als JSON
- Speicherung lokal im Browser (localStorage)

## Wichtig – Gmail und automatische Kontrolle
Diese GitHub-Pages-Webseite liest Gmail nicht automatisch aus und versendet keine E-Mails. Die wöchentliche Gmail-Prüfung wurde separat als ChatGPT-Aufgabe eingerichtet. Wenn eine Antwort kommt, trägst du sie hier über **Bearbeiten** ein. Für echte automatische Gmail-Synchronisierung wäre ein sicherer Server mit Google OAuth erforderlich; Zugangsdaten dürfen niemals in diese statische Webseite geschrieben werden.

## Auf GitHub Pages veröffentlichen
1. Entpacke die ZIP-Datei.
2. Öffne GitHub und erstelle ein neues Repository, z. B. `praktikum-dashboard`.
3. Lade `index.html`, `style.css`, `app.js` und `README.md` in das Repository hoch (nicht den ZIP-Ordner selbst).
4. Öffne im Repository **Settings → Pages**.
5. Bei **Build and deployment** wähle **Deploy from a branch**.
6. Wähle Branch **main** und Ordner **/(root)**, dann **Save**.
7. Nach dem Veröffentlichen findest du die Seite unter `https://DEIN-GITHUB-NAME.github.io/praktikum-dashboard/`.

## Datenschutz
Die Einträge werden nur im lokalen Browser gespeichert. Nutze auf einem anderen Gerät denselben Browser nicht automatisch mit denselben Daten. Mit **Daten exportieren** kannst du eine Sicherung als JSON herunterladen. Teile die Webseite nicht öffentlich, wenn du dort persönliche Notizen einträgst.
