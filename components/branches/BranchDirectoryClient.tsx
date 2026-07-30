"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { branches, Branch } from "@/lib/data/branches";
import { BranchMap } from "@/components/branches/BranchMap";
import { Card } from "@/components/shared/Card";
import { EmptyState } from "@/components/shared/EmptyState";

export function BranchDirectoryClient() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Branch | null>(null);

  const filtered = useMemo(
    () =>
      branches.filter((b) =>
        `${b.name} ${b.institution} ${b.district}`.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <div>
      <div className="hidden md:block">
        <BranchMap onSelect={setSelected} />
      </div>

      {selected && (
        <div className="mt-6 rounded-xl2 border border-ieeeBlue/30 bg-ieeeBlue/5 p-5">
          <p className="font-display font-semibold text-ink">{selected.name}</p>
          <p className="text-sm text-mist">{selected.institution} · {selected.district}</p>
          <Link href={`/branches/${selected.slug}`} className="mt-2 inline-block text-sm font-semibold text-ieeeBlue hover:underline">
            View branch page →
          </Link>
        </div>
      )}

      <div className="mt-8">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search branches by name, institution, or district…"
          aria-label="Search branches"
          className="w-full rounded-full border border-signalNavy/15 px-4 py-2.5 text-sm md:max-w-md"
        />
      </div>

      <div className="mt-6">
        {filtered.length === 0 ? (
          <EmptyState message="No branches match your search." />
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {filtered.map((b) => (
              <Link key={b.slug} href={`/branches/${b.slug}`}>
                <Card>
                  <p className="font-display font-semibold text-ink">{b.name}</p>
                  <p className="mt-1 text-sm text-mist">{b.institution}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-mist">
                    <span>{b.district}</span>
                    <span>{b.members} members</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
