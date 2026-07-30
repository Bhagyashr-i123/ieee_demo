import { Inbox } from "lucide-react";

export function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl2 border border-dashed border-signalNavy/15 py-16 text-center">
      <Inbox className="text-mist" size={28} />
      <p className="text-sm text-mist">{message}</p>
    </div>
  );
}
