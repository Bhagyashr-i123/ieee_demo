import { SectionHeading } from "@/components/shared/SectionHeading";
import { Timeline } from "@/components/shared/Timeline";
import { milestones } from "@/lib/data/achievements";

export const metadata = { title: "About | IEEE NKSS SAC" };

export default function AboutPage() {
  return (
    <div className="pt-[72px]">
      <section className="bg-signal-gradient py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="About"
            title="Why the SAC exists"
            light
            description="The Student Activities Committee coordinates and amplifies the work of every IEEE student branch across the North Karnataka Subsection — so no branch has to build alone."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="rounded-xl2 border border-signalNavy/8 p-6 text-center">
            <p className="font-mono text-3xl font-semibold text-ieeeBlue">IEEE Region 10</p>
            <p className="mt-2 text-sm text-mist">Asia Pacific</p>
          </div>
          <div className="rounded-xl2 border border-signalNavy/8 p-6 text-center">
            <p className="font-mono text-3xl font-semibold text-ieeeBlue">Bangalore Section</p>
            <p className="mt-2 text-sm text-mist">Parent section</p>
          </div>
          <div className="rounded-xl2 border border-signalNavy/8 p-6 text-center">
            <p className="font-mono text-3xl font-semibold text-ieeeBlue">North Karnataka Subsection</p>
            <p className="mt-2 text-sm text-mist">42 chartered student branches</p>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="container-shell">
          <SectionHeading eyebrow="History" title="How we got here" align="center" />
          <div className="mt-12">
            <Timeline nodes={milestones.slice().reverse()} />
          </div>
        </div>
      </section>
    </div>
  );
}
