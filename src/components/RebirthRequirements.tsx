import { RequiredDroidCard } from './RequiredDroidCard';
import { RequiredCreditsCard } from './RequiredCreditsCard';
import type { RequiredDroid } from '../lib/types';

interface Props {
  requiredCredits: string;
  requiredDroids: readonly RequiredDroid[];
  collected: Set<string>;
  present: Set<string>;
  futureUseCountMap: Record<string, number>;
}

export function RebirthRequirements({
  requiredCredits,
  requiredDroids,
  collected,
  present,
  futureUseCountMap,
}: Props) {
  return (
    <div className="rounded-xl border border-zinc-800/80 px-4 py-3 bg-black/40">
      <div className="flex flex-wrap gap-3 justify-center">
        <RequiredCreditsCard requiredCredits={requiredCredits} />

        {/* Droid cards */}
        {requiredDroids.map((droid) => (
          <RequiredDroidCard
            key={droid.cardId}
            droid={droid}
            collected={collected}
            present={present}
            futureUseCountMap={futureUseCountMap}
          />
        ))}
      </div>
    </div>
  );
}
