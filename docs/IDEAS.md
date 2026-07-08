# IDEAS

## State Layer

Weitere Kandidaten:

- useRebirthState()
- useCollectionState()
- useWorkspaceState()
- useAboutState()

Ziel:

Komponenten bestehen langfristig
fast ausschließlich aus Rendering.

## Workspace Refactoring

Status:
In Vorbereitung

Ziele:

- gemeinsamer Workspace
- einheitliche Panel-Header
- gemeinsame Panel-Komponente
- identische Animationen
- identische Pfeile
- nur äußere Ecken abrunden
- zentraler Open-State
- RebirthPanel vollständig integrieren

## Architecture v2

Future features should first be
assigned to a domain before
implementation begins.

## In App Logik

- Konsistenz herstellen, wenn aus vers3hen die rebirthanforderungen als geg3b geklickt wurden obwohl ein droid nicht collected ist, erscheint momentan nich der Rebirth als volkziehbar. Also rebirthready kann nicht klickbar sein, wenn der droid nicht collected ist. umgekehrt genauso: wenn der user die rebirthanforderungen als gegeben sieht und er das mit klick auf das rebirth badge bestätigt müssen alle dazugehorigen droids als collected gesetzt werden und ebenfalls die rebirthanforderungen alle auf gegeben gesetzt wersen.

## Companion v1

✓ getMissingDroids()
✓ getReadyReason()
✓ getReadyExplanation()
✓ getRequirementExplanation()
✓ Remaining Requirement Counter
✓ LAST = letzter tatsächlicher Einsatz

□ getSellAdvice()
□ getCompanionExplanation()
□ Companion Explanation UI

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
- Alle Droids als alle zustände markierbar. also quickedits für die Auswahl. erleichert db-verwaltung.
- Sorachlogik auch fur zuletzt erstellte Dateien.
- App Seiten per Slide wechseln
- App-Info/Erklärung/meta :
  About Droidex

Droidex is an unofficial fan-made companion app for Star Wars Fortnite: Droid Tycoon.

Its purpose is simple: to help players understand the game's droids, keep track of their collection, explore droid abilities and perks, and make long-term progression decisions such as Rebirth planning easier.

Droidex is not affiliated with, endorsed by, or sponsored by Epic Games, Lucasfilm, Disney, or any other rights holder.

The app is designed to be local-first:

- Your collection data is stored locally in your browser.
- No account is required.
- No analytics, advertising, or tracking.
- No telemetry or usage reporting.
- No automatic collection of device data.
- No automatic uploads of your progress.

The app is hosted publicly on GitHub Pages:

https://tidowillems.github.io/droidex/

The shortcut link "tinyurl.com/droidex-app" simply redirects to this address.

Droidex can be installed as a Progressive Web App (PWA), but installation is entirely optional and always requires your browser's confirmation.

This project exists solely to help the community better understand the game, manage collections more easily, compare droids, and plan progression strategies such as Rebirth more effectively.
