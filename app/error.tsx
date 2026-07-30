"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In production this is where you'd forward to an error-tracking
    // service (Sentry, Vercel's own error reporting, etc.)
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center pt-[72px] text-center px-6">
      <p className="font-mono text-sm text-signalCyan">Something broke</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
        This section hit a snag
      </h1>
      <p className="mt-2 max-w-md text-mist">
        Nothing on your end — try again, or head back to the homepage.
      </p>
      <div className="mt-6 flex gap-4">
        <button
          onClick={reset}
          className="rounded-full bg-ieeeBlue px-6 py-3 text-sm font-semibold text-white"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border border-signalNavy/15 px-6 py-3 text-sm font-semibold text-ink"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
