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
