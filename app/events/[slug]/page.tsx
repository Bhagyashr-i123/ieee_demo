import Image from "next/image";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { events } from "@/lib/data/events";
import { StatusPill, Tag } from "@/components/shared/Badge";
import { Countdown } from "@/components/shared/Countdown";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const event = events.find((e) => e.slug === params.slug);
  return { title: event ? `${event.title} | IEEE NKSS SAC` : "Event | IEEE NKSS SAC" };
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = events.find((e) => e.slug === params.slug);
  if (!event) notFound();

  const isUpcoming = parseISO(event.date).getTime() > Date.now();

  return (
    <div className="pt-[72px]">
      <div className="relative h-72 w-full md:h-96">
        <Image src={event.cover} alt="" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-signalNavy/90 to-transparent" />
        <div className="container-shell absolute inset-x-0 bottom-0 pb-8">
          <div className="mb-3 flex items-center gap-3">
            <Tag>{event.type}</Tag>
            <StatusPill status={event.status} />
          </div>
          <h1 className="font-display text-3xl font-semibold text-white md:text-5xl">
            {event.title}
          </h1>
          <p className="mt-2 text-mist">{event.branch}</p>
        </div>
      </div>

      <section className="py-14">
        <div className="container-shell grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">About this event</h2>
            <p className="mt-3 text-mist">{event.summary}</p>

            <h2 className="mt-10 font-display text-xl font-semibold text-ink">Schedule</h2>
            <ul className="mt-3 space-y-3 text-sm">
              <li className="flex justify-between border-b border-signalNavy/8 pb-2">
                <span>Registration & check-in</span>
                <span className="font-mono text-mist">9:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-signalNavy/8 pb-2">
                <span>Opening keynote</span>
                <span className="font-mono text-mist">9:30 AM</span>
              </li>
              <li className="flex justify-between border-b border-signalNavy/8 pb-2">
                <span>Main sessions</span>
                <span className="font-mono text-mist">10:00 AM – 4:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Closing & certificates</span>
                <span className="font-mono text-mist">4:30 PM</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            {isUpcoming && (
              <div>
                <p className="mb-3 text-sm font-semibold text-ink">Starts in</p>
                <Countdown date={event.date} />
              </div>
            )}
            <div className="rounded-xl2 border border-signalNavy/8 p-5">
              <p className="text-sm text-mist">Date</p>
              <p className="font-display font-semibold text-ink">
                {format(parseISO(event.date), "EEEE, d MMMM yyyy")}
              </p>
              <p className="mt-3 text-sm text-mist">Hosted by</p>
              <p className="font-display font-semibold text-ink">{event.branch}</p>
            </div>
            <button
              disabled={event.status === "closed"}
              className="w-full rounded-full bg-ieeeBlue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ieeeBlue/90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {event.status === "closed" ? "Registration closed" : "Register now"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
