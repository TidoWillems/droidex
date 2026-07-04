import { PanelHeader } from './PanelHeader';

type PanelProps = {
  title: string;
  children: React.ReactNode;

  open: boolean;
  onToggle: () => void;

  scroll?: boolean;
  fill?: boolean;
};

export function Panel({
  title,
  children,
  open,
  onToggle,
  scroll = false,
  fill = false,
}: PanelProps) {
  if (!open) {
    return (
      <div className="flex flex-col">
        <PanelHeader title={title} open={false} onToggle={onToggle} />
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <PanelHeader title={title} open={true} onToggle={onToggle} />

      {scroll ? (
        <div className="flex-1 min-h-0 overflow-y-auto">{children}</div>
      ) : (
        <div className={fill ? 'flex-1 min-h-0' : ''}>{children}</div>
      )}
    </div>
  );
}
