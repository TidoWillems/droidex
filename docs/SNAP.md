# Droidex SNAP

## 2026-07

### Architecture Refactor

Architecture

- DATA → RULES → FACTS → STATE → UI → COMPANION
- Domain responsibilities clarified
- UI simplified through extraction

New modules

- droidHierarchy.ts
- filterRules.ts
- droidFacts.ts
- rebirthFacts.ts
- useDroidCardState()
- useDroidGridState()

Result

- DroidGrid contains no gameplay logic.
- DroidCard focuses on rendering.
- Facts are reusable across UI and Companion.
- View state is separated from domain logic.

Next

- Continue moving gameplay logic into FACTS.
- Keep React components focused on rendering.
- Expand Companion through reusable domain knowledge.

### zukunftiges Muster sieser SNAP:

## 2026-08

Changed

Neue oder überarbeitete Module.

Added

Neue Funktionen oder Systeme.

Result

Welche Auswirkungen das auf die Architektur oder das Verhalten hat.

Next

Der nächste logische Entwicklungsschritt.
