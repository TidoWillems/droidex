# Droidex SNAP

Erkenntnisse (v1.4.0)

SNAP-Aufteilung

- SNAP.md wurde von historischer Dokumentation getrennt.
- SNAP dient künftig als kompaktes Projektgedächtnis.
- Historische Erkenntnisse verbleiben in LAB_NOTES.md.
- CHANGELOG.md dient für Release-Historie.

Erkenntnis:

- Projektgedächtnis und Projekthistorie haben unterschiedliche Aufgaben.
- Eine kurze SNAP-Datei ist zu Sessionbeginn deutlich nutzbarer als ein wachsendes Archiv.

---

Header Dashboard Verdichtung

- Dashboard von 2x3 auf 2x2 reduziert.
- GESAMT-Kachel entfernt.
- Logo übernimmt die visuelle Mitte.
- REBIRTH und OFFLINE bilden die primären Systemzustände.
- Sammlung wird direkt über die Progress-Balken dargestellt.

Erkenntnis:

- Informationen sollten möglichst dort erscheinen, wo sie verwendet werden.
- Separate Statistik-Kacheln werden überflüssig, wenn Fortschritt bereits sichtbar ist.

---

Progress-Balken Vereinheitlichung

COLLECTED

- linker Bereich = gesammelt
- rechter Bereich = fehlend

FLAWLESS

- linker Bereich = flawless
- rechter Bereich = offen

Beide Balken nutzen:

- identische Beschriftungslogik
- identische Textpositionierung
- identische visuelle Struktur

Erkenntnis:

- Wiederverwendete Lesemuster reduzieren Interpretationsaufwand.
- Nutzer versteht den zweiten Balken sofort, weil er dem ersten folgt.

---

Rebirth Header

Verworfen:

- Rebirth 19 (2/3)
- zusätzliche Requirement-Anzeige im Header

Beibehalten:

- REBIRTH
- aktuelles Level

Erkenntnis:

- Nicht jede verfügbare Information verbessert die Übersicht.
- Rebirth-Fortschritt gehört primär ins RebirthPanel.
- Der Header profitiert stärker von Klarheit als von zusätzlicher Informationsdichte

(b3j gelegenheit rwihenfolge umstellen dieser SNAP)

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
