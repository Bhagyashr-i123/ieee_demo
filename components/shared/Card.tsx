"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={clsx(
        "rounded-xl2 border border-signalNavy/8 bg-white p-5 shadow-card transition-shadow hover:shadow-cardHover",
        "dark:border-white/10 dark:bg-signalNavyLight",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
