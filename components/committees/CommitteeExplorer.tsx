"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { committees, Committee } from "@/lib/data/committees";

function DetailPanel({ committee }: { committee: Committee }) {
  return (
    <motion.div
      key={committee.id}
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 12 }}
      transition={{ duration: 0.2 }}
      className="rounded-xl2 border border-signalNavy/8 bg-white p-6 shadow-card"
    >
      <p className="font-mono text-xs uppercase tracking-wide text-ieeeBlue">
        {committee.category}
      </p>
      <h3 className="mt-2 font-display text-xl font-semibold text-ink">{committee.name}</h3>
      <p className="mt-3 text-sm text-mist">{committee.mandate}</p>
      <ul className="mt-4 space-y-2">
        {committee.members.map((m) => (
          <li key={m.name} className="flex justify-between text-sm">
            <span className="text-ink">{m.name}</span>
            <span className="text-mist">{m.role}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function CommitteeExplorer() {
  const [active, setActive] = useState<Committee>(committees[0]);

  return (
    <div>
      {/* Desktop: node cluster + detail panel */}
      <div className="hidden gap-10 md:grid md:grid-cols-[1fr_1fr]">
        <div className="relative flex items-center justify-center rounded-xl2 border border-signalNavy/8 bg-signalNavy/[0.02] p-10">
          <svg viewBox="0 0 320 260" className="h-full w-full max-w-md">
            {committees.map((c, i) => {
              const angle = (i / committees.length) * Math.PI * 2 - Math.PI / 2;
              const x = 160 + Math.cos(angle) * 100;
              const y = 130 + Math.sin(angle) * 90;
              const isActive = active.id === c.id;
              return (
                <g key={c.id}>
                  <line x1={160} y1={130} x2={x} y2={y} stroke="#3FD0FF" strokeOpacity={isActive ? 0.5 : 0.2} />
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? 30 : 24}
                    fill={isActive ? "#6C63FF" : "#0A1628"}
                    fillOpacity={isActive ? 1 : 0.85}
                    className="cursor-pointer transition-all"
                    onClick={() => setActive(c)}
                  />
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dy="0.35em"
                    fontSize="8"
                    fill="white"
                    className="pointer-events-none select-none"
                  >
                    {c.name.split(" ")[0]}
                  </text>
                </g>
              );
            })}
            <circle cx={160} cy={130} r={14} fill="#00629B" />
            <text x={160} y={130} textAnchor="middle" dy="0.35em" fontSize="7" fill="white">
              SAC
            </text>
          </svg>
        </div>

        <AnimatePresence mode="wait">
          <DetailPanel committee={active} />
        </AnimatePresence>
      </div>

      {/* Mobile / reduced-motion fallback: accordion */}
      <div className="space-y-3 md:hidden">
        {committees.map((c) => (
          <details key={c.id} className="group rounded-xl2 border border-signalNavy/8 p-4">
            <summary className="flex cursor-pointer list-none items-center justify-between font-display font-semibold text-ink">
              {c.name}
              <ChevronDown className="transition-transform group-open:rotate-180" size={18} />
            </summary>
            <p className="mt-3 text-sm text-mist">{c.mandate}</p>
            <ul className="mt-3 space-y-1">
              {c.members.map((m) => (
                <li key={m.name} className="flex justify-between text-sm">
                  <span>{m.name}</span>
                  <span className="text-mist">{m.role}</span>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </div>
  );
}
