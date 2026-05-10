import type { Tier } from '../data/droids'
import { TIER_ORDER } from '../data/droids'

interface Props {
  active: Tier
  onChange: (tier: Tier) => void
}

const TIER_STYLE: Record<Tier, { active: string; inactive: string; label: string }> = {
  DEFAULT: {
    label: 'DEFAULT',
    active: 'bg-zinc-700 text-white border-zinc-500',
    inactive: 'text-zinc-500 border-transparent hover:text-zinc-300',
  },
  GOLD: {
    label: 'GOLD',
    active: 'bg-amber-500/20 text-amber-400 border-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.4)]',
    inactive: 'text-amber-700 border-transparent hover:text-amber-500',
  },
  DIAMOND: {
    label: 'DIAMOND',
    active: 'bg-sky-500/20 text-sky-300 border-sky-300 shadow-[0_0_8px_rgba(147,220,255,0.4)]',
    inactive: 'text-sky-800 border-transparent hover:text-sky-400',
  },
  RAINBOW: {
    label: 'RAINBOW',
    active: 'rainbow-tab border-transparent',
    inactive: 'rainbow-tab-dim border-transparent hover:opacity-80',
  },
}

export function TierTabs({ active, onChange }: Props) {
  return (
    <div className="flex gap-1 px-3 pt-3 pb-0">
      {TIER_ORDER.map((tier) => {
        const isActive = tier === active
        const style = TIER_STYLE[tier]
        return (
          <button
            key={tier}
            onClick={() => onChange(tier)}
            className={[
              'px-3 py-1.5 text-xs font-bold tracking-widest rounded-t-md border-t border-x transition-all duration-150',
              isActive ? style.active : style.inactive,
            ].join(' ')}
          >
            {style.label}
          </button>
        )
      })}
    </div>
  )
}
