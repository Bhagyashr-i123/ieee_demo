"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { events, EventItem } from "@/lib/data/events";
import { FilterBar } from "@/components/shared/FilterBar";
import { EventCard } from "@/components/events/EventCard";
import { EmptyState } from "@/components/shared/EmptyState";

type EventType = EventItem["type"];
const types: EventType[] = ["Workshop", "Hackathon", "Conference", "Webinar", "Meetup"];

export function EventListClient() {
  const [type, setType] = useState<EventType | "All">("All");

  const filtered = useMemo(
    () => events.filter((e) => type === "All" || e.type === type),
    [type]
  );

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <FilterBar options={types} active={type} onChange={setType} />
        <Link href="/events/calendar" className="text-sm font-semibold text-ieeeBlue hover:underline">
          View calendar →
        </Link>
      </div>

      <div className="mt-8">
        {filtered.length === 0 ? (
          <EmptyState message="No events match this filter yet — check back soon." />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filtered.map((e) => (
              <EventCard key={e.slug} event={e} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
