import Link from "next/link";
import { Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import { NewsletterForm } from "./NewsletterForm";

const exploreLinks = [
  { href: "/about", label: "About" },
  { href: "/committees", label: "Committees" },
  { href: "/events", label: "Events" },
  { href: "/branches", label: "Branch Directory" },
];

const involveLinks = [
  { href: "/resources", label: "Resources" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
  { href: "https://www.ieee.org/membership/join/index.html", label: "Join IEEE" },
];

export default function Footer() {
  return (
    <footer className="bg-signalNavy text-mist">
      <div className="container-shell grid grid-cols-1 gap-10 py-16 md:grid-cols-4">
        <div>
          {/* Official NKSS logo (light variant) from the IEEE media kit */}
          <p className="font-display text-lg font-semibold text-white">
            IEEE <span className="text-signalCyan">NKSS</span> SAC
          </p>
          <p className="mt-3 text-sm">
            Student Activities Committee of the IEEE North Karnataka Subsection,
            IEEE Region 10 — connecting student branches across North Karnataka.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-white">Explore</p>
          <ul className="space-y-2 text-sm">
            {exploreLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-signalCyan">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-white">Get Involved</p>
          <ul className="space-y-2 text-sm">
            {involveLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-signalCyan">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-white">Connect</p>
          <div className="flex gap-4">
            <a aria-label="LinkedIn" href="#" className="hover:text-signalCyan"><Linkedin size={18} /></a>
            <a aria-label="Instagram" href="#" className="hover:text-signalCyan"><Instagram size={18} /></a>
            <a aria-label="Twitter / X" href="#" className="hover:text-signalCyan"><Twitter size={18} /></a>
            <a aria-label="YouTube" href="#" className="hover:text-signalCyan"><Youtube size={18} /></a>
          </div>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-3 py-6 text-xs md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} IEEE North Karnataka Subsection SAC. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.ieee.org/accessibility-statement.html" className="hover:text-signalCyan">Accessibility</a>
            <a href="https://www.ieee.org/about/corporate/governance/p9-26.html" className="hover:text-signalCyan">Nondiscrimination Policy</a>
            <a href="https://www.ieee.org/security_privacy.html" className="hover:text-signalCyan">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
