import { format, parseISO } from "date-fns";
import { announcements } from "@/lib/data/announcements";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Tag } from "@/components/shared/Badge";

export const metadata = { title: "Announcements | IEEE NKSS SAC" };

export default function AnnouncementsPage() {
  const pinned = announcements.filter((a) => a.pinned);
  const rest = announcements.filter((a) => !a.pinned);

  return (
    <div className="pt-[72px]">
      <section className="py-20">
        <div className="container-shell max-w-3xl">
          <SectionHeading eyebrow="Stay in the loop" title="Announcements" />

          {pinned.length > 0 && (
            <div className="mt-10 space-y-4">
              {pinned.map((a) => (
                <div key={a.id} className="rounded-xl2 border-2 border-ieeeBlue/30 bg-ieeeBlue/5 p-5">
                  <div className="flex items-center gap-2">
                    <Tag>{a.category}</Tag>
                    <span className="text-xs font-semibold uppercase tracking-wide text-ieeeBlue">Pinned</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold text-ink">{a.title}</h3>
                  <p className="mt-1 text-sm text-mist">{a.body}</p>
                  <p className="mt-2 font-mono text-xs text-mist">{format(parseISO(a.date), "d MMM yyyy")}</p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 space-y-4">
            {rest.map((a) => (
              <div key={a.id} className="rounded-xl2 border border-signalNavy/8 p-5">
                <Tag>{a.category}</Tag>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">{a.title}</h3>
                <p className="mt-1 text-sm text-mist">{a.body}</p>
                <p className="mt-2 font-mono text-xs text-mist">{format(parseISO(a.date), "d MMM yyyy")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
