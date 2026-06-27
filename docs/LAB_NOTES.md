# LAB NOTES

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

20260624

v1.5.5

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

---

### Rebirth UX

Statusanzeigen dürfen zugleich Aktionen sein.

READY
✓
x/y

statt zusätzlicher Buttons.

---

### Header Verdichtung

Informationsdichte kann erhöht werden,
solange die visuelle Struktur erhalten bleibt.

---

### Backup-System

- Export/Import basiert auf vollständigem droidex_v2 State.
- Keine Feld-selektiven Exporte.
- Nutzerrelevante Fortschritte werden automatisch mitgesichert.
- UI kommuniziert gesicherte Bereiche als Statusliste.
- Zukünftige Erweiterungen über backupVersion möglich.

### SNAP Entkopplung

SNAP
= aktueller Zustand

LAB_NOTES
= Forschung

CHANGELOG
= Historie
