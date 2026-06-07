import { OfflineTimer } from './OfflineTimer';
import { Link, NavLink } from 'react-router-dom';
import { ALL_CARDS, TOTAL_DROIDS } from '../data/droids';
import { UI } from '../data/ui';
import { t } from '../lib/t';
import { useAppUpdate } from '../hooks/useAppUpdate';
import { useLocation } from 'react-router-dom';

interface Props {
  collected: Set<string>;
  rebirthLevel: number;
  isMissingActive: boolean;
  onShowMissing: () => void;
}

export function Header({
  collected,
  rebirthLevel,
  isMissingActive,
  onShowMissing,
}: Props) {
	const collectedCount = ALL_CARDS.filter((card) =>
  collected.has(card.id)
).length;
  const missingCount = TOTAL_DROIDS - collectedCount;
  const knownTotal = ALL_CARDS.length;
  const pct = Math.round((collectedCount / TOTAL_DROIDS) * 100);
  const { updateAvailable, latestVersion } = useAppUpdate();
  const location = useLocation();

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
      {/* Dashboard */}
      <div className="grid gap-3">
        {/* 2x3 Dashboard */}
        <div className="grid grid-cols-3 grid-rows-2 gap-x-3 gap-y-2 items-center">
          {/* REBIRTH */}
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
        min-w-[110px]
        transition-colors
        ${
          isActive
            ? 'bg-zinc-900 border-orange-700 text-orange-400'
            : 'bg-zinc-900 border-zinc-700 text-zinc-500'
        }
      `
            }
          >
            <span className="text-xs uppercase tracking-widest">
              {t(UI.rebirth)}
            </span>

            <span className="font-bold text-xl leading-none">
              {rebirthLevel}
            </span>
          </NavLink>

          {/* LOGO (über beide Reihen) */}
          <div
            className="
    row-span-2
    flex
    justify-center
    items-center
    drop-shadow-[0_0_18px_rgba(0,229,255,0.35)]
  "
          >
            <Link to="/">
              <img
                src={`${import.meta.env.BASE_URL}icon-192.png`}
                alt="Droidex"
                className="
				h-[68px] 
				w-[68px]
        object-contain
      "
              />
            </Link>
          </div>
          {/* GESAMMELT */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `
        flex
        items-center
        gap-2
        rounded-lg
        px-3
        py-1.5
        border
        ${
          isActive
            ? 'bg-zinc-900 border-cyan-700 text-cyan-400'
            : 'bg-zinc-900 border-zinc-700 text-zinc-500'
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

          {/* OFFLINE */}
          <OfflineTimer />

          {/* FEHLEND */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onShowMissing}
              className={`
          flex
          items-center
          gap-2
          rounded-lg
          px-3
          py-1.5
          border
          ${
            isMissingActive
              ? 'border-red-500 bg-red-950 text-red-300'
              : 'border-red-800 bg-zinc-900 text-red-400'
          }
        `}
            >
              <span className="text-xs uppercase tracking-wide">FEHLEND</span>

              <span className="font-bold text-lg leading-none">
                {missingCount}
              </span>
            </button>
          </div>
        </div>

        {/* PROGRESS */}
        <div>
          <div
            className="
        h-4
        bg-zinc-800
        rounded-full
        overflow-hidden
        relative
      "
          >
            <div
              className="
          h-full
          bg-gradient-to-r
          from-cyan-500
          to-cyan-300
          transition-all
          duration-300
        "
              style={{ width: `${pct}%` }}
            />

            <span
              className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          text-[10px]
          font-bold
          text-black
          pointer-events-none
        "
            >
              {pct}%
            </span>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="hidden sm:block text-[10px] text-zinc-600">
        {knownTotal} {t(UI.tracked)}
        {' · '}
        {TOTAL_DROIDS - knownTotal} {t(UI.unknown)}
      </div>

      {updateAvailable && location.pathname !== '/about' && (
        <NavLink
          to="/about"
          className="  
      text-xs  
      text-cyan-400  
      px-1  
      hover:text-cyan-300  
    "
        >
          ⬤ UPDATE VERFÜGBAR · v{latestVersion}
        </NavLink>
      )}
    </header>
  );
}
