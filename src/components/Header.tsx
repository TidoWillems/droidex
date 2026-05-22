import { OfflineTimer } from './OfflineTimer';
import { Link, NavLink } from 'react-router-dom';
import { ALL_CARDS, TOTAL_DROIDS } from '../data/droids';
import { UI } from '../data/ui';
import { t } from '../lib/t';

interface Props {
  collected: Set<string>;
  rebirthLevel: number;
}

export function Header({ collected, rebirthLevel }: Props) {
  const collectedCount = collected.size;
  const knownTotal = ALL_CARDS.length;
  const pct = Math.round((collectedCount / TOTAL_DROIDS) * 100);

  return (
    <header
      className="
      bg-black
      border-b
      border-zinc-800
      px-3
      py-3
      flex
      flex-col
      gap-3
    "
    >
      {/* obere Zeile */}
      <div className="flex items-start justify-between gap-3">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <h1
            className="
            text-2xl
            font-extrabold
            tracking-widest
            text-cyan-400
            drop-shadow-[0_0_8px_rgba(0,229,255,0.7)]
          "
          >
            DROIDEX
          </h1>
        </Link>

        {/* Progress */}
        <div className="flex-1 min-w-0 max-w-[220px]">
          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="
              h-full
              bg-gradient-to-r
              from-cyan-500
              to-cyan-300
              rounded-full
              transition-all
              duration-300
            "
              style={{
                width: `${pct}%`,
              }}
            />
          </div>

          <p className="text-zinc-600 text-[10px] mt-1">
            {pct}% {t(UI.complete)}
          </p>
        </div>

        {/* Collected */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `
            shrink-0
            flex
            items-center
            gap-2
            rounded-lg
            px-3
            py-1.5
            border
            transition-colors
            ${
              isActive
                ? 'bg-zinc-900 border-cyan-700 text-cyan-400'
                : 'bg-zinc-900 border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:text-zinc-300'
            }
          `
          }
        >
          <span className="text-xs uppercase tracking-wide">
            {t(UI.collected)}
          </span>

          <span className="font-bold text-lg leading-none">
            {collectedCount}

            <span className="text-[10px] font-normal opacity-60">
              /{TOTAL_DROIDS}
            </span>
          </span>
        </NavLink>
      </div>

      {/* zweite Zeile */}
      <div className="flex gap-3 flex-wrap">
        {/* SYSTEM PANEL */}
        <div
          className="
          flex
          flex-col
          gap-2
          rounded-xl
          border
          border-zinc-800
          bg-zinc-950
          px-3
          py-2
          min-w-[170px]
        "
        >
          {/* Rebirth */}
          <NavLink
            to="/rebirths"
            className={({ isActive }) =>
              `
              flex
              items-center
              justify-between
              rounded-lg
              border
              px-3
              py-2
              transition-colors
              ${
                isActive
                  ? 'bg-zinc-900 border-orange-700 text-orange-400'
                  : 'bg-zinc-900 border-zinc-700 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300'
              }
            `
            }
          >
            <span className="text-xs uppercase tracking-widest">
              {t(UI.rebirth)}
            </span>

            <div className="flex items-center gap-1">
              <span className="font-bold text-xl leading-none">
                {rebirthLevel}
              </span>

              {rebirthLevel >= 20 && (
                <span className="text-yellow-400 text-[10px] font-bold">
                  {t(UI.max)}
                </span>
              )}
            </div>
          </NavLink>

          {/* Offline Timer */}
          <OfflineTimer />
        </div>
      </div>

      {/* Footer Info */}
      <div className="hidden sm:block text-[10px] text-zinc-600">
        {knownTotal} {t(UI.tracked)}
        {' · '}
        {TOTAL_DROIDS - knownTotal} {t(UI.unknown)}
      </div>
    </header>
  );
}
