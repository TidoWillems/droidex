import { REBIRTH_LEVELS } from './rebirths';
import { REBIRTH_LEVELS_2 } from './rebirthPath2';
import { REBIRTH_LEVELS_3 } from './rebirthPath3';
import { REBIRTH_LEVELS_4 } from './rebirthPath4';

export const REBIRTH_PATHS = {
  1: REBIRTH_LEVELS,
  2: REBIRTH_LEVELS_2,
  3: REBIRTH_LEVELS_3,
  4: REBIRTH_LEVELS_4,
} as const;
