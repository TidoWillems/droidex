# Droidex SNAP

## Architektur

- React + Vite + Tailwind
- PWA via manifest + service worker
- Deployment:
  git push
  npm run deploy

## Besondere Muster

- Footer als Modul ausgelagert
- Router wächst über eigenständige Pages
- Tips = Daten + Cards + Filter
- Screenshot-Cropping Pipeline bewusst erhalten

## Werkbank

scripts/extract_thumbnails.py

Erstellt Droids aus Screenshots
→ droidex_images (temporär)
→ public/droids

## Erkenntnisse

- PWA Cache kann alte Versionen festhalten
- gh-pages ist getrennt von main
- INSTALL erscheint nur bei beforeinstallprompt

## Offene Ideen

- Droid Card Drawer
- About erweitern
- Fortschrittsanalyse aus Screenshots
- Admin/Debug Page

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
