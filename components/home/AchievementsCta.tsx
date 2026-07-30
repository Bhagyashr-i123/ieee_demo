"use client";

import Link from "next/link";
import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const milestones = [
  { year: "2026", label: "Region 10 Best Subsection SAC Award" },
  { year: "2025", label: "5,000+ students reached across 40 branches" },
  { year: "2024", label: "Launched the North Karnataka Volunteer Fellowship" },
];

/**
 * Two star layers drifting at different speeds as the section scrolls —
 * the parallax gap between them is what sells "moving through space",
 * not any single animation.
 */
function Starfield({ progress }: { progress: MotionValue<number> }) {
  const farStars = useMemo(
    () =>
      Array.from({ length: 45 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
      })),
    []
  );
  const nearStars = useMemo(
    () =>
      Array.from({ length: 22 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1.5,
      })),
    []
  );

  const farY = useTransform(progress, [0, 1], [0, -140]);
  const nearY = useTransform(progress, [0, 1], [0, -320]);

  return (
    <>
      <motion.div style={{ y: farY }} className="absolute inset-0">
        {farStars.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/40"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          />
        ))}
      </motion.div>
      <motion.div style={{ y: nearY }} className="absolute inset-0">
        {nearStars.map((s, i) => (
          <span
            key={i}
            className="absolute animate-pulse rounded-full bg-signalCyan/70"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          />
        ))}
      </motion.div>
    </>
  );
}

export function AchievementsStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-signalNavy py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <Starfield progress={scrollYProgress} />
      </div>
      <div className="glow-blob left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-signalCyan/10" />

      <div className="container-shell relative text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-signalCyan">
          Milestones
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-white md:text-4xl">
          Travelling through the network&apos;s journey
        </h2>

        <div className="relative mx-auto mt-20 max-w-sm">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-signalCyan/60 via-signalViolet/40 to-transparent" />

          <div className="space-y-20">
            {milestones.map((m) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, scale: 0.7, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -top-4 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-signalCyan shadow-[0_0_20px_6px_rgba(63,208,255,0.5)]" />
                <div className="glass-panel glass-panel-hover p-6">
                  <p className="font-mono text-2xl font-semibold text-signalCyan">{m.year}</p>
                  <p className="mt-2 text-sm text-mist">{m.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16">
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