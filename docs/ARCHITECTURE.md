# Droidex Architecture

20260622

## Milestone: Companion Layer
Companion v0

✓ getFutureUsage()
✓ getFutureUseCount()
✓ isLastUsage()
✓ getFutureUseCountForDroid()

□ getReadyReason()
□ getMissingDroids()
□ getRebirthStatus()
□ getCompanionExplanation()
##

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

Used by:

- Effective Present
- Rebirth
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
