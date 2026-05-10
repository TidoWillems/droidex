# DROIDEX

A web-based tracker for the **Fortnite Star Wars Droid Tycoon** game mode. Track which droids you've collected across all tiers, and plan your next rebirth.

## Features

- **Droid grid** — all 202 known droids across DEFAULT / GOLD / DIAMOND / RAINBOW tiers
- **Rarity filter** — filter by COMMON, RARE, EPIC, LEGENDARY, or MYTHIC
- **Click to collect** — toggle droids as collected; cyan glow marks what you own
- **Rebirth tracker** — shows credit cost and required droids for each rebirth level (0→20); highlights missing droids in the grid on hover
- **Persistent state** — progress saves to localStorage; survives page refresh

## Data

Droid list and rebirth requirements sourced from the community spreadsheet:
<https://docs.google.com/spreadsheets/d/1otLCKSCMKICMlnefirQ8KZhh_rdZTd5Mp8h0UYFUiqg>

> The in-game DROIDEX shows 209 total droids. 202 are currently documented in the spreadsheet; 7 may be unreleased or undocumented.

## Getting Started

```bash
npm install
npm run dev
```

Open <http://localhost:5173>

## Adding Droid Images

Droid cards currently use styled placeholders (type-shaped icons with initials). To add real images, drop a PNG into `public/droids/` named after the droid ID:

```
public/droids/MOUSE_DEFAULT.png
public/droids/R2_RAINBOW.png
```

Then update `DroidCard.tsx` to render an `<img>` when the file exists.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS v3
- localStorage (no backend)
