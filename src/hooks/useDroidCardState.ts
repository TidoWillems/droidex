import { DROID_INFO } from '../data/droidInfo';
import { RARITY_COLOR, TYPE_BADGE } from '../lib/droidTheme';
import { getFutureUsage } from '../lib/companion';

interface Props {
  droid: {
    name: string;
    rarity: string;
    type: string;
    canBeFlawless?: boolean;
  };

  tier: string;

  highlighted?: boolean;

  facts: {
    owned: boolean;
    present: boolean;
  };

  currentRebirth?: number;
  lastRequiredRebirth?: number;
}

export function useDroidCardState({
  droid,
  tier,
  highlighted,
  facts,
  currentRebirth,
  lastRequiredRebirth,
}: Props) {
  const rarityColor = RARITY_COLOR[droid.rarity];
  const badge = TYPE_BADGE[droid.type];

  const isRainbow = tier === 'RAINBOW';

  const ringClass = highlighted
    ? 'ring-2 ring-yellow-400 ring-inset'
    : facts.owned
      ? 'ring-2 ring-cyan-400 ring-inset'
      : '';

  const canBeFlawless = droid.canBeFlawless !== false;

  const isSafe =
    lastRequiredRebirth !== undefined &&
    currentRebirth !== undefined &&
    currentRebirth > lastRequiredRebirth;

  const futureUsage = getFutureUsage(currentRebirth ?? 0, lastRequiredRebirth);

  const info = DROID_INFO[droid.name];

  return {
    ui: {
      rarityColor,
      badge,
      ringClass,
      isRainbow,
    },

    state: {
      isPresent: facts.present,
      isSafe,
      canBeFlawless,
      futureUsage,
    },

    info,
  };
}
