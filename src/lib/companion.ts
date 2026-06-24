import { hasEffectiveCard } from './droidHierarchy';

export function getFutureUsage(
  currentRebirth: number,
  lastRequiredRebirth?: number
): string {
  if (lastRequiredRebirth === undefined) {
    return 'Nie für Rebirth benötigt';
  }

  if (currentRebirth > lastRequiredRebirth) {
    return 'Nicht mehr benötigt';
  }

  return `Benötigt bis RB${lastRequiredRebirth}`;
}

export function getFutureUseCount(
  currentRebirth: number,
  rebirthLevels: number[] = []
): number {
  return rebirthLevels.filter((level) => level > currentRebirth).length;
}

export function isLastUsage(
  currentRebirth: number,
  rebirthLevels: number[] = []
): boolean {
  return getFutureUseCount(currentRebirth, rebirthLevels) === 1;
}

export function getFutureUseCountForDroid(
  activePath: readonly any[],
  currentLevel: number,
  droidName: string
): number {
  let count = 0;

  activePath
    .filter((level) => level.from > currentLevel)
    .forEach((level) => {
      level.droids.forEach((droid: any) => {
        if (droid.name === droidName) {
          count++;
        }
      });
    });

  return count;
}

export function getMissingDroids(
  present: Set<string>,
  droids: readonly {
    cardId: string;
    name: string;
    tier: string;
  }[]
) {
  return droids.filter((droid) => !hasEffectiveCard(present, droid.cardId));
}

export function getReadyReason(
  present: Set<string>,
  droids: readonly {
    cardId: string;
    name: string;
    tier: string;
  }[]
): string {
  const missing = getMissingDroids(present, droids);

  if (missing.length === 0) {
    return 'READY';
  }

  if (missing.length === 1) {
    return `${missing[0].name} fehlt`;
  }

  return `${missing.length} Droiden fehlen`;
}

export function getReadyExplanation(
  present: Set<string>,
  droids: readonly {
    cardId: string;
    name: string;
    tier: string;
  }[]
): string[] {
  const missing = getMissingDroids(present, droids);

  if (missing.length === 0) {
    return ['Alle Anforderungen erfüllt'];
  }

  return missing.map((droid) => `${droid.name} fehlt`);
}

export function isReady(
  present: Set<string>,
  droids: readonly {
    cardId: string;
    name: string;
    tier: string;
  }[]
): boolean {
  return getMissingDroids(present, droids).length === 0;
}

export function getRequirementExplanation(
  activePath: readonly any[],
  droidName: string
): string[] {
  const usages: string[] = [];

  activePath.forEach((level) => {
    const required = level.droids.some(
      (droid: any) => droid.name === droidName
    );

    if (required) {
      usages.push(
        `Benötigt für RB${level.from} → RB${level.to}`
      );
    }
  });

  if (usages.length === 0) {
    return ['Nicht für Rebirth benötigt'];
  }

  return usages;
}

//=================================

// später evtl.
// export function getFutureStatus(
//  currentRebirth: number,
//  rebirthLevels: number[] = []
//): string {
//  const count = getFutureUseCount(
//    currentRebirth,
//    rebirthLevels
//  );
//
//  if (count === 0) return 'SAFE';
//  if (count === 1) return 'LAST';
//
//  return `REUSE:${count}`;
//}
