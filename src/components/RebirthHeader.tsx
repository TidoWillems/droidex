import { UI } from '../data/ui';
import { t } from '../lib/t';

type Props = {
  open: boolean;
  onToggle: () => void;

  rebirthLevel: number;
  maxRebirth: number;
  nextLevel: number | null;

  ready: boolean;
  ownedCount: number;
  totalCount: number;

  onSetRebirth: (level: number) => void;
};

export function RebirthHeader({
  open,
  onToggle,
  rebirthLevel,
  maxRebirth,
  nextLevel,
  ready,
  ownedCount,
  totalCount,
  onSetRebirth,
}: Props) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      }}
      className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-zinc-900/70 transition-colors cursor-pointer"
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

        {nextLevel !== null ? (
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
        {nextLevel !== null &&
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
    </div>
  );
}
