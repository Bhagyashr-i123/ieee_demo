import Link from "next/link";

const announcements = [
  "Registrations open for SignalHacks 2026 — Sept 5-6",
  "Nominations open for the NKSS Volunteer of the Year award",
  "New resource pack: IEEE branding & templates for 2026-27",
];

export default function AnnouncementTicker() {
  const loop = [...announcements, ...announcements];
  return (
    <div className="group overflow-hidden border-b border-white/5 bg-signalNavyLight py-2.5">
      <div className="flex w-max animate-[scroll_28s_linear_infinite] gap-12 group-hover:[animation-play-state:paused]">
        {loop.map((a, i) => (
          <Link
            key={i}
            href="/announcements"
            className="whitespace-nowrap text-sm text-mist transition-colors hover:text-signalCyan"
          >
            <span className="mr-2 text-signalCyan">●</span>
            {a}
          </Link>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}