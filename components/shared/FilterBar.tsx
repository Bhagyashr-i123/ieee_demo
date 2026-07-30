"use client";

import { clsx } from "clsx";

export function FilterBar<T extends string>({
  options,
  active,
  onChange,
}: {
  options: T[];
  active: T | "All";
  onChange: (v: T | "All") => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter">
      {(["All", ...options] as (T | "All")[]).map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          aria-pressed={active === opt}
          className={clsx(
            "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
            active === opt
              ? "border-ieeeBlue bg-ieeeBlue text-white"
              : "border-signalNavy/15 text-mist hover:border-ieeeBlue hover:text-ieeeBlue"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
