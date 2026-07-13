## Droidex LAB NOTES

## Purpose

LAB_NOTES dokumentiert Erkenntnisse,
Experimente und Architektur-Entdeckungen.

Hier wird festgehalten,
warum sich Droidex verändert hat.

Nicht jeder Versuch wird übernommen.
Nicht jede Idee wird umgesetzt.
Gerade deshalb bleiben diese Notizen erhalten.

LAB_NOTES dokumentiert keine Entscheidungen.

Nur Erkenntnisse.

Entscheidungen gehören nach DECISIONS.

# 1. Architecture Discoveries

### Filter Extraction - 20260705

Die erste vollständige UI-Logik wurde erfolgreich
aus einer React-Komponente extrahiert.

getVisibleCards() bildet den ersten Schritt
zu einer eigenständigen Domain für Ansichten.

Dadurch entwickelte sich DroidGrid von

UI + Regeln

zu

UI + Rendering.

Dieses Muster soll zukünftig auch für

- Rebirth Facts
- View Models
- Workspace

verwendet werden.

## Workspace Architecture

Die Hauptoberfläche besteht nicht aus
mehreren unabhängigen Komponenten.

Sie bildet einen gemeinsamen Workspace.

Navigation

Header
→ Rebirth Path
→ Tier Tabs

Workspace

Filter
→ Collection
→ Rebirth

Panels entwickeln sich zu
wiederverwendbaren UI-Bausteinen.

Ziel:

Eine gemeinsame Panel-Architektur
statt mehrerer Einzelkomponenten.

Interaction
→ vereinheitlichen

Appearance
→ vereinheitlichen

State
→ zentralisieren

UI Architecture Discovery

The architecture continues to evolve along two independent but complementary axes.

Domain Architecture

Organizes knowledge.

Game World
→ Domain Rules
→ User Progress
→ Companion

UI Architecture

Organizes interaction.

Layout
→ Panel
→ Card
→ Detail

Both architectures emerged from the same observation:

Repeated patterns should become first-class building blocks.

Just as Companion centralizes interpretation instead of duplicating gameplay logic, Panel centralizes interaction instead of duplicating UI behavior.

The same design principle therefore applies on both levels:

Knowledge
→ centralize

Interaction
→ centralize

The result is not only less code duplication.

It creates a common language.

Instead of thinking about individual pages, Droidex gradually evolves into a system composed of reusable domains and reusable interface components.

The UI begins to mirror the architectural principles of the underlying application.

### Architecture Discovery

The architecture was not designed first.

It emerged from repeated extraction
of domain knowledge out of the UI.

Questions gradually replaced pages
as the organizing principle.

The project moved from

UI
→ Data
→ Domains.

The Companion became an
interpretation domain instead
of a collection of helper functions.

# 2. Companion Discoveries

### Companion

Die mathematisch korrekte Antwort
ist nicht immer die hilfreichste.

Spieler treffen Entscheidungen
anhand der angezeigten Information.

LAST darf deshalb erst erscheinen,
wenn der aktuelle Einsatz
wirklich der letzte Einsatz
dieses Droiden ist.

Die Anzeige beschreibt nun
die verbleibenden Einsätze
einschließlich des aktuellen Rebirths.

Dadurch unterstützt Companion
Verkaufsentscheidungen,
statt lediglich Daten zu zählen.

✓ getReadyExplanation()

noch keine UI

### Companion + Hierarchy

Companion erzeugt nicht nur Antworten.

Companion erzeugt Antworten
aus anderen Companion-Erkenntnissen.

Companion wurde erstmals als eigenes
System in der AboutPage sichtbar gemacht.

Der Companion entwickelte sich von
einer Hilfsfunktionssammlung zu einer
Interpretationsschicht mit eigener Roadmap.

Companion darf Besitzzustände nicht
direkt gegen present prüfen.

Gameplay-Relevanz basiert auf
Effective Present.

getMissingDroids()
und getReadyReason()
verwenden daher hasEffectiveCard().

Dadurch bleiben Companion,
RebirthPage und Droid Hierarchy
konsistent.

20260622

## Companion Verdichtung

Rebirth-Zukunftslogik wurde aus der UI
in companion.ts verschoben.

Die RebirthPage zeigt Zukunftsinformationen,
berechnet sie jedoch nicht mehr selbst.

Companion entwickelt sich damit von einer
Hilfsfunktionensammlung zu einer zentralen
Interpretationsschicht.

## Companion

Neue Funktionen werden zuerst als
Interpretation gebaut und danach
in bestehende UIs integriert.

Ziel:

Wissen zentralisieren,
UI vereinfachen.

## Erkenntnisse

Neue Architektur-Ebene

✓ useDroidCardState
✓ useDroidGridState

View-State wird schrittweise
aus den Komponenten extrahiert.

Pattern

DATA
↓

RULES
↓

FACTS
↓

STATE
↓

UI

Architektur-Erkenntnis
Gerade passiert etwas, das sehr gut zu euren LAB_NOTES passt:
Vorher:
Rebirth berechnet Rebirth-Wissen
RebirthPage berechnet Rebirth-Wissen
DroidCard berechnet Rebirth-Wissen
Nach Companion:
Companion berechnet Wissen

RebirthPanel zeigt Wissen
RebirthPage zeigt Wissen
DroidCard zeigt Wissen
Das ist exakt die Entkopplung, die ihr bei TierDNA schon erreicht habt.

## Companion Layer

companion.ts eingeführt.

Zweck:

Nicht neue Daten speichern,
sondern bestehende Systeme erklären.

Companion bildet eine Interpretationsschicht über:

- Rebirth
- Present
- Flawless
- TierDNA
- Droid Hierarchy

Geplante Funktionen:

- getReadyReason()
- getMissingDroids()
- getFutureUsage()

Ziel:

Aus Zuständen Antworten ableiten.

# 3. UI Discoveries

### AboutPage

Die AboutPage entwickelte sich von einer
Informationsseite zu einer Statusseite.

Systeme, Daten und aktueller Zustand
erwiesen sich als wertvoller
als reine Projektbeschreibung.

Nutzer suchen primär Orientierung
über den aktuellen Stand des Systems.

### TierDNA

Ein Droid wird mental als Entwicklungslinie wahrgenommen.

D G D R B

Verdichtete Darstellung
schlägt generischen Fortschrittsbalken.

### Rebirth UX

Statusanzeigen dürfen zugleich Aktionen sein.

READY
✓
x/y

statt zusätzlicher Buttons.

### Header Verdichtung

Informationsdichte kann erhöht werden,
solange die visuelle Struktur erhalten bleibt.

### Backup-System

- Export/Import basiert auf vollständigem droidex_v2 State.
- Keine Feld-selektiven Exporte.
- Nutzerrelevante Fortschritte werden automatisch mitgesichert.
- UI kommuniziert gesicherte Bereiche als Statusliste.
- Zukünftige Erweiterungen über backupVersion möglich.

# 4. Architecture Patterns

Neue Architektur-Ebene

DATA
↓

RULES
↓

FACTS
↓

STATE
↓

UI

# 5. Systems

Backup-System

# 6. Documentation

### SNAP Entkopplung

SNAP
= aktueller Zustand

LAB_NOTES
= Forschung

CHANGELOG
= Historie

# 7. Open Questions

Noch offene Architekturfragen.

Beispiele:

- Wann entsteht eine neue FACTS-Datei?
- Welche Aufgaben gehören langfristig in Companion?
- Wie entwickelt sich die STATE-Schicht?
