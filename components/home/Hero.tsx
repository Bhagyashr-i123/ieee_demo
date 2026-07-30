"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function SignalOrb() {
  const tiltRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !tiltRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateY = (x / (rect.width / 2)) * 18; // left/right tilt
    const rotateX = -(y / (rect.height / 2)) * 18; // up/down tilt

    tiltRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!tiltRef.current) return;
    tiltRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      className="orb-scene relative mx-auto h-72 w-72 md:h-96 md:w-96"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={tiltRef}
        className="relative h-full w-full transition-transform duration-300 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Ring A */}
        <div
          className="orb-ring animate-spin-ring-a"
          style={{ border: "2px solid rgba(63,208,255,0.55)" }}
        />
        {/* Ring B */}
        <div
          className="orb-ring animate-spin-ring-b"
          style={{ border: "2px solid rgba(108,99,255,0.5)" }}
        />
        {/* Ring C */}
        <div
          className="orb-ring animate-spin-ring-c"
          style={{ border: "1.5px dashed rgba(63,208,255,0.35)" }}
        />
        {/* Pulsing core */}
        <div
          className="animate-pulse-core absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9), rgba(63,208,255,0.8) 40%, rgba(108,99,255,0.6) 100%)",
          }}
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-signal-gradient pt-[72px]">
      <div className="container-shell relative z-10 grid grid-cols-1 items-center gap-12 py-24 md:grid-cols-2">
        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-signalCyan"
          >
            IEEE North Karnataka Subsection · Student Activities Committee
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-white md:mx-0 md:text-7xl"
          >
            One Subsection.
            <br />
            One Signal.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg text-mist md:mx-0"
          >
            Connecting student branches, committees, and events across North
            Karnataka into a single, active network of IEEE volunteers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <Link
              href="/branches"
              className="rounded-full bg-cta-gradient px-6 py-3 text-sm font-semibold text-signalNavy transition-transform active:scale-[0.98]"
            >
              Explore the Network
            </Link>
            <Link
              href="/events"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50"
            >
              Upcoming Events
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <SignalOrb />
        </motion.div>
      </div>
    </section>
  );
}