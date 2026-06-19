export interface DroidInfo {
  abilities?: string[];
}

export const DROID_INFO: Record<string, DroidInfo> = {
  'DJ R-3X': {
    abilities: ['ALL QUESTS', '2x QUEST'],
  },

  BB8: {
    abilities: ['2x CHIPS'],
  },

  'CB-23': {
    abilities: ['SECRET'],
  },

  'MISTER BONES': {
    abilities: ['2x DMG'],
  },

  'IG-11 MARSHAL': {
    abilities: ['BP SHIELD'],
  },
};
