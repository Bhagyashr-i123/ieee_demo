"use client";

import { useState } from "react";
import { branches, Branch } from "@/lib/data/branches";

// Approximate relative positions for a simplified North Karnataka district map (not to scale)
const positions: Record<string, { x: number; y: number }> = {
  klet: { x: 120, y: 90 },
  bec: { x: 200, y: 140 },
  uvce: { x: 260, y: 260 },
  nisb: { x: 90, y: 60 },
  "vtu-belagavi": { x: 70, y: 40 },
};

export function BranchMap({ onSelect }: { onSelect: (b: Branch) => void }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="rounded-xl2 border border-signalNavy/8 bg-signalNavy p-6">
      <svg viewBox="0 0 320 300" className="h-full w-full">
        <rect x="10" y="10" width="300" height="280" rx="16" fill="#101F36" />
        {branches.map((b) => {
          const pos = positions[b.slug] ?? { x: 160, y: 150 };
          const isHovered = hovered === b.slug;
          return (
            <g
              key={b.slug}
              className="cursor-pointer"
              onMouseEnter={() => setHovered(b.slug)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => onSelect(b)}
            >
              <circle cx={pos.x} cy={pos.y} r={isHovered ? 16 : 11} fill="#3FD0FF" fillOpacity={0.2} />
              <circle cx={pos.x} cy={pos.y} r={6} fill="#6C63FF" />
              {isHovered && (
                <text x={pos.x + 14} y={pos.y + 4} fontSize="10" fill="white">
                  {b.name}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      <p className="mt-3 text-center text-xs text-mist">
        Click a node to see that branch's details below.
      </p>
    </div>
  );
}
