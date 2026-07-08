interface Props {
  visible: boolean;
}

export function OwnedBadge({ visible }: Props) {
  if (!visible) return null;

  return (
    <div className="absolute top-0.5 right-0.5 z-20 w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center transition-all">
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
        />
      </svg>
    </div>
  );
}
