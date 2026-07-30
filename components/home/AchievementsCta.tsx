import Link from "next/link";

const milestones = [
  { year: "2026", label: "Region 10 Best Subsection SAC Award" },
  { year: "2025", label: "5,000+ students reached across 40 branches" },
  { year: "2024", label: "Launched the North Karnataka Volunteer Fellowship" },
];

export function AchievementsStrip() {
  return (
    <section className="relative overflow-hidden bg-signalNavy py-20">
      <div className="glow-blob left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-signalCyan/10" />
      <div className="container-shell relative text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-signalCyan">
          Milestones
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-white md:text-4xl">
          Recent achievements
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {milestones.map((m) => (
            <div key={m.year} className="glass-panel glass-panel-hover p-6 text-center">
              <p className="font-mono text-2xl font-semibold text-signalCyan">{m.year}</p>
              <p className="mt-2 text-sm text-mist">{m.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/achievements" className="text-sm font-semibold text-signalCyan hover:underline">
            View the full timeline →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-signal-gradient py-20 text-center">
      <div className="glow-blob left-1/4 bottom-0 h-72 w-72 bg-signalCyan/20" />
      <div className="glow-blob right-1/4 top-0 h-64 w-64 bg-white/10" />
      <div className="container-shell relative">
        <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
          Become part of the signal
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-mist">
          Whether you&apos;re starting a new branch, joining a committee, or
          just curious — there&apos;s a place for you in the network.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://www.ieee.org/membership/join/index.html"
            className="rounded-full bg-cta-gradient px-6 py-3 text-sm font-semibold text-signalNavy"
          >
            Join IEEE
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:border-white/50"
          >
            Contact SAC
          </Link>
        </div>
      </div>
    </section>
  );
}