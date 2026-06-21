// src/components/TierDNA.tsx

interface Props {
  progress: number;
}

export function TierDNA({ progress }: Props) {
  return (
    <div className="flex justify-center gap-0.5 text-[6px] font-black">
      <span className={progress >= 1 ? 'text-zinc-300' : 'text-zinc-700'}>
        {progress >= 1 ? '■' : '□'}D
      </span>

      <span className={progress >= 2 ? 'text-amber-400' : 'text-zinc-700'}>
        {progress >= 2 ? '■' : '□'}G
      </span>

      <span className={progress >= 3 ? 'text-sky-300' : 'text-zinc-700'}>
        {progress >= 3 ? '■' : '□'}D
      </span>

      <span className={progress >= 4 ? 'text-purple-400' : 'text-zinc-700'}>
        {progress >= 4 ? '■' : '□'}R
      </span>

      <span className={progress >= 5 ? 'text-zinc-100' : 'text-zinc-700'}>
        {progress >= 5 ? '■' : '□'}B
      </span>
    </div>
  );
}
