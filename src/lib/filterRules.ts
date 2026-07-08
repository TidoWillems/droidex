// filterRules.ts

import type { DroidCard } from '../data/droids';

import { TIER_ORDER } from '../data/droids';

import type { Rarity, DroidType, TierOrAll } from './droidTypes';

export interface VisibleCardFilters {
  cards: DroidCard[];

  tier: TierOrAll;
  rarity: Rarity | 'ALL';
  droidClass: DroidType | 'ALL';

  collectionStatus: 'ALL' | 'OWNED' | 'MISSING';
  flawlessStatus: 'ALL' | 'FLAWLESS' | 'MISSING';
  rebirthFilter: 'ALL' | 'NEEDED' | 'HISTORICAL';

  search: string;

  collected: Set<string>;
  present: Set<string>;
  flawless: Set<string>;

  requiredIds: Set<string>;
}

export function getVisibleCards(input: VisibleCardFilters): DroidCard[] {
  const filtered = input.cards.filter((c) => {
    if (input.tier !== 'ALL' && c.tier !== input.tier) return false;
    if (input.rarity !== 'ALL' && c.droid.rarity !== input.rarity) return false;
    if (input.droidClass !== 'ALL' && c.droid.type !== input.droidClass)
      return false;

    if (input.collectionStatus === 'OWNED' && !input.collected.has(c.id))
      return false;

    if (input.collectionStatus === 'MISSING' && input.collected.has(c.id))
      return false;

    const isFlawless = input.flawless.has(c.droid.name);

    if (input.flawlessStatus === 'FLAWLESS' && !isFlawless) return false;

    if (input.flawlessStatus === 'MISSING' && isFlawless) return false;

    if (
      input.search.trim() &&
      !c.droid.name.toLowerCase().includes(input.search.trim().toLowerCase())
    )
      return false;

    if (input.rebirthFilter === 'NEEDED' && !input.requiredIds.has(c.id))
      return false;

    if (
      input.rebirthFilter === 'HISTORICAL' &&
      !(input.collected.has(c.id) && !input.present.has(c.id))
    )
      return false;

    return true;
  });

  if (input.tier === 'ALL') {
    const tierIndex = Object.fromEntries(TIER_ORDER.map((t, i) => [t, i]));

    filtered.sort((a, b) => tierIndex[a.tier] - tierIndex[b.tier]);
  }

  return filtered;
}
