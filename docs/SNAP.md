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

## Erkenntnisse (v1.1.3)

- Header vollständig als 2x3 Dashboard neu aufgebaut
- App-Logo ersetzt den bisherigen DROIDEX-Schriftzug
- Progress-Anzeige direkt im Balken
- Assets unter GitHub Pages über import.meta.env.BASE_URL referenzieren
- git push veröffentlicht keinen neuen App-Stand
- gh-pages bleibt die einzige Veröffentlichungsquelle
- version.json ist die zuverlässigste Prüfung des Live-Deployments

## Erkenntnisse (v1.1.4)

- Historische localStorage-Daten können veraltete Karten-IDs enthalten.
- UI-Zählungen dürfen nicht auf rohen Storage-Daten basieren.
- ALL_CARDS ist die autoritative Kartenbasis.
- Fortschritt wird gegen gültige Karten berechnet:
  gültige Karten ∩ gespeicherte Karten
- Storage-Migration aktuell nicht notwendig.

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

## Neue Features (v1.1.3)

### Dashboard Header Redesign

- Neues 2x3 Dashboard Layout
- Logo als visuelles Zentrum
- REBIRTH / OFFLINE links
- GESAMT / FEHLEND rechts
- Fortschrittsbalken unter Dashboard
- Kompaktere mobile Darstellung
- GESAMMELT → GESAMT

### PWA Update System

- Version zentral über src/data/version.ts
- Build erzeugt automatisch:
  - public/version.json
  - Service-Worker Cache-Version

- useAppUpdate prüft:
  - installierte Version
  - veröffentlichte Version

- About-Seite zeigt:
  - installierte Version
  - verfügbare Version

- APP AKTUALISIEREN:
  - entfernt Service Worker
  - löscht alle Caches
  - lädt App neu

Ziel:
Sofortige Aktualisierung installierter PWAs ohne manuelles Cache-Management.

## Deployment Flow

Entwicklung

Starten:

npm run dev -- --host

Build prüfen

npm run build

Änderungen speichern

git add -A
git commit -m "Beschreibung"
git push

Veröffentlichung

npm run deploy

Schnellveröffentlichung

npm run release

Ablauf:

Code ändern
↓
SNAP aktualisieren
↓
npm run build
↓
git add -A
git commit -m "..."
git push
↓
npm run release

Hinweise:

- git push veröffentlicht nur den Quellcode
- npm run deploy veröffentlicht die App
- gh-pages ist getrennt von main
- PWA kann ältere Assets zwischenspeichern
- version.json zeigt die aktuell veröffentlichte Version
- Release prüfen:

curl https://tidowillems.github.io/droidex/version.json

## Release-Prinzip

Es gibt zwei getrennte Vorgänge:

### Quellcode sichern

git add -A
git commit -m "..."
git push

Ergebnis:

- main aktualisiert
- GitHub Repository aktualisiert
- keine Auswirkung auf die Live-App

### Release veröffentlichen

npm run deploy

Ergebnis:

- Versiondateien aktualisiert
- Produktionsbuild erzeugt
- GitHub Pages veröffentlicht
- PWA kann Update erkennen

Merksatz:

git push = Code speichern

npm run deploy = Release veröffentlichen

## Versionierung

Version wird zentral gepflegt in:

src/data/version.ts

Beispiel:

export const APP_VERSION = '1.1.1';

Build-Prozess erzeugt automatisch:

- public/version.json
- public/sw.js (CACHE-Version)

Script:

npm run version:update

Wird automatisch durch den Build aufgerufen:

npm run build

Release-Ablauf:

1. APP_VERSION erhöhen
2. git add -A
3. git commit -m "vX.Y.Z"
4. git push
5. npm run deploy

Ziel:

Version existiert nur an einer Stelle und wird automatisch in alle benötigten Dateien übernommen.

## Projektregel

Vor größeren Änderungen:

- Architektur verstehen
- SNAP aktualisieren
- Änderung umsetzen
- SNAP aktualisieren
- Release

Ziel:

Wissensverlust zwischen Sessions minimieren.

SNAP dient als laufendes Projektgedächtnis.

## Wissensschleife

SNAP ist kein Archiv.

SNAP ist ein laufendes Projektgedächtnis.

Arbeitszyklus:

Verstehen
→ SNAP aktualisieren
→ Umsetzen
→ SNAP aktualisieren
→ Veröffentlichen

Ziel:

Kontextverlust zwischen Sessions reduzieren und Projektwissen kontinuierlich verdichten.
