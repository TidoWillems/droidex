import { Link } from 'react-router-dom';
import { UI } from '../data/ui';
import { t } from '../lib/t';
import { getRebirthFacts } from '../lib/rebirthFacts';
import { RebirthRequirements } from './RebirthRequirements';

interface Props {
  open: boolean;
  onToggle: () => void;
  rebirthPath: number;
  rebirthLevel: number;
  collected: Set<string>;
  present: Set<string>;
  onSetRebirth: (level: number) => void;
  onHighlight: (ids: Set<string>) => void;
}

export function RebirthPanel({
  open,
  onToggle,
  rebirthPath,
  rebirthLevel,
  collected,
  present,
  onSetRebirth,
  onHighlight,
}: Props) {
  const {
    futureUseCountMap,
    maxRebirth,
    nextLevel,
    requiredCredits,
    requiredDroids,
    ready,
    ownedCount,
    totalCount,
  } = getRebirthFacts({
    rebirthPath,
    rebirthLevel,
    collected,
    present,
  });

  const handleMouseEnter = () => {
    if (requiredDroids.length === 0) return;

    onHighlight(new Set(requiredDroids.map((d) => d.cardId)));
  };

  const handleMouseLeave = () => onHighlight(new Set());

  return (
    <div
      className={`
  border
  border-zinc-800
  rounded-xl
  overflow-hidden
  rebirth-panel
  ${ready ? 'rebirth-panel-ready' : 'rebirth-panel-pending'}
`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Toggle header */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-zinc-900/70 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="glow-orange text-orange-400 font-bold text-sm tracking-widest uppercase">
            {t(UI.rebirth)}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSetRebirth(Math.max(0, rebirthLevel - 1));
              }}
              className="w-6 h-6 rounded-sm bg-zinc-800 border border-zinc-700 text-zinc-300 hover:bg-orange-900/40 hover:border-orange-700/60 hover:text-orange-300 flex items-center justify-center text-sm leading-none transition-colors font-bold"
            >
              −
            </button>
            <span className="text-orange-400 font-bold text-base w-6 text-center">
              {rebirthLevel}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSetRebirth(Math.min(maxRebirth, rebirthLevel + 1));
              }}
              className="w-6 h-6 rounded-sm bg-zinc-800 border border-zinc-700 text-zinc-300 hover:bg-orange-900/40 hover:border-orange-700/60 hover:text-orange-300 flex items-center justify-center text-sm leading-none transition-colors font-bold"
            >
              +
            </button>
          </div>
          {nextLevel ? (
            <span className="text-zinc-500 text-xs flex items-center gap-0.5">
              <span className="text-orange-700">→</span>
              <span>
                {t(UI.rebirth)}{' '}
                <span className="text-zinc-300 font-bold">{nextLevel}</span>
              </span>
            </span>
          ) : (
            <span className="text-yellow-400 text-xs font-bold tracking-wide">
              {t(UI.max)}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {nextLevel &&
            (ready ? (
              <span className="glow-green text-xs font-bold text-green-400">
                {t(UI.ready)}
              </span>
            ) : (
              <div className="flex flex-col items-end gap-0.5">
                <span className="text-xs font-bold text-red-400">
                  {ownedCount}/{totalCount} {t(UI.droids)}
                </span>

                <div className="flex gap-0.5">
                  {Array.from({ length: totalCount }, (_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1 rounded-full ${
                        i < ownedCount ? 'bg-orange-500' : 'bg-zinc-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          <span className="text-zinc-600 text-xs">{open ? '▲' : '▼'}</span>
        </div>
      </button>

      {open && nextLevel && (
        <div className="px-4 pb-4 pt-1">
          {/* NEED divider */}
          <div className="flex items-center gap-3 mb-3">
            <div className="need-divider-left flex-1 h-px" />
            <span className="need-label text-[10px] font-black tracking-[0.3em] uppercase">
              {t(UI.need)}
            </span>
            <div className="need-divider-right flex-1 h-px" />
          </div>

          <RebirthRequirements
            requiredCredits={requiredCredits}
            requiredDroids={requiredDroids}
            collected={collected}
            present={present}
            futureUseCountMap={futureUseCountMap}
          />
        </div>
      )}

      {open && !nextLevel && (
        <div className="px-4 pb-4 pt-2 text-center">
          <span className="glow-yellow text-yellow-400 font-black text-sm tracking-widest uppercase">
            {t(UI.maxRebirth)}
          </span>
        </div>
      )}

      {open && (
        <div className="pt-2">
          <Link
            to="/rebirths"
            className="
			block
			border-t border-zinc-800
			bg-zinc-950/70
			hover:bg-zinc-900
      px-4 py-3
      text-center
      text-[11px]
      font-bold
      tracking-[0.25em]
      uppercase
      text-orange-400
      transition-colors
      rounded-b-xl
    "
          >
            ▼ Rebirth Planner
          </Link>
        </div>
      )}
    </div>
  );
}
