import { Mail, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = { title: "Contact | IEEE NKSS SAC" };

export default function ContactPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-20">
        <div className="container-shell grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="Contact the SAC"
              description="Questions about starting a branch, joining a committee, or partnering on an event — reach out."
            />
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="rounded-xl2 border border-signalNavy/8 p-6">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 text-ieeeBlue" size={18} />
                <div>
                  <p className="font-display font-semibold text-ink">Email</p>
                  <p className="text-sm text-mist">sac@ieeenkss.org</p>
                </div>
              </div>
              <div className="mt-5 flex items-start gap-3">
                <MapPin className="mt-1 text-ieeeBlue" size={18} />
                <div>
                  <p className="font-display font-semibold text-ink">Region</p>
                  <p className="text-sm text-mist">North Karnataka Subsection, IEEE Region 10</p>
                </div>
              </div>
            </div>
            <div className="h-64 overflow-hidden rounded-xl2 border border-signalNavy/8">
              <iframe
                title="North Karnataka map"
                className="h-full w-full"
                loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=74.5%2C15.0%2C76.5%2C17.0&layer=mapnik"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
