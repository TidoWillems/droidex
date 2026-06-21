import { useMemo } from 'react';
import { ALL_CARDS, TIER_ORDER } from '../data/droids';
import type { TierOrAll, DroidType, Rarity } from '../data/droids';
import { DroidCard } from './DroidCard';
import { REBIRTH_PATHS } from '../data/rebirthPaths';

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

  onToggle: (id: string) => void;
  onTogglePresent: (id: string) => void;
  onToggleFlawless: (id: string) => void;

  highlightedIds?: Set<string>;
}

export function DroidGrid({
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

  onToggle,
  onTogglePresent,
  onToggleFlawless,

  highlightedIds,
}: Props) {
  const tierIndex = useMemo(
    () => Object.fromEntries(TIER_ORDER.map((t, i) => [t, i])),
    []
  );
  const requiredIds = useMemo(() => {
    const activePath = REBIRTH_PATHS[rebirthPath as keyof typeof REBIRTH_PATHS];

    return new Set(
      activePath
        .filter((r) => r.from >= rebirthLevel)
        .flatMap((r) => r.droids.map((d) => d.cardId))
    );
  }, [rebirthPath, rebirthLevel]);
  const cards = useMemo(() => {
    const filtered = ALL_CARDS.filter((c) => {
      if (tier !== 'ALL' && c.tier !== tier) return false;
      if (rarity !== 'ALL' && c.droid.rarity !== rarity) return false;
      if (droidClass !== 'ALL' && c.droid.type !== droidClass) return false;
      if (collectionStatus === 'OWNED' && !collected.has(c.id)) return false;
      if (collectionStatus === 'MISSING' && collected.has(c.id)) return false;
      const isFlawless = flawless.has(c.droid.name);
      if (flawlessStatus === 'FLAWLESS' && !isFlawless) return false;
      if (flawlessStatus === 'MISSING' && isFlawless) return false;

      if (
        search.trim() &&
        !c.droid.name.toLowerCase().includes(search.trim().toLowerCase())
      )
        return false;

      if (rebirthFilter === 'NEEDED' && !requiredIds.has(c.id)) return false;

      if (
        rebirthFilter === 'HISTORICAL' &&
        !(collected.has(c.id) && !present.has(c.id))
      )
        return false;

      return true;
    });
    if (tier === 'ALL') {
      filtered.sort((a, b) => tierIndex[a.tier] - tierIndex[b.tier]);
    }
    return filtered;
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
    requiredIds,
    tierIndex,
  ]);

  const rebirthMap = useMemo(() => {
    const map: Record<string, number[]> = {};

    const activePath = REBIRTH_PATHS[rebirthPath as keyof typeof REBIRTH_PATHS];
    for (const level of activePath) {
      for (const d of level.droids) {
        if (!map[d.name]) {
          map[d.name] = [];
        }

        map[d.name].push(level.to);
      }
    }

    return map;
  }, [rebirthPath]);

  const futureUseMap = useMemo(() => {
    const activePath = REBIRTH_PATHS[rebirthPath as keyof typeof REBIRTH_PATHS];

    const map: Record<string, number> = {};

    activePath.forEach((level) => {
      level.droids.forEach((droid) => {
        map[droid.cardId] = Math.max(map[droid.cardId] ?? 0, level.from);
      });
    });
    return map;
  }, [rebirthPath]);

  if (cards.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 text-zinc-600 text-sm">
        No droids match this filter.
      </div>
    );
  }

  return (
    <div
      className="grid gap-3 p-4"
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))' }}
    >
      {cards.map((card) => (
        <DroidCard
          key={card.id}
          card={card}
          collected={collected.has(card.id)}
          present={present.has(card.id)}
          presentCards={present}
          flawless={flawless.has(card.droid.name)}
          onToggle={onToggle}
          onTogglePresent={onTogglePresent}
          onToggleFlawless={onToggleFlawless}
          highlighted={highlightedIds?.has(card.id)}
          rebirthLevels={rebirthMap[card.droid.name]}
          lastRequiredRebirth={futureUseMap[card.id]}
          currentRebirth={rebirthLevel}
        />
      ))}
    </div>
  );
}
