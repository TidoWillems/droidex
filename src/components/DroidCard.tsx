import { UI } from '../data/ui';
import { t } from '../lib/t';
import { useState } from 'react';
import {
  Wrench,
  Satellite,
  Crosshair,
  RefreshCw,
  type LucideIcon,
} from 'lucide-react';
import type { DroidCard as DroidCardType } from '../data/droids';
import { DROID_INFO } from '../data/droidInfo';

interface Props {
  card: DroidCardType;

  collected: boolean;
  present: boolean;
  flawless: boolean;

  onToggle: (id: string) => void;
  onTogglePresent: (id: string) => void;
  onToggleFlawless: (id: string) => void;

  highlighted?: boolean;
  rebirthLevels?: number[];
  lastRequiredRebirth?: number;
  currentRebirth?: number;
}

const RARITY_COLOR: Record<string, string> = {
  COMMON: '#16a34a',
  RARE: '#3b82f6',
  EPIC: '#a855f7',
  LEGENDARY: '#f59e0b',
  ICONIC: '#ff00aa',
};

const TYPE_BADGE: Record<string, { Icon: LucideIcon; bg: string }> = {
  WORKER: { Icon: Wrench, bg: '#16a34a' },
  ASTROMECH: { Icon: Satellite, bg: '#7c3aed' },
  BATTLE: { Icon: Crosshair, bg: '#dc2626' },
};

const TIER_BORDER: Record<string, string> = {
  DEFAULT: 'border-zinc-600',
  GOLD: 'border-amber-400',
  DIAMOND: 'border-sky-300',
  RAINBOW: 'border-transparent',
};

const TIER_GLOW: Record<string, string> = {
  DEFAULT: '',
  GOLD: '0 0 10px 2px rgba(251,191,36,0.4)',
  DIAMOND: '0 0 10px 2px rgba(147,220,255,0.4)',
  RAINBOW: '0 0 12px 3px rgba(168,85,247,0.4)',
};

function imgSrc(name: string, tier: string): string {
  const safe = name.replace(/ /g, '_');
  return `${import.meta.env.BASE_URL}droids/${safe}_${tier}.png`;
}

export function DroidCard({
  card,

  collected,
  present,
  flawless,

  onToggle,
  onTogglePresent,
  onToggleFlawless,

  highlighted,
  rebirthLevels,
  lastRequiredRebirth,
  currentRebirth,
}: Props) {
  const { droid, tier, id } = card;
  const rarityColor = RARITY_COLOR[droid.rarity];
  const badge = TYPE_BADGE[droid.type];
  const isRainbow = tier === 'RAINBOW';
  const [imgFailed, setImgFailed] = useState(false);

  const isPresent = present;
  const info = DROID_INFO[droid.name];
  const canBeFlawless = droid.canBeFlawless !== false;
  const isSafe =
    lastRequiredRebirth !== undefined &&
    currentRebirth !== undefined &&
    currentRebirth > lastRequiredRebirth;

  const ringClass = highlighted
    ? 'ring-2 ring-yellow-400 ring-inset'
    : collected
      ? 'ring-2 ring-cyan-400 ring-inset'
      : '';

  return (
    <button
      type="button"
      onClick={() => onToggle(id)}
      title={`${droid.name} (${tier}) — ${t(UI.cardToggle)}`}
      className={[
        'relative flex flex-col rounded-lg border-4 overflow-hidden',
        'transition-all duration-150 select-none cursor-pointer',
        'bg-zinc-900 active:scale-95 droid-card',
        collected || highlighted
          ? 'hover:brightness-110'
          : 'opacity-40 hover:opacity-90',
        TIER_BORDER[tier],
        isRainbow ? 'rainbow-border-animated' : '',
        ringClass,
      ].join(' ')}
      style={{
        boxShadow: TIER_GLOW[tier] || undefined,
      }}
    >
      {/* Droid image */}
      <div className="relative w-full flex-1 min-h-[6rem] overflow-hidden bg-zinc-800">
        {!imgFailed ? (
          <img
            src={imgSrc(droid.name, tier)}
            alt={droid.name}
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover"
            draggable={false}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ color: rarityColor }}
          >
            <badge.Icon size={32} />
          </div>
        )}
        <div className="tv-distortion" />
      </div>
      {/* Footer */}
      <div className="w-full bg-black px-1.5 pt-1 pb-0.5 min-h-[5.2rem]">
        <p className="text-white font-black italic leading-tight truncate text-sm">
          {droid.name}
        </p>
        <p className="flex items-center justify-center gap-1 text-[9px] uppercase tracking-wider text-zinc-500">
          <badge.Icon size={10} />
          {droid.type}
        </p>
        <div className="mt-0.5">
          <span
            className="text-[9px] font-bold px-1.5 py-px rounded-full uppercase tracking-wide inline-block"
            style={{
              color: rarityColor,
              backgroundColor: rarityColor + '22',
              border: `1px solid ${rarityColor}66`,
            }}
          >
            {droid.rarity}
          </span>
        </div>

        {info?.abilities && (
          <div className="mt-1 flex flex-wrap gap-1">
            {info.abilities.map((ability) => (
              <span
                key={ability}
                className="
          text-[8px]
          px-1
          py-px
          rounded
          border
          border-cyan-500/40
          bg-cyan-500/10
          text-cyan-300
        "
              >
                {ability}
              </span>
            ))}
          </div>
        )}

        {rebirthLevels && rebirthLevels.length > 0 && (
          <div className="mt-auto pt-1 -mx-1">
            <span
              className="
w-full
h-5
px-0.5
rounded-full
border
border-orange-500/40
bg-orange-500/15
text-orange-400
text-[9px]
font-bold
uppercase
tracking-wide
flex
items-center
justify-between
"
              title={`${
                rebirthLevels.length > 1
                  ? t(UI.rebirthRequiredPlural)
                  : t(UI.rebirthRequired)
              } ${rebirthLevels.join(', ')}`}
              onClick={(e) => {
                e.stopPropagation();
                onTogglePresent(id);
              }}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full border border-black/40 ${
                  isPresent ? 'bg-green-500' : 'bg-zinc-500'
                }`}
              />

              <span className="flex items-center gap-1">
                <RefreshCw size={8} />
                {rebirthLevels.join('·')}
              </span>

              <span className="w-3 text-right">{isSafe ? '✓' : ''}</span>
            </span>
          </div>
        )}
      </div>
      {/* Flawless */}
      {canBeFlawless && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            onToggleFlawless(droid.name);
          }}
          className={`
      absolute
      top-0.5
      left-0.5
      z-20
      w-5
      h-5
      rounded-full
      flex
      items-center
      justify-center
      cursor-pointer
      transition-all
      ${
        flawless
          ? 'bg-yellow-500 shadow-[0_0_12px_rgba(255,215,0,0.9)]'
          : 'bg-black/50 border-2 border-zinc-500'
      }
    `}
          title="Flawless"
        >
          <span
            className={`text-lg leading-none transition-all ${
              flawless
                ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]'
                : 'text-zinc-500'
            }`}
          >
            ✦
          </span>
        </div>
      )}
      {/* Collected checkmark — top left */}
      {collected && (
        <div className="absolute top-0.5 right-0.5 z-20 w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center transition-all">
          {' '}
          <svg
            viewBox="0 0 10 10"
            className="w-3 h-3 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              d="M1.5 5l2.5 2.5 4.5-4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />{' '}
          </svg>
        </div>
      )}
      {/* Event locked overlay */}
      {droid.eventLocked && !collected && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <span className="text-red-400 text-[10px] font-bold text-center leading-tight px-1">
            {t(UI.eventLocked)
              .split(' ')
              .map((line) => (
                <div key={line}>{line}</div>
              ))}
          </span>
        </div>
      )}
    </button>
  );
}
