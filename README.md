# Praktikums-Dashboard – Damain Dressel

Responsive GitHub-Pages-Webseite zur Verwaltung der Schreinerpraktikums-Anfragen im BGJ Holztechnik.

## Funktionen
- Dunkles Dashboard-Layout, inspiriert von der Teamify-Referenz auf Dribbble
- Übersicht mit Anfrage-, Antwort-, Zusage- und Termin-Zählern
- Fortschrittsanzeige und Gmail-Status
- Betriebe hinzufügen, bearbeiten und löschen
- Status: Anfrage versendet, Warte auf Antwort, Antwort erhalten, Zusage erhalten, Absage erhalten
- Notizen, Ansprechpartner und Praktikumsdaten pflegen
- Kalenderübersicht und `.ics`-Export
- Praktikumsvertrag öffnen und Checkliste speichern
- Anfrage-Text kopieren
- JSON-Datenexport
- Speicherung lokal im Browser (`localStorage`)

## Gmail-Hinweis
Diese reine GitHub-Pages-Webseite liest Gmail nicht automatisch aus. Die wöchentliche Antwortprüfung ist separat eingerichtet. Neue Rückmeldungen können manuell über **Bearbeiten** beim jeweiligen Betrieb eingetragen werden. Eine echte automatische Synchronisierung auf der Webseite benötigt eine Google-OAuth-Anmeldung und einen sicheren Backend-Dienst (z. B. serverlose Funktionen); geheime Zugangsdaten dürfen nicht in `app.js` oder andere öffentliche Dateien eingetragen werden. Der Gmail-Status im Dashboard zeigt diesen Zustand ausdrücklich an und behauptet keine aktive Synchronisierung.

## Veröffentlichung mit GitHub Pages
1. ZIP-Datei entpacken.
2. Die Dateien `index.html`, `style.css`, `app.js` und `README.md` in das Repository hochladen.
3. In GitHub **Settings → Pages** öffnen.
4. Unter **Build and deployment** `Deploy from a branch` auswählen.
5. Branch `main` und Ordner `/(root)` auswählen und speichern.
6. Nach dem Veröffentlichen ist die Seite unter `https://DEIN-GITHUB-NAME.github.io/REPOSITORY-NAME/` erreichbar.

## Daten und Datenschutz
Die Einträge liegen nur im lokalen Browserprofil. Sie werden nicht automatisch zwischen Geräten synchronisiert. Über **Daten exportieren** kannst du eine JSON-Sicherung speichern. Teile die Seite nicht öffentlich, wenn du vertrauliche persönliche Notizen einträgst.
