import { SectionHeading } from "@/components/shared/SectionHeading";
import { EventListClient } from "@/components/events/EventListClient";

export const metadata = { title: "Events | IEEE NKSS SAC" };

export default function EventsPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Across the network"
            title="Events"
            description="Workshops, hackathons, conferences, and meetups from every branch in the subsection."
          />
          <div className="mt-12">
            <EventListClient />
          </div>
        </div>
      </section>
    </div>
  );
}
