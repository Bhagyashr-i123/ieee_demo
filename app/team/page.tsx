import Image from "next/image";
import { Linkedin } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { team, groupOrder } from "@/lib/data/team";

export const metadata = { title: "Team | IEEE NKSS SAC" };

export default function TeamPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Who runs the network"
            title="Meet the team"
            description="The volunteers, advisors, and members steering the SAC this term."
          />

          {groupOrder.map((group) => {
            const members = team.filter((p) => p.group === group);
            if (!members.length) return null;
            return (
              <div key={group} className="mt-14">
                <h3 className="mb-6 font-display text-xl font-semibold text-ink">{group}</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                  {members.map((p) => (
                    <Card key={p.name} className="text-center">
                      <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
                        <Image src={p.photo} alt="" fill className="object-cover" sizes="80px" />
                      </div>
                      <p className="mt-4 font-display font-semibold text-ink">{p.name}</p>
                      <p className="text-sm text-ieeeBlue">{p.role}</p>
                      <p className="mt-1 text-xs text-mist">{p.institution}</p>
                      {p.linkedin && (
                        <a href={p.linkedin} aria-label={`${p.name} on LinkedIn`} className="mt-3 inline-block text-mist hover:text-ieeeBlue">
                          <Linkedin size={16} />
                        </a>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
