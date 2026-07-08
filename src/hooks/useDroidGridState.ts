import { useMemo } from 'react';

import { ALL_CARDS } from '../data/droids';
import type { TierOrAll, DroidType, Rarity } from '../lib/droidTypes';

import { getRebirthFacts } from '../lib/rebirthFacts';
import { getVisibleCards } from '../lib/filterRules';

type CollectionStatus = 'ALL' | 'OWNED' | 'MISSING';
type RebirthStatus = 'ALL' | 'NEEDED' | 'HISTORICAL';
type FlawlessStatus = 'ALL' | 'FLAWLESS' | 'MISSING';

interface Props {
  tier: TierOrAll;
  rarity: Rarity | 'ALL';
  droidClass: DroidType | 'ALL';

  collectionStatus: CollectionStatus;
  flawlessStatus: FlawlessStatus;

  rebirthPath: number;
  rebirthLevel: number;
  rebirthFilter: RebirthStatus;

  search: string;

  collected: Set<string>;
  present: Set<string>;
  flawless: Set<string>;
}

export function useDroidGridState({
  tier,
  rarity,
  droidClass,

  collectionStatus,
  flawlessStatus,

  rebirthPath,
  rebirthLevel,
  rebirthFilter,

  search,

  collected,
  present,
  flawless,
}: Props) {
  const rebirthFacts = useMemo(
    () =>
      getRebirthFacts({
        rebirthPath,
        rebirthLevel,

        collected,
        present,
      }),
    [rebirthPath, rebirthLevel, collected, present]
  );
  const cards = useMemo(() => {
    return getVisibleCards({
      cards: ALL_CARDS,

      tier,
      rarity,
      droidClass,

      collectionStatus,
      flawlessStatus,
      rebirthFilter,

      search,

      collected,
      present,
      flawless,

      requiredIds: new Set(Object.keys(rebirthFacts.futureUseCountMap)),
    });
  }, [
    tier,
    rarity,
    droidClass,
    collectionStatus,
    flawlessStatus,
    search,
    collected,
    present,
    flawless,
    rebirthFilter,
    rebirthFacts.futureUseCountMap,
  ]);
  return {
    cards,
    rebirthMap: rebirthFacts.rebirthMap,
    futureUseMap: rebirthFacts.lastRequiredRebirthMap,
    futureUseCountMap: rebirthFacts.futureUseCountMap,
  };
}
