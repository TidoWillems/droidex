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
- Offline-first reduziert Systemkomplexität deutlich
- Lokale Persistenz reicht für viele Companion-Apps vollständig aus

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

## Erkenntnisse (v1.1.5)

PWA Update Detection verbessert.

Vorher:

- version.json nur beim App-Start geprüft

Jetzt:

- App-Start prüft Version
- visibilitychange prüft Version beim Zurückkehren zur App

Ergebnis:
Installierte PWAs erkennen neue Releases ohne manuellen Reload deutlich schneller.

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

## Erkenntnisse (v1.1.7)

### Header Verdichtung

- Dashboard gap von 3 auf 1 reduziert
- Progressbar von h-4 auf h-3 reduziert
- Logo auf 88px vergrößert
- Transparenter Logo-Hintergrund verwendet
- Kompakter Glow statt großflächiger Lichtwolke

Ergebnis:

- Dashboard und Progressbar wirken als zusammenhängende Einheit
- Logo übernimmt die visuelle Mitte deutlicher
- Weniger vertikaler Platzbedarf
- Höhere Informationsdichte ohne schlechtere Lesbarkeit

- Header weiter verdichtet:
  - größeres Logo
  - schmalerer Progress-Balken
  - reduzierter Abstand Dashboard ↔ Progress

- Footer als Navigationszentrum ausgebaut:
  - ausklappbare Credits
  - ausklappbarer Fanprojekt-Hinweis
  - Community-Link zur Epic-Droid-Tycoon-Community

- Navigation kann zunehmend über Module und Aufklappbereiche organisiert werden statt über neue Seiten.

## Identität (v1.1.9)

- Community-Bereich vollständig in ui.ts integriert
- Mehrsprachigkeit auf About-, Footer- und Tips-Seiten vereinheitlicht
- OG-Image als Social Preview eingeführt
- OG-Image zusätzlich als visueller Abschluss der AboutPage verwendet

Erkenntnis:

- Projektgrafiken können zugleich Branding, Social Preview und In-App-Inhalt sein.
- Die AboutPage endet stärker mit einer visuellen Zusammenfassung des Projekts statt mit reinem Text.

## Erkenntnisse (v1.1.10)

### Droid Asset Recovery

- Screenshot-Cropping Pipeline erfolgreich zur Rekonstruktion fehlender Droid-Assets genutzt.
- Community-Projekte können als zusätzliche Asset-Quelle dienen.
- Upstream-Projekte sollten bevorzugt mit neuen Screenshots versorgt werden statt lokale Asset-Forks dauerhaft zu pflegen.
- Beskar-Droiden vollständig dokumentiert und an das Upstream-Projekt gemeldet.
- extract_thumbnails.py bleibt als Fallback- und Rekonstruktionswerkzeug erhalten.

- TipsPage von Community-Funden zu kuratiertem Spielwissen weiterentwickelt.
- Doppelte Discovery- und Rebirth-Tipps zusammengeführt.
- Patchnote-Wissen als verifizierte TipCards integriert.
- OG-Coverbild als visueller Abschluss der AboutPage ergänzt.
- AboutPage wirkt dadurch weniger technisch und stärker als Projektpräsentation.

## Erkenntnisse (v1.1.11)

v1.1.11 markiert den Übergang von festen Listen
zu mehrdimensionalen Beziehungen.

- Super-Rebirth-Erkundung (v1.1.11) - Neuer Progressionspfad oberhalb des
  klassischen Rebirth-Systems entdeckt. - Nova-Kristalle als neue Meta-Währung. -
  Nova-Shop mit permanenten Upgrades. - Iconic Droids ermöglichen offenbar
  Wiederbeschaffung ehemaliger Event-Droids. - Vollständiger Tycoon-Reset bei Super
  Rebirth. Droidex Sammelstaus bleibt erhalten.- Datenbasis wird aktuell über
  Screenshots dokumentiert. - Noch keine Architekturentscheidung treffen, bevor
  mehrere Super-Rebirth-Stufen bekannt sind.

- Erkenntnis:

Droiden besitzen zunehmend mehrere unabhängige Dimensionen:

- Tier
- Klasse
- Rebirth-Verwendung
- Super-Rebirth-Verwendung
- Event/Iconic-Herkunft
- Squad-Rolle

Die Datenstruktur sollte langfristig eher auf Merkmale
(tags/relations) als auf einzelne Spezialfelder wachsen.

(- Spiel verwendet nun vier rotierende Requirement-Pfade.

- Originalpfad entspricht Requirement Set 1.
- Requirement Sets 2–4 enthalten alternative Droid-Anforderungen.
- Rebirth-Datenmodell muss künftig Pfad + Level unterscheiden.
- Bisherige Droidex-Rebirth-Architektur basiert auf einem einzelnen Pfad.
- Super-Level/Nova-System deutet auf zusätzliche Meta-Progression oberhalb klassischer Rebirths hin.)

## Erkenntnisse (v1.1.11)

### Rebirth Path System

- Rebirth-Pfade 1–4 vollständig integriert.
- REBIRTH_PATHS dient als zentrale Mapping-Schicht.
- RebirthPanel, RebirthsPage und DroidGrid nutzen denselben aktiven Pfad.
- DroidCard-Rebirth-Badges werden dynamisch aus dem aktiven Pfad berechnet.
- Rebirth-Pfad wird lokal gespeichert und beim App-Start wiederhergestellt.

Erkenntnis:

- Mehrere Progressionspfade konnten ohne Änderung der DroidCard-Struktur integriert werden.
- Die Mapping-Schicht zwischen Daten und UI erwies sich als flexibel genug für alternative Requirement-Sets.

### Header Navigation State

- FEHLEND ist kein eigener Router-Zustand, sondern ein Filterzustand.
- Beim Verlassen der Hauptseite werden sammlungsbezogene Filter zurückgesetzt.
- Header-Buttons dürfen ihren aktiven Zustand nicht über Seitenwechsel hinweg behalten.
- useLocation + useEffect eignen sich als zentrale Stelle für Navigation-Cleanup.

Ergebnis:

- FEHLEND verhält sich wie eine temporäre Ansicht.
- Zurückkehren auf die Hauptseite startet wieder mit neutralem Zustand.
- Weniger UI-Verwirrung durch "hängengebliebene" Filter.

## Erkenntnisse (v1.1.11)

### Community Navigation

- Community-Link auf Epic-Labs-Einstiegsebene angehoben.
- Nutzer sehen dadurch:
  - aktuelle Updates
  - Community Highlights
  - Entwickler-Mitteilungen
  - direkten Zugang zum Droid-Tycoon-Kanal

Erkenntnis:

- Der beste Community-Link ist nicht immer der tiefste Link.
- Einstiegspunkte mit Kontext erzeugen mehr Orientierung als direkte Zielseiten.

#################

Erkenntnisse (v1.2.0)

Multi-Path Rebirth System

- Vier Rebirth-Pfade integriert (RB1–RB4)
- Aktiver Pfad global steuerbar
- Pfadwechsel direkt über die RB1–RB4 Buttons
- Rebirth-Pfad wird lokal gespeichert und beim App-Start wiederhergestellt
- RebirthPanel, RebirthsPage und DroidGrid nutzen denselben aktiven Pfad
- DroidCard-Badges reagieren dynamisch auf den gewählten Pfad

Erkenntnisse:

- Rebirth besteht nun aus zwei Dimensionen:
  - Rebirth Path
  - Rebirth Level

- Beide Zustände müssen gemeinsam betrachtet werden.

- Neue Progressionssysteme lassen sich über Datenlayer und Mapping-Schichten integrieren, ohne neue UI-Systeme einzuführen.

## Release v1.2.1

### Rebirth Path Persistence

- Rebirth-Pfad wird lokal gespeichert
- Automatische Migration von droidex_v1 nach droidex_v2
- Bestehende Sammlungen werden übernommen

### Rebirth Path Guide

- Neuer APP-GUIDE-Eintrag für RB1–RB4
- Erklärt die vier bekannten Requirement-Pfade

Erkenntnis:

Neue Systemzustände benötigen nicht zwingend neue UI.
Oft genügt ein kleiner Orientierungshinweis an der richtigen Stelle.

## Erkenntnisse (v1.2.2)

### Asset Synchronisation

- Aktualisierte Droid-Bilder aus Upstream übernommen.
- Dateinamen bleiben mit Upstream kompatibel.
- Historische Alias-Assets (WLKR / STRK) wurden entfernt.

Erkenntnis:

- Verbesserte Assets lassen sich unabhängig von App-Logik übernehmen.
- Upstream bleibt wertvolle Quelle für Bildmaterial und Datenkorrekturen.

## Erkenntnisse (v1.2.x)

Sammlung und Verfügbarkeit sind unterschiedliche Zustände.

- gesammelt = Droid wurde mindestens einmal freigeschaltet/gebaut
- anwesend = Droid existiert aktuell im Tycoon

Rebirth-Anforderungen sollten auf Verfügbarkeit
statt auf Sammlung basieren.

Squads und Lounge können als Quellen der
Droid-Verfügbarkeit betrachtet werden.

20260615 DroidCards
✓ Zweiter Status eingeführt
✓ Persistenz funktioniert
✓ Mobile UI funktioniert
✓ Markerposition funktioniert
✓ Keine Debug-Hardcodes mehr

## Erkenntnisse (v1.2.x)

### Besitz vs Verfügbarkeit

Droiden besitzen mindestens zwei unabhängige Zustände:

- collected = jemals besessen
- present = aktuell verfügbar

Daraus entstehen drei relevante Sammlungszustände:

- aktuell vorhanden
- historisch vorhanden
- nie besessen

Rebirth-Anforderungen beziehen sich auf Verfügbarkeit,
nicht auf historischen Besitz.

Historischer Besitz bleibt jedoch strategisch relevant,
weil verkaufte Droiden in späteren Rebirth-Stufen erneut
benötigt werden können.

Erkenntnis:

Die gleiche Datenbasis kann gleichzeitig
Sammlung, Verfügbarkeit und Rebirth-Planung abbilden.

Rebirth-Relevanz ist nicht identisch mit Sammlung.

Wichtiger Zustand:

required + collected + not present

= potentieller zukünftiger Rebuild-Kandidat.

Rebirth-Anforderungen sind keine Ereignisse eines einzelnen Levels, sondern eine Eigenschaft des verbleibenden Progressionspfades. Deshalb basiert die Verkaufsentscheidung auf zukünftiger Verwendung und nicht auf dem nächsten Rebirth-Level.

## Erkenntnisse (v1.2.3)

### Rebirth-Nutzung als verbleibender Pfad

Rebirth-Relevanz ist keine Eigenschaft eines Droids,
sondern eine Eigenschaft seiner zukünftigen Verwendung
innerhalb eines gewählten Rebirth-Pfades.

Daraus ergeben sich zwei strategische Zustände:

LAST
= letzter bekannter Einsatz im aktuellen Pfad

↻N
= Droid wird noch N-mal benötigt

Die für Spieler relevante Frage lautet nicht:

"Wird dieser Droid irgendwann benötigt?"

sondern:

"Kann ich ihn jetzt verkaufen oder brauche ich ihn später erneut?"

Erkenntnis:

Zukunftsrelevanz lässt sich oft verständlicher darstellen
als verbleibende Nutzung statt als absolute Nutzungshäufigkeit.

##################

v1.3.0
Zukunftsorientierte Rebirth-Planung

## Erkenntnisse (v1.3.x)

### Droid Progression

Droiden besitzen mindestens zwei unabhängige Progressionsachsen:

- Tier
  Standard → Gold → Diamond → Rainbow → Beskar

- Seltenheit
  Common → Rare → Epic → Legendary

Rebirth-Anforderungen scheinen Mindest-Tiers
zu prüfen.

Ein höheres Tier erfüllt weiterhin die
Anforderung niedrigerer Tier-Stufen.

Beispiel:

Gold erforderlich
→ Diamond, Rainbow und Beskar sind ebenfalls gültig.

--DROIDEX SNAP

Nächste Ausbaustufe:

- DroidCard vertikal erweitern
- Rebirth-Ready-Indikator neu positionieren
- Flawless-Tracking ergänzen
- optionale Metadaten vorbereiten:
  source
  ability
  eventLocked
  novaCost

Ziel:
Vom reinen Sammler-Tracker
zum Droid-Wissenssystem.

### Upgrade Chips

Bekannte Quellen:

- World Quests
- Droid-Fertigstellungen
- Verkauf selbst gebauter Gold+ Droids
- Companion-Boni

Upgrade Chips bilden ein eigenes
Meta-Progressionssystem oberhalb
des normalen Droid-Baus.

### Companion-Boni

Droids besitzen teilweise einzigartige
Begleiter-Effekte.

Beispiele:

- BB-8 → Upgrade Chips
- DJ R-3X → 2x World Quest Rewards
- Mister Bones → 2x Schaden
- IG-11 Marshal → Blaupausenschild

Erkenntnis:

Der strategische Wert eines Droids ergibt sich
nicht nur aus Rebirth-Anforderungen,
sondern auch aus Companion-Effekten
und Upgrade-Synergien.

## Erkenntnisse (v1.3.x)

### Rebirth-Verfügbarkeit auf DroidCards

Die Rebirth-Anzeige wurde von einer getrennten Darstellung
zu einer gemeinsamen Statusanzeige zusammengeführt.

Vorher:

EPIC ●
↻ 7·10·12

Jetzt:

EPIC
● ↻ 7·10·12

Bedeutung:

- ↻ zeigt zukünftige Rebirth-Verwendungen im aktiven Pfad
- ● zeigt die aktuelle Verfügbarkeit des Droids
- Grün = verfügbar
- Grau = nicht verfügbar

Erkenntnis:

Verfügbarkeit ist nur im Kontext einer Anforderung relevant.

Ein separater "Present"-Marker erzeugt zusätzlichen
Interpretationsaufwand.

Die Zusammenführung von Verfügbarkeit und Rebirth-Nutzung
reduziert visuelle Unruhe und macht den Status direkt lesbar.

Der Nutzer liest nun unmittelbar:

● ↻ 7·10·12

statt zwei unabhängige UI-Elemente gedanklich
miteinander verknüpfen zu müssen.

## Erkenntnisse (v1.3.0)

### Rebirth Badge Verdichtung

Rebirth-Relevanz, Verfügbarkeit und Verkaufsrelevanz
wurden zu einer gemeinsamen UI-Einheit verdichtet.

Beispiele:

● ↻ 3·5·8
○ ↻ 3·5·8
● ↻ 1 ✓

Bedeutung:

- Punkt = aktuell vorhanden
- ↻ = zukünftige Rebirth-Verwendungen
- ✓ = letzter bekannter Einsatz im aktiven Pfad

Das frühere SAFE-Badge wurde entfernt.

Erkenntnis:

Zusammengehörige Entscheidungsinformationen
sollten innerhalb derselben visuellen Einheit erscheinen.

Der Nutzer interessiert sich nicht für einzelne Zustände,
sondern für die Frage:

"Brauche ich diesen Droid noch?"

## Erkenntnisse (v1.3.1)

### Iconic Droids

Die Einführung von CB-23 bestätigt,
dass Iconic Droids als eigenständige
Sammlungskategorie behandelt werden sollten.

Companion-Effekte, Nova-Shop-Verfügbarkeit
und Event-Herkunft sind voneinander unabhängige
Merkmale.

Erkenntnis:

Droiden entwickeln sich zunehmend
von einfachen Sammelobjekten
zu Wissensobjekten mit mehreren
unabhängigen Eigenschaften.

## Erkenntnisse (v1.3.2)

### Collected Marker Recovery

- Historischer Collected-Haken wurde versehentlich bei UI-Refactoring entfernt.
- Git-Historie erlaubte exakte Rekonstruktion der ursprünglichen Implementierung.
- Collected und Present repräsentieren unterschiedliche Zustände und benötigen getrennte Visualisierung.

Erkenntnis:

UI-Verdichtung darf unterschiedliche Bedeutungen nicht unbeabsichtigt verschmelzen.

Collected = jemals besessen
Present = aktuell verfügbar

Beide Zustände bleiben strategisch relevant.

## v1.3.3
- Restored Collected status marker
- Updated status indicator guide
- Added CB-23 knowledge entry
- Documentation cleanup


##################
##################

## Ideen (Backlog)

### Sammlung

- Mark All
  - komplette Sammlung als vorhanden markieren
  - hilfreich bei Gerätewechsel
  - hilfreich nach verlorenem localStorage

- Clear Collection
  - Sammlung komplett zurücksetzen

- Export / Import
  - JSON Export
  - JSON Import
  - langfristig robuster als Mark All

  - Mark All könnte später durch Export/Import ersetzt werden.

### Iconic Droids

- source = Nova Shop
- novaCost dokumentieren
- availabilityDate dokumentieren
- "Coming Soon" statt "Secret"

### Droid Wissen

- Companion-Effekte erweitern
- Upgrade-Chip-Quellen dokumentieren
- Nova-System dokumentieren
- Squad-Boni erfassen

### UI

- Rebirth-Ready-Indikator weiter beobachten
- Card-Höhe eventuell leicht erhöhen
- Companion-Badges vereinheitlichen

### Langfristig

- Droid-Merkmalsmodell:
  - rarity
  - tier
  - source
  - companionAbility
  - rebirthUsage
  - eventLocked
  - novaCost
  - flawless

#### UI polish ?: ja / nein

Feedback:
Ein Nutzer fragte nach der Bedeutung von RB1–RB4.
Aktuell keine Änderung nötig.
Weiter beobachten, ob die Frage mehrfach auftaucht.


##################
##################
##################

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

## Projekt zippen -kann zur Kontextbildung /-aufrechterhaltung beitragen

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

Erkenntnisse zur Pielmechanik werden fortan mit erfasst.
