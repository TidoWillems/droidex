import { t } from '../lib/t';

type Tip = {
  id: string;

  category: string;
  priority: number;

  title: {
    de: string;
    en: string;
    fi: string;
  };

  text: {
    de: string;
    en: string;
    fi: string;
  };

  verified: boolean;
};

interface Props {
  tip: Tip;
}

export function TipCard({ tip }: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
      {/* Kopf */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-[10px] tracking-widest text-cyan-400 font-bold">
            [{tip.category}]
          </div>

          <h3 className="text-white font-bold mt-1">{t(tip.title)}</h3>
        </div>

        {/* Priorität */}
        <div
          className="text-yellow-400 text-xs shrink-0"
          title={`Importance ${tip.priority}/5`}
        >
          {'★'.repeat(tip.priority)}
        </div>
      </div>

      {/* Inhalt */}
      <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
        {t(tip.text)}
      </p>

      {/* Status */}
      <div className="mt-4 pt-3 border-t border-zinc-800">
        {tip.verified ? (
          <div className="text-green-400 text-xs font-semibold">
            ✓ VERIFIED INFO
          </div>
        ) : (
          <div className="text-amber-400 text-xs font-semibold">
            ⚠ COMMUNITY FINDING
          </div>
        )}
      </div>
    </div>
  );
}
