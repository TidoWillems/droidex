import { PanelHeader } from './PanelHeader';

type PanelProps = {
  title?: string;
  header?: React.ReactNode;

  children: React.ReactNode;

  open: boolean;
  onToggle: () => void;

  scroll?: boolean;
  fill?: boolean;
};

export function Panel({
  title,
  header,
  children,
  open,
  onToggle,
  scroll = false,
  fill = false,
}: PanelProps) {
  const panelHeader = header ?? (
    <PanelHeader title={title!} open={open} onToggle={onToggle} />
  );

  return (
    <div className="flex flex-col">
      {panelHeader}

      {open &&
        (scroll ? (
          <div className="flex-1 min-h-0 overflow-y-auto">{children}</div>
        ) : (
          <div className={fill ? 'flex-1 min-h-0' : ''}>{children}</div>
        ))}
    </div>
  );
}
