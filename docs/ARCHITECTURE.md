## Responsibilities

### DOMAIN-FLOW

# Droidex Architecture

DATA
↓
RULES
↓
FACTS
↓
STATE
↓
UI
↓
COMPANION

### DATA

Stores immutable game knowledge.

Examples:

- droids.ts
- droidStats.json
- droidInfo.ts
- rebirthPaths.ts

---

### RULES

Contains gameplay logic.

Examples:

- droidHierarchy.ts
- filterRules.ts

---

### FACTS

Combines data, rules and player progress.

Examples:

- droidFacts.ts
- rebirthFacts.ts

---

### STATE

Connects FACTS with React.

Examples:

- useDroidCardState()
- useDroidGridState()

---

### UI

Renders state.

Contains no gameplay logic.

---

### COMPANION

Interprets facts.

Explains, predicts and recommends.
COMPANION
