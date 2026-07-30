"use client";

import { motion } from "framer-motion";

export interface TimelineNode {
  year: string;
  title: string;
  description: string;
}

export function Timeline({ nodes }: { nodes: TimelineNode[] }) {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute left-4 top-0 h-full w-px bg-signalNavy/10 md:left-1/2" />
      <div className="space-y-10">
        {nodes.map((node, i) => (
          <motion.div
            key={node.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className={`relative flex flex-col gap-2 pl-12 md:w-1/2 md:pl-0 md:pr-10 ${
              i % 2 === 0 ? "md:ml-0 md:pr-10 md:text-right" : "md:ml-auto md:pl-10 md:text-left"
            }`}
          >
            <span className="absolute left-2.5 top-1 h-3 w-3 rounded-full bg-signalCyan md:left-1/2 md:-translate-x-1/2" />
            <p className="font-mono text-sm font-semibold text-ieeeBlue">{node.year}</p>
            <p className="font-display text-lg font-semibold text-ink">{node.title}</p>
            <p className="text-sm text-mist">{node.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
