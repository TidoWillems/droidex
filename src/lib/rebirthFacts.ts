import { REBIRTH_PATHS } from '../data/rebirthPaths';
import { hasEffectiveCard } from './droidHierarchy';

export interface RebirthFactsInput {
  rebirthPath: number;
  rebirthLevel: number;

  collected: Set<string>;
  present: Set<string>;
}

export interface RebirthFacts {
  maxRebirth: number;

  nextLevel: number | null;
  requiredCredits: string;
  requiredDroids: readonly any[];

  ready: boolean;
  missing: number;
  ownedCount: number;
  totalCount: number;

  futureUseCountMap: Record<string, number>;

  rebirthMap: Record<string, number[]>;

  lastRequiredRebirthMap: Record<string, number>;
}

export function getRebirthFacts(input: RebirthFactsInput): RebirthFacts {
  const activePath =
    REBIRTH_PATHS[input.rebirthPath as keyof typeof REBIRTH_PATHS];

  const nextRebirth = activePath.find((r) => r.from === input.rebirthLevel);

  const maxRebirth = Math.max(...activePath.map((r) => r.from));

  const ownedCount =
    nextRebirth?.droids.filter((d) => hasEffectiveCard(input.present, d.cardId))
      .length ?? 0;

  const totalCount = nextRebirth?.droids.length ?? 0;

  const missing = Math.max(0, totalCount - ownedCount);

  const ready = nextRebirth !== undefined && missing === 0;

  const futureUseCountMap: Record<string, number> = {};

  const rebirthMap: Record<string, number[]> = {};

  activePath.forEach((level) => {
    level.droids.forEach((droid) => {
      if (!rebirthMap[droid.name]) {
        rebirthMap[droid.name] = [];
      }

      rebirthMap[droid.name].push(level.to);
    });
  });

  const lastRequiredRebirthMap: Record<string, number> = {};

  activePath.forEach((level) => {
    level.droids.forEach((droid) => {
      lastRequiredRebirthMap[droid.cardId] = Math.max(
        lastRequiredRebirthMap[droid.cardId] ?? 0,
        level.from
      );
    });
  });

  activePath.forEach((level) => {
    if (level.from <= input.rebirthLevel) return;

    level.droids.forEach((droid) => {
      futureUseCountMap[droid.cardId] =
        (futureUseCountMap[droid.cardId] ?? 0) + 1;
    });
  });

  return {
    maxRebirth,
    nextLevel: nextRebirth?.to ?? null,
    requiredCredits: nextRebirth?.credits ?? '',
    requiredDroids: nextRebirth?.droids ?? [],
    ready,
    missing,
    ownedCount,
    totalCount,
    futureUseCountMap,
    rebirthMap,
    lastRequiredRebirthMap,
  };
}
