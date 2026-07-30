import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { EventItem } from "@/lib/data/events";
import { StatusPill, Tag } from "@/components/shared/Badge";
import { Card } from "@/components/shared/Card";

export function EventCard({ event }: { event: EventItem }) {
  return (
    <Link href={`/events/${event.slug}`}>
      <Card className="flex h-full flex-col overflow-hidden !p-0">
        <div className="relative h-40 w-full">
          <Image src={event.cover} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-center justify-between">
            <Tag>{event.type}</Tag>
            <StatusPill status={event.status} />
          </div>
          <h3 className="font-display text-lg font-semibold text-ink">{event.title}</h3>
          <p className="text-sm text-mist">{event.branch}</p>
          <p className="mt-auto font-mono text-xs text-mist">
            {format(parseISO(event.date), "d MMM yyyy")}
          </p>
        </div>
      </Card>
    </Link>
  );
}
