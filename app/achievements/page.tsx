import { SectionHeading } from "@/components/shared/SectionHeading";
import { Timeline } from "@/components/shared/Timeline";
import { milestones } from "@/lib/data/achievements";

export const metadata = { title: "Achievements | IEEE NKSS SAC" };

export default function AchievementsPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Our record"
            title="Achievements"
            align="center"
            description="Milestones from across the subsection's history, most recent first."
          />
          <div className="mt-16">
            <Timeline nodes={milestones} />
          </div>
        </div>
      </section>
    </div>
  );
}
