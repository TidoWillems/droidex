# Droidex SNAP

## Ziel

Droidex ist ein Offline-First Companion für Epic Droid Tycoon.

Schwerpunkte:

- Sammlung
- Verfügbarkeit
- Rebirth-Planung
- Droid-Wissen

---

## Architektur

- React
- Vite
- Tailwind
- PWA

Version:

src/data/version.ts

Deployment:

npm run release

---

## Kernzustände

collected
= jemals besessen

present
= aktuell verfügbar

flawless
= kosmetisch freigeschaltet

Die Zustände sind unabhängig.

---

## Rebirth-System

Rebirth besteht aus:

- Rebirth Path
- Rebirth Level

Aktuelle Pfade:

- RB1
- RB2
- RB3
- RB4

Zentrale Datenquelle:

REBIRTH_PATHS

---

## Wichtige Erkenntnisse

- Sammlung und Verfügbarkeit sind unterschiedliche Zustände.
- Rebirth-Anforderungen basieren auf Verfügbarkeit.
- Zukunftsrelevanz ist wichtiger als historische Nutzung.
- Mapping-Layer erlauben neue Progressionssysteme ohne UI-Umbauten.
- Offline-First reduziert Komplexität erheblich.

---

## Hauptmodule

- Header
- DroidGrid
- DroidCard
- RebirthPanel
- RebirthsPage
- TipsPage
- AboutPage
- Footer

---

## Werkzeuge

scripts/extract_thumbnails.py

Erstellt Droid-Assets aus Screenshots.

---

## Deployment

Entwicklung:

npm run dev -- --host

Build:

npm run build

Release:

npm run release

Merksatz:

git push = Code sichern

npm run release = veröffentlichen
