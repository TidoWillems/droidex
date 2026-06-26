# Data Integration Gaps
Ich würde das für unser zukünftiges Datenmodell deshalb eher so ausdrücken:
BB-8
ability:
Upgrade Chips ×2
(applies to all Upgrade Chip rewards while equipped)
Das ist allgemeingültig und muss nicht angepasst werden, falls später weitere Chip-Quellen hinzukommen.
📌 Notiz für den Datenabgleich: Unsere momentane Tip-Karte zu BB-8 und die bisherige Interpretation der Fähigkeit sollten entsprechend aktualisiert werden. Das ist eine echte Wissensverbesserung gegenüber dem bisherigen Datenbestand.

Rebirthdaten lmax level enden angleichen.

## Seite 2 – Default Rebirth Path

✓ Anforderungen vollständig vorhanden.

Neu:

- Worker Slot Unlock
- Astromech Slot Unlock
- Battle Slot Unlock
- Lounge Slot Unlock

→ als Feld "unlock" in den Rebirth-Datenmodell übernehmen.
## 
Spieldaten
│
├── droids.ts
├── droidInfo.ts
├── droidStats.json
├── rebirth*.ts
└── nova*.ts   (zukünftig)

↓

UI

↓

useTracker
(Speichert NUR Benutzerfortschritt)

↓

Companion
(Liest Daten, besitzt sie aber nicht.)

## Nova Shop
Status: später
Grund: Bestandteil des Nova-Systems.

## Hats
Status: übernehmen
Grund: Sammelziel für Spieler.

## Paints
Status: übernehmen
Grund: Teil des Fortschritts.

## Flawless Chance
Status: nicht übernehmen
Grund: Keine verlässlichen Werte bekannt.
