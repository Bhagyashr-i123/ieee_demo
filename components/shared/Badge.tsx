import { clsx } from "clsx";

type Status = "open" | "closing" | "closed";

const statusLabel: Record<Status, string> = {
  open: "Registrations open",
  closing: "Closing soon",
  closed: "Closed",
};

export function StatusPill({ status }: { status: Status }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        status === "open" && "status-open",
        status === "closing" && "status-closing",
        status === "closed" && "status-closed"
      )}
    >
      <span
        className={clsx(
          "h-1.5 w-1.5 rounded-full",
          status === "open" && "bg-success",
          status === "closing" && "bg-warning",
          status === "closed" && "bg-danger"
        )}
      />
      {statusLabel[status]}
    </span>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-signalNavy/5 px-2.5 py-1 text-xs font-medium text-signalNavy/80 dark:bg-white/10 dark:text-mist">
      {children}
    </span>
  );
}
