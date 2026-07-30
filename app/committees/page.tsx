import { SectionHeading } from "@/components/shared/SectionHeading";
import { CommitteeExplorer } from "@/components/committees/CommitteeExplorer";

export const metadata = { title: "Committees | IEEE NKSS SAC" };

export default function CommitteesPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Structure"
            title="Committee Explorer"
            description="Click a node to see its mandate and members. On mobile, this collapses to a simple list."
          />
          <div className="mt-12">
            <CommitteeExplorer />
          </div>
        </div>
      </section>
    </div>
  );
}
