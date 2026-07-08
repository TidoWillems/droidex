import { type LucideIcon } from 'lucide-react';

interface Props {
  droidName: string;
  tier: string;

  rarityColor: string;

  badge: {
    Icon: LucideIcon;
    bg: string;
  };

  imgFailed: boolean;
  onImageError: () => void;
}

function imgSrc(name: string, tier: string): string {
  const safe = name.replace(/ /g, '_');
  return `${import.meta.env.BASE_URL}droids/${safe}_${tier}.png`;
}

export function DroidImage({
  droidName,
  tier,
  rarityColor,
  badge,
  imgFailed,
  onImageError,
}: Props) {
  return (
    <div className="relative w-full flex-1 min-h-[6rem] overflow-hidden bg-zinc-800">
      {!imgFailed ? (
        <img
          src={imgSrc(droidName, tier)}
          alt={droidName}
          onError={onImageError}
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
  );
}
