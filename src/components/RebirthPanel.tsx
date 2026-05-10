import { useMemo, useState } from 'react'
import { REBIRTH_LEVELS } from '../data/rebirths'

interface Props {
  rebirthLevel: number
  collected: Set<string>
  onSetRebirth: (level: number) => void
  onHighlight: (ids: Set<string>) => void
}

const TIER_COLORS: Record<string, string> = {
  DEFAULT:  '#9ca3af',
  GOLD:     '#fbbf24',
  DIAMOND:  '#7dd3fc',
  RAINBOW:  '#c084fc',
}

export function RebirthPanel({ rebirthLevel, collected, onSetRebirth, onHighlight }: Props) {
  const [open, setOpen] = useState(true)

  const nextRebirth = useMemo(
    () => REBIRTH_LEVELS.find((r) => r.from === rebirthLevel),
    [rebirthLevel]
  )

  const allMet = useMemo(
    () => nextRebirth?.droids.every((d) => collected.has(d.cardId)) ?? false,
    [nextRebirth, collected]
  )

  const handleMouseEnter = () => {
    if (nextRebirth) {
      onHighlight(new Set(nextRebirth.droids.map((d) => d.cardId)))
    }
  }
  const handleMouseLeave = () => onHighlight(new Set())

  return (
    <div
      className="border-t border-zinc-800 bg-zinc-950"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Toggle header */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-2 hover:bg-zinc-900 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-orange-400 font-bold text-sm tracking-wide uppercase">Rebirth</span>
          <div className="flex items-center gap-1.5">
            {/* Level stepper */}
            <button
              onClick={(e) => { e.stopPropagation(); onSetRebirth(Math.max(0, rebirthLevel - 1)) }}
              className="w-5 h-5 rounded bg-zinc-800 text-zinc-400 hover:bg-zinc-700 flex items-center justify-center text-xs leading-none"
            >−</button>
            <span className="text-orange-400 font-bold text-base w-6 text-center">{rebirthLevel}</span>
            <button
              onClick={(e) => { e.stopPropagation(); onSetRebirth(Math.min(20, rebirthLevel + 1)) }}
              className="w-5 h-5 rounded bg-zinc-800 text-zinc-400 hover:bg-zinc-700 flex items-center justify-center text-xs leading-none"
            >+</button>
          </div>
          {nextRebirth ? (
            <span className="text-zinc-500 text-xs">→ Rebirth {nextRebirth.to}</span>
          ) : (
            <span className="text-yellow-400 text-xs font-bold">MAX REBIRTH</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {nextRebirth && (
            <span className={`text-xs font-bold ${allMet ? 'text-green-400' : 'text-red-400'}`}>
              {allMet ? '✓ READY' : `${nextRebirth.droids.filter((d) => collected.has(d.cardId)).length}/${nextRebirth.droids.length} droids`}
            </span>
          )}
          <span className="text-zinc-600 text-xs">{open ? '▼' : '▲'}</span>
        </div>
      </button>

      {open && nextRebirth && (
        <div className="px-4 pb-3 flex flex-wrap gap-4 items-start">
          {/* Credits cost */}
          <div className="flex flex-col items-center bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 min-w-[100px]">
            <span className="text-zinc-500 text-[9px] uppercase tracking-wide">Credits needed</span>
            <span className="text-yellow-400 font-bold text-base">{nextRebirth.credits}</span>
          </div>

          {/* Required droids */}
          <div className="flex flex-wrap gap-2 flex-1">
            {nextRebirth.droids.map((d) => {
              const have = collected.has(d.cardId)
              return (
                <div
                  key={d.cardId}
                  className={[
                    'flex items-center gap-1.5 px-2 py-1 rounded-md border text-xs font-bold',
                    have
                      ? 'bg-green-950 border-green-700 text-green-400'
                      : 'bg-red-950 border-red-800 text-red-400',
                  ].join(' ')}
                >
                  <span
                    className="w-2 h-2 rounded-full inline-block shrink-0"
                    style={{ backgroundColor: TIER_COLORS[d.tier] }}
                  />
                  <span style={{ color: TIER_COLORS[d.tier] }}>{d.tier[0]}</span>
                  <span className="text-white/90">{d.name}</span>
                  <span>{have ? '✓' : '✗'}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {open && !nextRebirth && (
        <div className="px-4 pb-3 text-center text-yellow-400 font-bold text-sm">
          🎉 Maximum rebirth level reached!
        </div>
      )}
    </div>
  )
}
