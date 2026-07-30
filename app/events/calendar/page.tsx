"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isSameMonth,
  isSameDay,
  parseISO,
  addMonths,
  subMonths,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { events } from "@/lib/data/events";
import { StatusPill } from "@/components/shared/Badge";
import { EmptyState } from "@/components/shared/EmptyState";

export default function EventCalendarPage() {
  const [month, setMonth] = useState(new Date("2026-08-01"));
  const [selected, setSelected] = useState<Date | null>(null);

  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(month));
    const end = endOfWeek(endOfMonth(month));
    return eachDayOfInterval({ start, end });
  }, [month]);

  const eventsByDay = (day: Date) =>
    events.filter((e) => isSameDay(parseISO(e.date), day));

  const dayEvents = selected ? eventsByDay(selected) : [];

  return (
    <div className="pt-[72px]">
      <section className="py-20">
        <div className="container-shell">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="font-display text-3xl font-semibold text-ink">
              {format(month, "MMMM yyyy")}
            </h1>
            <div className="flex items-center gap-2">
              <button
                aria-label="Previous month"
                onClick={() => setMonth((m) => subMonths(m, 1))}
                className="rounded-full border border-signalNavy/15 p-2 hover:border-ieeeBlue"
              >
                <ChevronLeft size={16} />
              </button>
              <Link href="/events" className="text-sm font-semibold text-ieeeBlue hover:underline">
                List view
              </Link>
              <button
                aria-label="Next month"
                onClick={() => setMonth((m) => addMonths(m, 1))}
                className="rounded-full border border-signalNavy/15 p-2 hover:border-ieeeBlue"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Calendar grid — hidden on very small screens in favor of the list, per Phase 2 spec */}
          <div className="hidden md:block">
            <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-mist">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-7 gap-2">
              {days.map((day) => {
                const dayHasEvents = eventsByDay(day);
                const inMonth = isSameMonth(day, month);
                const isSelected = selected && isSameDay(day, selected);
                return (
                  <button
                    key={day.toISOString()}
                    onClick={() => setSelected(day)}
                    className={`flex h-20 flex-col items-start rounded-lg border p-2 text-left transition-colors ${
                      isSelected ? "border-ieeeBlue bg-ieeeBlue/5" : "border-signalNavy/8"
                    } ${!inMonth ? "opacity-30" : ""}`}
                  >
                    <span className="font-mono text-xs">{format(day, "d")}</span>
                    {dayHasEvents.length > 0 && (
                      <span className="mt-auto h-1.5 w-1.5 rounded-full bg-signalCyan" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="mb-4 font-display text-lg font-semibold text-ink">
              {selected ? format(selected, "EEEE, d MMMM") : "Select a date"}
            </h2>
            {!selected || dayEvents.length === 0 ? (
              <EmptyState message="No events on this day." />
            ) : (
              <div className="space-y-3">
                {dayEvents.map((e) => (
                  <Link
                    key={e.slug}
                    href={`/events/${e.slug}`}
                    className="flex items-center justify-between rounded-xl2 border border-signalNavy/8 p-4 hover:border-ieeeBlue"
                  >
                    <div>
                      <p className="font-display font-semibold text-ink">{e.title}</p>
                      <p className="text-sm text-mist">{e.branch}</p>
                    </div>
                    <StatusPill status={e.status} />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
