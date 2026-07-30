"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const stats = [
  { label: "Student Branches", value: 42 },
  { label: "Active Members", value: 6200 },
  { label: "Events This Year", value: 118 },
  { label: "Years of Service", value: 27 },
];

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-mono">
      {display.toLocaleString()}
      {value >= 100 && display === value ? "+" : ""}
    </span>
  );
}

export default function StatBand() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-signalNavy py-16">
      <div className="glow-blob left-1/4 top-0 h-64 w-64 bg-signalViolet/20" />
      <div className="glow-blob right-1/4 bottom-0 h-64 w-64 bg-signalCyan/10" />
      <div className="container-shell relative grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-panel glass-panel-hover px-4 py-6 text-center"
          >
            <p className="text-3xl font-semibold text-white md:text-4xl">
              <Counter value={s.value} />
            </p>
            <p className="mt-2 border-t border-signalCyan/30 pt-2 text-xs uppercase tracking-wide text-mist">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}