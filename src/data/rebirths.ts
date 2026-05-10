import type { Tier } from './droids'

export interface RebirthDroidReq {
  name: string
  tier: Tier
  cardId: string // matches DroidCard.id
}

export interface RebirthLevel {
  from: number
  to: number
  credits: string
  droids: RebirthDroidReq[]
}

function req(tier: Tier, name: string): RebirthDroidReq {
  return { name, tier, cardId: `${name}_${tier}` }
}

// "BASIC" in the spreadsheet = DEFAULT tier
// MONO-WLKR → MONO-WALKER, OPTI-STRK → OPTI-STRIKE
export const REBIRTH_LEVELS: RebirthLevel[] = [
  {
    from: 0, to: 1,
    credits: '10K',
    droids: [req('DEFAULT', 'CB')],
  },
  {
    from: 1, to: 2,
    credits: '150K',
    droids: [req('DEFAULT', 'BDX EXPLORER')],
  },
  {
    from: 2, to: 3,
    credits: '975K',
    droids: [req('DEFAULT', 'A-LT')],
  },
  {
    from: 3, to: 4,
    credits: '2.95M',
    droids: [req('GOLD', 'ARG'), req('GOLD', 'B1 SECURITY')],
  },
  {
    from: 4, to: 5,
    credits: '5.35M',
    droids: [req('GOLD', 'BU-4D'), req('GOLD', 'HOV-R')],
  },
  {
    from: 5, to: 6,
    credits: '9.85M',
    droids: [req('GOLD', 'GROUNDMECH'), req('DIAMOND', 'R9')],
  },
  {
    from: 6, to: 7,
    credits: '14.5M',
    droids: [req('GOLD', 'BB'), req('DIAMOND', 'B1 SECURITY'), req('DIAMOND', 'BU-4D')],
  },
  {
    from: 7, to: 8,
    credits: '36M',
    droids: [req('GOLD', 'UTIL-TEC'), req('GOLD', 'LO'), req('DIAMOND', 'HOV-R')],
  },
  {
    from: 8, to: 9,
    credits: '89M',
    droids: [req('RAINBOW', 'GROUNDMECH'), req('GOLD', 'R6'), req('GOLD', 'TRAK-R')],
  },
  {
    from: 9, to: 10,
    credits: '220M',
    droids: [req('RAINBOW', 'LO'), req('RAINBOW', 'HAUL-R'), req('GOLD', 'STRIKE-ORB')],
  },
  {
    from: 10, to: 11,
    credits: '550M',
    droids: [req('RAINBOW', 'AMP WALKER'), req('RAINBOW', 'B1 HEAVY'), req('GOLD', 'BB9')],
  },
  {
    from: 11, to: 12,
    credits: '1.36B',
    droids: [req('RAINBOW', 'PROTO-ROLLER'), req('DIAMOND', 'MECHA-DROID'), req('GOLD', 'MONO-WALKER')],
  },
  {
    from: 12, to: 13,
    credits: '3.40B',
    droids: [req('RAINBOW', 'R7'), req('RAINBOW', 'CYCLO-GRAV'), req('RAINBOW', 'B2-RP')],
  },
  {
    from: 13, to: 14,
    credits: '8.45B',
    droids: [req('RAINBOW', 'OPTI-STRIKE'), req('RAINBOW', 'MONO-WALKER'), req('RAINBOW', 'MECHA-DROID')],
  },
  {
    from: 14, to: 15,
    credits: '21.00B',
    droids: [req('RAINBOW', 'R7'), req('RAINBOW', 'CYCLO-GRAV'), req('RAINBOW', 'B2-RP')],
  },
  {
    from: 15, to: 16,
    credits: '52.00B',
    droids: [req('RAINBOW', 'OPTI-STRIKE'), req('RAINBOW', 'MONO-WALKER'), req('RAINBOW', 'PROTO-ROLLER')],
  },
  {
    from: 16, to: 17,
    credits: '130.00B',
    droids: [req('RAINBOW', 'B2-RP'), req('RAINBOW', 'CYCLO-GRAV'), req('RAINBOW', 'MECHA-DROID')],
  },
  {
    from: 17, to: 18,
    credits: '325.00B',
    droids: [req('RAINBOW', 'OPTI-STRIKE'), req('RAINBOW', 'R7'), req('RAINBOW', 'MONO-WALKER')],
  },
  {
    from: 18, to: 19,
    credits: '810.00B',
    droids: [req('RAINBOW', 'B2-RP'), req('RAINBOW', 'CYCLO-GRAV'), req('RAINBOW', 'PROTO-ROLLER')],
  },
  {
    from: 19, to: 20,
    credits: '2.00T',
    droids: [req('RAINBOW', 'R7'), req('RAINBOW', 'OPTI-STRIKE'), req('RAINBOW', 'MECHA-DROID')],
  },
]
