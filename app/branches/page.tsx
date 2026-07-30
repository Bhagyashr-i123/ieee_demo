import { SectionHeading } from "@/components/shared/SectionHeading";
import { BranchDirectoryClient } from "@/components/branches/BranchDirectoryClient";

export const metadata = { title: "Branch Directory | IEEE NKSS SAC" };

export default function BranchesPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="The network"
            title="Student Branch Directory"
            description="42 branches across North Karnataka. Click a map node or search below."
          />
          <div className="mt-12">
            <BranchDirectoryClient />
          </div>
        </div>
      </section>
    </div>
  );
}
