interface PanelHeaderProps {
  title: string;
  open: boolean;
  onToggle: () => void;
}

export function PanelHeader({ title, open, onToggle }: PanelHeaderProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex items-center justify-between w-full px-4 py-2.5"
    >
      <span className="text-[10px] font-bold tracking-widest text-zinc-400">
        {title}
      </span>

      <span className="text-zinc-600 text-xs">{open ? '▲' : '▼'}</span>
    </button>
  );
}
