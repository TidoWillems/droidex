# DROIDEX

Forked from: Erik Peik's Droidex tracker  
Original project: https://github.com/erikpeik/droidex

This fork focuses on:

- Android + Termux compatibility
- Offline-first usage
- Local-first persistence
- No account required
- Mobile workflow support

A web-based tracker for the **Fortnite Star Wars Droid Tycoon** game mode.
Track which droids you've collected across all tiers and plan your next rebirth.

**Live site: [droidex.erikpeik.fi](https://droidex.erikpeik.fi/)**

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

## Contributing

Found a bug or want to suggest a feature? Open an [issue](https://github.com/erikpeik/droidex/issues) or submit a [pull request](https://github.com/erikpeik/droidex/pulls) — contributions are welcome.

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


## Fork Notes

Changes in this fork:

- Firebase authentication removed from default flow
- Local storage prioritized
- Improved Android / Termux workflow
- Experimental mobile-first branch

The original project and core concept remain Erik Peik's work.
