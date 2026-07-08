# Droidex SNAP

## v1.6.0

Architecture continues to emerge through extraction.

Neue Domain-Module:

✓ droidHierarchy.ts
Gameplay-Hierarchie

✓ droidFacts.ts
Konsolidierte Droid-Fakten

✓ filterRules.ts
UI-unabhängige Filterlogik

Erkenntnis:

DroidGrid besitzt keine Filterlogik mehr.

Die UI beschreibt nur noch den gewünschten Zustand,
die Domain entscheidet welche Karten sichtbar sind.

Pattern

UI
→ asks

Rules
→ calculate

Facts
→ consolidate

UI
→ render

## 20260628

Architecture v2

Droidex organizes knowledge by
domain responsibility.

Domains:

- Game World
- Domain Rules
- User Progress
- Companion

Every piece of information belongs
to exactly one domain.

The UI presents domain results.

The Companion interprets the
three foundation domains and
creates recommendations,
explanations and planning.

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

- Companion priorisiert spielrelevante
  Entscheidungen vor rein mathematischen
  Auswertungen.
- Companion entwickelt sich schrittweise
  von Statusfunktionen zu erklärbaren
  Interpretationen.
- Sammlung und Verfügbarkeit sind unterschiedliche Zustände.
- Zukunftsrelevanz ist wichtiger als historische Nutzung.
- Mapping-Layer erlauben neue Progressionssysteme ohne UI-Umbauten.
- Offline-First reduziert Komplexität erheblich.
- Rebirth-Anforderungen basieren auf Effective Present.

---

## Hauptmodule

Workspace

Der Hauptbereich entwickelt sich zu einem
gemeinsamen Workspace.

Aktuelle Bereiche:

- Filter
- Collection
- Rebirth

Diese Bereiche sollen langfristig
denselben Panel-Aufbau,
dieselbe Interaktion und
dieselbe Designsprache verwenden.

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
