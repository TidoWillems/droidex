# Droidex Architecture

## 20260626

## Rule Layer

Zwischen Daten und Companion entsteht eine eigene
Regelschicht.

DATA
→ beschreibt Objekte.

RULES
→ beschreiben Gameplay-Regeln.

COMPANION
→ interpretiert die Regeln.

UI
→ stellt Ergebnisse dar.

Aktuelle Rule-Module:

- Droid Hierarchy
  - hasEffectiveCard()
  - getHighestOwnedTier()
  - getDroidProgress()
  - getDroidProgressPercent()

Zukünftige Rule-Module:

- Rebirth Rules
- Event Rules
- Companion Ability Rules
- Upgrade Chip Rules
- Nova Rules
- Mission Rules

Companion soll Regeln nicht besitzen,
sondern Antworten aus Rule-Modulen ableiten.

v1.5.8

Companion unterscheidet jetzt zwischen

- zukünftigen Einsätzen
- verbleibenden Einsätzen

Die Rebirth-UI zeigt bewusst die
verbleibenden Einsätze inklusive
des aktuellen Rebirths an.

Dadurch entspricht LAST dem
tatsächlich letzten Einsatz
eines Droiden.

## 20260624

v1.5.3
Companion erzeugt Analysen.

v1.5.4
Companion erzeugt Erklärungen.

v1.5.5
Companion-Wissen wird erstmals in der UI sichtbar.

v1.5.6
Companion trennt Status und Erklärung.

Dadurch entstehen zwei unabhängige Ebenen:

Status
→ READY
→ 1 FEHLT
→ 2 FEHLEN

Erklärung
→ Alle Anforderungen erfüllt
→ STRIKE-ORB fehlt
→ BB9
→ CYCLO-GRAV

20260622

## Companion Erkenntnis

Companion entwickelt sich nicht entlang von Datenstrukturen,
sondern entlang von Fragen.

Frühe Companion-Funktionen beantworten:

- vorhanden?
- wie viele?
- benötigt?

Spätere Companion-Funktionen beantworten:

- warum?
- bis wann?
- weshalb fehlt etwas?
- welche Bedeutung hat dieser Zustand?

Dadurch verschiebt sich Companion von einer
Regel- und Berechnungsschicht zu einer
Interpretationsschicht.

Muster:

Zustand
→ Analyse
→ Erklärung
→ Bedeutung

Beispiele:

present
→ hasEffectiveCard()
→ getMissingDroids()
→ getReadyReason()
→ getReadyExplanation()

REBIRTH_PATHS
→ getRequirementExplanation()
→ getFutureUsage()

Companion berechnet nicht nur Wissen.

Companion erzeugt Bedeutung aus Wissen.

Die UI fragt.
Companion antwortet.

## Milestone: Companion Layer

Companion v0

✓ getFutureUsage()
✓ getFutureUseCount()
✓ isLastUsage()
✓ getFutureUseCountForDroid()
✓ getMissingDroids()

✓ DroidCard nutzt Companion
✓ RebirthPage nutzt Companion

✓ getReadyExplanation()
✓ getRequirementExplanation()
✓ getReadyReason()
□ getRebirthStatus()
□ getCompanionExplanation()

##

    20260624
    - Companion darf Besitzzustände nicht
    - direkt gegen present prüfen.

Gameplay-Relevanz basiert auf
Effective Present.

Companion muss nicht vollständig sein,
um Architekturwert zu liefern.

Bereits das Verschieben einzelner
Berechnungen aus der UI erzeugt
Wiederverwendbarkeit.

Companion benötigt
rebirth-unabhängige Eingaben.

Wenn Wissen nur innerhalb einer UI berechnet wird,
kann Companion es nicht wiederverwenden.

Ziel:
Companion erhält Rohdaten,
nicht UI-Zwischenergebnisse.

## Data Layers

### Flawless

Validierung ergab:

Fortnite zählt Flawless pro Droid,
nicht pro Kartenvariante.

### Droid Layer

Stored per droid name.

Examples:

- Flawless
- DNA Progress
- Companion Abilities
- Event Metadata

### Card Layer

Stored per card id.

Examples:

- Collected
- Present
- Tier Ownership

---

## Hierarchy Layer

DEFAULT
→ GOLD
→ DIAMOND
→ RAINBOW
→ BESKAR

Rules:

Higher tiers satisfy lower tiers.

Only hasEffectiveCard()
may evaluate ownership
for gameplay requirements.

Used by:

- Effective Present
- Rebirth
- Companion
- TierDNA
- Progress Calculation

---

## Derived States

Collected
= historically owned

Present
= currently available

Effective Present
= satisfied through hierarchy

Rebirth uses Effective Present.

---

## Persistence Layer

localStorage

droidex_v2
droidex_v2_backup

Stored:

- collected[]
- present[]
- flawless[]
- rebirthLevel
- rebirthPath

Migration:

v1 → v2 automatic

---
