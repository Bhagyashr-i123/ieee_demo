"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return <p className="mt-5 text-sm text-signalCyan">You're subscribed — welcome to the network.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="mt-5 flex gap-2">
      <label htmlFor="newsletter" className="sr-only">Email address</label>
      <input
        id="newsletter"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@college.edu"
        className="w-full rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="shrink-0 rounded-full bg-signalCyan px-4 py-2 text-sm font-semibold text-signalNavy disabled:opacity-50"
      >
        {status === "loading" ? "…" : "Join"}
      </button>
      {status === "error" && (
        <span className="sr-only" role="alert">Subscription failed, please try again.</span>
      )}
    </form>
  );
}
