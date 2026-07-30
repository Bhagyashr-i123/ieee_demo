"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { branches } from "@/lib/data/branches";

export default function NetworkTeaser() {
  return (
    <section className="relative overflow-hidden bg-signalNavyLight py-20">
      <div className="glow-blob right-1/3 top-0 h-80 w-80 bg-signalViolet/15" />
      <div className="container-shell relative grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-signalCyan">
            The network
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-white md:text-4xl">
            42 branches. One signal.
          </h2>
          <p className="mt-4 max-w-md text-mist">
            Every student branch in North Karnataka is a node in the same
            network — sharing events, resources, and opportunities.
          </p>
          <Link
            href="/branches"
            className="mt-6 inline-block rounded-full bg-cta-gradient px-6 py-3 text-sm font-semibold text-signalNavy"
          >
            See the full network →
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass-panel relative flex h-64 items-center justify-center p-4"
        >
          <svg viewBox="0 0 300 200" className="h-full w-full">
            {branches.map((b, i) => {
              const x = 40 + (i % 3) * 100;
              const y = 40 + Math.floor(i / 3) * 90;
              return (
                <g key={b.slug}>
                  {i > 0 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={40 + ((i - 1) % 3) * 100}
                      y2={40 + Math.floor((i - 1) / 3) * 90}
                      stroke="#3FD0FF"
                      strokeOpacity={0.25}
                    />
                  )}
                  <circle cx={x} cy={y} r={9} fill="#3FD0FF" fillOpacity={0.15}>
                    <animate
                      attributeName="r"
                      values="7;11;7"
                      dur="3s"
                      begin={`${i * 0.2}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx={x} cy={y} r={5} fill="#6C63FF" />
                </g>
              );
            })}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}