# Droidex SNAP

## Architektur

- React + Vite + Tailwind
- PWA via manifest + service worker
- Version zentral über:
  src/data/version.ts
- Deployment:

  git push
  npm run deploy

## Besondere Muster

- Footer als Modul ausgelagert
- Router wächst über eigenständige Pages
- Tips = Daten + Cards + Filter
- Screenshot-Cropping Pipeline bewusst erhalten
- Rebirth-System = Daten + verschiedene Sichten
- DroidCard erhält Zusatzinformationen aus Mapping-Layern

## Werkbank

scripts/extract_thumbnails.py

Erstellt Droids aus Screenshots

→ droidex_images (temporär)
→ public/droids

## Erkenntnisse

- PWA Cache kann alte Versionen festhalten
- gh-pages ist getrennt von main
- INSTALL erscheint nur bei beforeinstallprompt
- Bestehende Datenstrukturen können neue UI-Sichten erzeugen
- Rebirth-Daten werden rückwärts zu Droid-Metadaten gemappt
- Kleine UI-Hinweise können viel Navigationsaufwand ersetzen
- Rebirth-Daten werden rückwärts zu Droid-Metadaten gemappt
- Bestehende Datenstrukturen können neue UI-Sichten erzeugen
- Offline-first reduziert Systemkomplexität deutlich
- Lokale Persistenz reicht für viele Companion-Apps vollständig aus

## Neue Features (v1.0.7)

- Rebirth-Badge auf DroidCards:
  ↻ 3·5·7

- Zeigt alle Rebirth-Stufen, in denen ein Droid benötigt wird

- Gruppiert nach Droid statt Tier:
  BU-4D → 3·5·7
  statt:
  BU-4D_DEFAULT → 3
  BU-4D_GOLD → 5

- APP GUIDE erklärt Badge-Bedeutung
- Versionierung zentralisiert

## Neue Features (v1.0.8)

- Offline Timer System
- Tracks manual offline income sessions
- Mobile-friendly system panel in header
- localStorage persistence
- Firefox mobile layout stabilized through vertical system grouping

# Deployment Flow

Lokale Entwicklung:

npm run dev -- --host

Build testen:

npm run build

Git speichern:

git add -A
git commit -m "Beschreibung"
git push

GitHub Pages veröffentlichen:

npm run deploy

Ablauf:

main
↓
git push

Quellcode auf GitHub

↓
npm run deploy

dist → gh-pages

↓
GitHub Pages / PWA live

## Hinweise

- git push veröffentlicht nur Quellcode
- npm run deploy veröffentlicht die App
- gh-pages ist getrennt von main
- PWA/Service Worker können alte Assets cachen
- Cache-Version in public/sw.js erhöhen:

  const CACHE='droidex-v5'
