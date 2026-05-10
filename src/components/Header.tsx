import { ALL_CARDS, TOTAL_DROIDS } from '../data/droids'

interface Props {
  collected: Set<string>
  rebirthLevel: number
}

export function Header({ collected, rebirthLevel }: Props) {
  const collectedCount = collected.size
  const knownTotal = ALL_CARDS.length
  const pct = Math.round((collectedCount / TOTAL_DROIDS) * 100)

  return (
    <header className="bg-black border-b border-zinc-800 px-4 py-3 flex items-center gap-4 flex-wrap">
      {/* Title */}
      <div className="flex items-baseline gap-2 shrink-0">
        <h1 className="text-2xl font-extrabold tracking-widest text-cyan-400 drop-shadow-[0_0_8px_rgba(0,229,255,0.7)]">
          DROIDEX
        </h1>
        <span className="text-zinc-400 text-sm font-mono">
          {collectedCount}
          <span className="text-zinc-600">/{TOTAL_DROIDS}</span>
        </span>
      </div>

      {/* Progress bar */}
      <div className="flex-1 min-w-[120px]">
        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="text-zinc-600 text-[10px] mt-0.5">{pct}% complete</p>
      </div>

      {/* Rebirth badge */}
      <div className="shrink-0 flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-1.5">
        <span className="text-zinc-500 text-xs uppercase tracking-wide">Rebirth</span>
        <span className="text-orange-400 font-bold text-lg leading-none">{rebirthLevel}</span>
        {rebirthLevel >= 20 && (
          <span className="text-yellow-400 text-xs font-bold ml-1">MAX</span>
        )}
      </div>

      {/* Stat: known droids */}
      <div className="shrink-0 text-[10px] text-zinc-600 hidden sm:block">
        {knownTotal} tracked · {TOTAL_DROIDS - knownTotal} TBD
      </div>
    </header>
  )
}
