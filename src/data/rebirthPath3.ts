import type { RebirthLevel } from './rebirths';
import { req } from './rebirths';

export const REBIRTH_LEVELS_3: RebirthLevel[] = [
  {
    from: 0,
    to: 1,
    credits: '10K',
    droids: [
      req('DEFAULT', 'MOUSE'),
      req('DEFAULT', 'PIT'),
      req('DEFAULT', 'GONK'),
    ],
  },

  {
    from: 1,
    to: 2,
    credits: '150K',
    droids: [
      req('DEFAULT', '2BB'),
      req('DEFAULT', 'R3'),
      req('DEFAULT', 'SENATE HOVERCAM'),
    ],
  },

  {
    from: 2,
    to: 3,
    credits: '975K',
    droids: [req('DEFAULT', 'R4'), req('GOLD', 'R5'), req('DEFAULT', 'R8')],
  },

  {
    from: 3,
    to: 4,
    credits: '2.95M',
    droids: [
      req('GOLD', 'R9'),
      req('GOLD', 'B1 BATTLE'),
      req('GOLD', 'B1 SECURITY'),
    ],
  },

  {
    from: 4,
    to: 5,
    credits: '5.35M',
    droids: [
      req('GOLD', '2BB'),
      req('GOLD', 'R3'),
      req('GOLD', 'SENATE HOVERCAM'),
    ],
  },

  {
    from: 5,
    to: 6,
    credits: '9.85M',
    droids: [
      req('DIAMOND', 'BDX EXPLORER'),
      req('DIAMOND', 'R4'),
      req('DIAMOND', 'R5'),
    ],
  },

  {
    from: 6,
    to: 7,
    credits: '14.5M',
    droids: [
      req('DIAMOND', 'R8'),
      req('DIAMOND', 'R9'),
      req('DIAMOND', 'B1 BATTLE'),
    ],
  },

  {
    from: 7,
    to: 8,
    credits: '36M',
    droids: [
      req('RAINBOW', 'B1 SECURITY'),
      req('RAINBOW', 'R3'),
      req('RAINBOW', '2BB'),
    ],
  },

  {
    from: 8,
    to: 9,
    credits: '89M',
    droids: [
      req('RAINBOW', 'BDX EXPLORER'),
      req('RAINBOW', 'R4'),
      req('RAINBOW', 'R5'),
    ],
  },

  {
    from: 9,
    to: 10,
    credits: '220M',
    droids: [
      req('RAINBOW', 'SENATE HOVERCAM'),
      req('DEFAULT', 'GROUNDMECH'),
      req('DEFAULT', 'TRAK-R'),
    ],
  },

  {
    from: 10,
    to: 11,
    credits: '550M',
    droids: [
      req('DEFAULT', 'B2 HEAVY'),
      req('DEFAULT', 'B2 SUPER'),
      req('DEFAULT', 'UTIL-TEC'),
    ],
  },

  {
    from: 11,
    to: 12,
    credits: '1.36B',
    droids: [
      req('GOLD', 'TRAK-R'),
      req('GOLD', 'GROUNDMECH'),
      req('RAINBOW', 'BAL-CORE'),
    ],
  },
  {
    from: 12,
    to: 13,
    credits: '3.40B',
    droids: [
      req('RAINBOW', 'B2 SUPER'),
      req('DEFAULT', 'MECHA-DROID'),
      req('DEFAULT', 'PROTO-ROLLER'),
    ],
  },
  {
    from: 13,
    to: 14,
    credits: '8.45B',
    droids: [
      req('RAINBOW', 'B2 HEAVY'),
      req('DEFAULT', 'B2-RP'),
      req('GOLD', 'R7'),
    ],
  },
  {
    from: 14,
    to: 15,
    credits: '21.00B',
    droids: [
      req('RAINBOW', 'STRIKE-ORB'),
      req('GOLD', 'BB9'),
      req('GOLD', 'PROTO-ROLLER'),
    ],
  },
  {
    from: 15,
    to: 16,
    credits: '52.00B',
    droids: [
      req('RAINBOW', 'AMP WALKER'),
      req('DIAMOND', 'B2-RP'),
      req('GOLD', 'MECHA-DROID'),
    ],
  },
  {
    from: 16,
    to: 17,
    credits: '130.00B',
    droids: [
      req('RAINBOW', 'OPTI-POD'),
      req('DIAMOND', 'R7'),
      req('GOLD', 'MONO-WALKER'),
    ],
  },
  {
    from: 17,
    to: 18,
    credits: '325.00B',
    droids: [
      req('RAINBOW', 'UTIL-TEC'),
      req('DIAMOND', 'BB9'),
      req('DIAMOND', 'PROTO-ROLLER'),
    ],
  },
  {
    from: 18,
    to: 19,
    credits: '810.00B',
    droids: [
      req('DIAMOND', 'MECHA-DROID'),
      req('RAINBOW', 'R7'),
      req('RAINBOW', 'B2-RP'),
    ],
  },
  {
    from: 19,
    to: 20,
    credits: '2.00T',
    droids: [
      req('RAINBOW', 'MONO-WALKER'),
      req('RAINBOW', 'OPTI-STRIKE'),
      req('RAINBOW', 'CYCLO-GRAV'),
    ],
  },
  {
    from: 20,
    to: 21,
    credits: '3.00T',
    droids: [req('BESKAR', 'LO'), req('BESKAR', 'R6'), req('BESKAR', 'HAUL-R')],
  },
  {
    from: 21,
    to: 22,
    credits: '4.50T',
    droids: [
      req('BESKAR', 'SEN-TRI'),
      req('BESKAR', 'STRIKE-ORB'),
      req('BESKAR', 'PROTO-ROLLER'),
    ],
  },
];
