"use client";

import { useEffect, useState } from "react";

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown({ date }: { date: string }) {
  const [time, setTime] = useState(() => getTimeLeft(new Date(date)));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(new Date(date))), 1000);
    return () => clearInterval(id);
  }, [date]);

  const units: [string, number][] = [
    ["Days", time.days],
    ["Hours", time.hours],
    ["Min", time.minutes],
    ["Sec", time.seconds],
  ];

  return (
    <div className="flex gap-3" role="timer" aria-label="Time remaining until event">
      {units.map(([label, value]) => (
        <div key={label} className="rounded-xl2 bg-signalNavy px-4 py-3 text-center text-white">
          <p className="font-mono text-2xl font-semibold">{String(value).padStart(2, "0")}</p>
          <p className="text-[10px] uppercase tracking-wide text-mist">{label}</p>
        </div>
      ))}
    </div>
  );
}
