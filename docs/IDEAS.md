# IDEAS

## Game

### Rebirth

- Direktlink RebirthPanel → RebirthPage
- Rebirth-Filter auf benötigte Droiden

### Droid Knowledge

- Companion-Effekte
- Upgrade-Chip-Quellen
- Nova-System
- Squad-Boni

### Droid Model

Langfristig:

- rarity
- tier
- source
- companionAbility
- rebirthUsage
- eventLocked
- novaCost
- flawless

Ziel:

Droiden als Wissensobjekte
statt reine Sammelobjekte.

---

## UI

### Workspace

- gemeinsamer Workspace
- einheitliche Panel-Header
- gemeinsame Panel-Komponente
- identische Animationen
- identische Pfeile
- nur äußere Ecken abrunden
- zentraler Open-State
- RebirthPanel vollständig integrieren

### Navigation

- App-Seiten per Slide wechseln

### DroidGrid

- Ein-/Ausblenden per Dreieck
- Quick-Edit für alle Zustände

### TierDNA

- DNA-basierte Filter
- DNA-Statistiken
- Droid-Details
- Companion-Erklärungen

### Flawless

- Flawless-Statistiken
- Flawless Collection
- Fehlende Flawless-Droids

### About

Verbesserte Projektbeschreibung
für Community und GitHub.

---

## Companion

Geplante Fähigkeiten:

- getSellAdvice()
- Companion Explanation UI
- TierDNA erklären

Langfristig:

Companion soll Empfehlungen
statt Status liefern.

---

## Developer

### State Layer

Weitere Hooks:

- useRebirthState()
- useCollectionState()
- useWorkspaceState()
- useAboutState()

Ziel:

Komponenten bestehen langfristig
fast ausschließlich aus Rendering.

### Debug

- TypeScript Debug-Skripte
- CLI-Tests
- Rebirth-Analyse
- Datenvalidierung
- Savegame-Prüfung

Beispiel:

npx tsx scripts/checkRebirth.ts

---

## Future

### Data-driven Updates

Neue Inhalte sollen überwiegend
über DATA-Dateien entstehen.

### Architecture

Neue Features werden zuerst
einer Domain zugeordnet,
erst danach implementiert.

### Weitere Module

- Nova Shop
- Hats
- Paints

---

## Performance

- virtualization
- lazy loading
- caching
- image optimization

---

## Research

### In-App Konsistenz

Rebirth- und Collection-Zustände
sollen sich niemals widersprechen.

Mögliche Lösung:

- Rebirth nur aktiv,
  wenn Droid gesammelt wurde.

- Aktivieren eines Rebirth-Droiden
  setzt Collection automatisch.

- Collection und Rebirth
  bleiben dauerhaft konsistent.
