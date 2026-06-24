.# IDEAS


20260624

## Debug / Diagnose

Ziel:

Logik direkt aus den Projektdaten prüfen,
ohne Browser-DevTools oder APK-Builds.

Mögliche Erweiterungen:

- TypeScript Debug-Skripte unter scripts/
- Companion-Funktionen direkt per CLI testen
- Rebirth-Pfade analysieren
- Droid-Nutzung auswerten
- Datenmodelle validieren
- Konsistenzprüfungen für Savegames

Beispiele:

npx tsx scripts/checkRebirth.ts

Langfristig:

Debug-Wissen möglichst aus denselben
Datenquellen ableiten wie die App selbst.

Termux → Diagnose
App → Status
Browser-DevTools → Ausnahmefall

20260622

## Companion

✓ getFutureUsage()
✓ getFutureUseCount()
✓ isLastUsage()

✓RebirthPage nutzt Companion
✓ RebirthPanel nutzt Companion
✓ Zukunftslogik aus UI entfernen

✓ getMissingDroids()
✓ getReadyReason()

## Rebirth

- Direktlink RebirthPanel → RebirthPage
- Rebirth-Filter auf benötigte Droiden

---

## TierDNA

Status:
Grundsystem implementiert.

Mögliche Erweiterungen:

- DNA-basierte Filter
- DNA Completion Statistiken
- TierDNA in Droid Details
- Companion-Erklärungen

---

## Flawless

Status:
Droid-Level Architektur validiert.

Mögliche Erweiterungen:

✓ 20260621 - Flawless Fortschritt (x / 51)

- Flawless Statistiken
- Flawless Collection View
- Fehlende Flawless-Droids

---

## Backup

- Backup-Versionierung
- Import-Migrationen
- Backup-Zeitstempel
- Import-Erfolgsbestätigung
- Erweiterbare Backup-Inhalte

---

## Companion

✓ Warum READY?
✓ Welche Droiden fehlen?
✓ Warum wird ein Droid benötigt?

□ Companion Explanation UI
□ Verkaufsentscheidung unterstützen
□ TierDNA erklären

Bewertet:

- Present
- Effective Present
- Rebirth
- Flawless
- TierDNA

---

## Droid Wissen

- Companion-Effekte
- Upgrade-Chip-Quellen
- Nova-System
- Squad-Boni

---

## Langfristig

Droid-Merkmalsmodell:

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

## UI

- DroidGrid mit kleinem Dreieck aus-/einblendbar
- Alke Droids als alle zustände markierbar. also quickedits für die Auswahl. erleichert db-verwaltung.
- Sorachlogik auch fur zuletzt erstellte Dateien.
- App Sriten per Slide wechseln
