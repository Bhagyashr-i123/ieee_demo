import { notFound } from "next/navigation";
import { branches } from "@/lib/data/branches";
import { events } from "@/lib/data/events";
import { EventCard } from "@/components/events/EventCard";
import { EmptyState } from "@/components/shared/EmptyState";

export function generateStaticParams() {
  return branches.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const branch = branches.find((b) => b.slug === params.slug);
  return { title: branch ? `${branch.name} | IEEE NKSS SAC` : "Branch | IEEE NKSS SAC" };
}

export default function BranchDetailPage({ params }: { params: { slug: string } }) {
  const branch = branches.find((b) => b.slug === params.slug);
  if (!branch) notFound();

  const branchEvents = events.filter((e) => e.branch === branch.name || e.branch.includes(branch.institution));

  return (
    <div className="pt-[72px]">
      <section className="bg-signal-gradient py-16">
        <div className="container-shell">
          <p className="font-mono text-xs uppercase tracking-wide text-signalCyan">{branch.district}</p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-white">{branch.name}</h1>
          <p className="mt-2 text-mist">{branch.institution}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-shell grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="rounded-xl2 border border-signalNavy/8 p-6 text-center">
            <p className="font-mono text-2xl font-semibold text-ieeeBlue">{branch.members}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-mist">Members</p>
          </div>
          <div className="rounded-xl2 border border-signalNavy/8 p-6 text-center">
            <p className="font-display text-lg font-semibold text-ink">{branch.counselor}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-mist">Branch Counselor</p>
          </div>
          <div className="rounded-xl2 border border-signalNavy/8 p-6 text-center">
            <p className="font-display text-lg font-semibold text-ink">{branch.district}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-mist">District</p>
          </div>
        </div>

        <div className="container-shell mt-16">
          <h2 className="mb-6 font-display text-xl font-semibold text-ink">Events from this branch</h2>
          {branchEvents.length === 0 ? (
            <EmptyState message="No events from this branch yet." />
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {branchEvents.map((e) => (
                <EventCard key={e.slug} event={e} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
