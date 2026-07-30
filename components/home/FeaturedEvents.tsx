import Image from "next/image";
import Link from "next/link";
import { events } from "@/lib/data/events";
import { format, parseISO } from "date-fns";

const statusStyles: Record<string, string> = {
  open: "bg-success/10 text-success border-success/30",
  closing: "bg-warning/10 text-warning border-warning/30",
  closed: "bg-danger/10 text-danger border-danger/30",
};

export default function FeaturedEvents() {
  const featured = events.slice(0, 3);
  return (
    <section className="relative overflow-hidden bg-signalNavy py-20">
      <div className="glow-blob left-0 top-1/3 h-72 w-72 bg-signalCyan/10" />
      <div className="container-shell relative">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-signalCyan">
              What&apos;s happening
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-white md:text-4xl">
              Featured events
            </h2>
            <p className="mt-2 max-w-md text-sm text-mist">
              A sample of what&apos;s running across the network right now.
            </p>
          </div>
          <Link href="/events" className="text-sm font-semibold text-signalCyan hover:underline">
            View all events →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((event) => (
            <Link key={event.slug} href={`/events/${event.slug}`}>
              <div className="glass-panel glass-panel-hover flex h-full flex-col overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image
                    src={event.cover}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-signalNavy/80 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-mist">
                      {event.type}
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs ${
                        statusStyles[event.status] ?? statusStyles.open
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {event.title}
                  </h3>
                  <p className="text-sm text-mist">{event.branch}</p>
                  <p className="mt-auto font-mono text-xs text-mist">
                    {format(parseISO(event.date), "d MMM yyyy")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}