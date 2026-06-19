import { OfflineTimer } from './OfflineTimer';
import { Link, NavLink } from 'react-router-dom';
import { ALL_CARDS, TOTAL_DROIDS } from '../data/droids';
import { UI } from '../data/ui';
import { t } from '../lib/t';
import { useAppUpdate } from '../hooks/useAppUpdate';
import { useLocation } from 'react-router-dom';

interface Props {
  collected: Set<string>;
  flawless: Set<string>;
  rebirthLevel: number;

  onShowMissing: () => void;
}

export function Header({
  collected,
  flawless,
  rebirthLevel,

  onShowMissing,
}: Props) {
  const collectedCount = ALL_CARDS.filter((card) =>
    collected.has(card.id)
  ).length;

  const flawlessCount = ALL_CARDS.filter((card) =>
    flawless.has(card.id)
  ).length;

  const flawlessPct = Math.round((flawlessCount / TOTAL_DROIDS) * 100);

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
      <div className="grid gap-1">
        {/* 2x2 Dashboard */}
        <div className="grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-2 items-center">
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
				py-1.5
        
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
            <span
              className="
    text-xs
    font-bold
    uppercase
    tracking-widest
    text-orange-400
    drop-shadow-[0_0_4px_rgba(251,146,60,0.45)]
  "
            >
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
		opacity-85
  "
          >
            <Link to="/">
              <img
                src={`${import.meta.env.BASE_URL}icon-192.png`}
                alt="Droidex"
                className="
				h-[88px] 
				w-[88px]
        object-contain
      "
              />
            </Link>
          </div>

          {/* OFFLINE */}
          <div className="col-start-3 flex justify-end">
            <OfflineTimer />
          </div>
        </div>

        {/* COLLECTED */}
        <div className="mb-0">
          <div className="relative h-3 rounded-full overflow-hidden flex">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0 })}
              className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300"
              style={{ width: `${pct}%` }}
            />

            <button
              type="button"
              onClick={onShowMissing}
              className="h-full bg-red-800 hover:bg-red-900 transition-colors"
              style={{ width: `${100 - pct}%` }}
            />

            <span
              className="
    absolute inset-0
    flex items-center justify-between
    px-3
py-1.3
    text-[9px] font-bold
    text-zinc-800
    pointer-events-none
  "
            >
              <span>COLLECTED {collectedCount}</span>
              <span>{TOTAL_DROIDS - collectedCount} MISSING</span>
            </span>
          </div>
        </div>

        {/* FLAWLESS */}

        <div className="relative h-3 bg-zinc-800 rounded-full overflow-hidden flex">
          <button
            type="button"
            className="h-full bg-gradient-to-r from-zinc-100 to-white"
            style={{ width: `${flawlessPct}%` }}
          />

          <button
            type="button"
            className="h-full bg-zinc-500"
            style={{ width: `${100 - flawlessPct}%` }}
          />
          <span
            className="
    absolute inset-0
    flex items-center justify-between
    px-3
    text-[9px] font-bold
    text-zinc-800
    pointer-events-none
  "
          >
            <span>FLAWLESS {flawlessCount}</span>
            <span>{TOTAL_DROIDS - flawlessCount} OPEN</span>
          </span>
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
