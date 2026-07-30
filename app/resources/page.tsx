"use client";

import { useMemo, useState } from "react";
import { FileText, Download } from "lucide-react";
import { resources, Resource } from "@/lib/data/resources";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FilterBar } from "@/components/shared/FilterBar";
import { Card } from "@/components/shared/Card";
import { EmptyState } from "@/components/shared/EmptyState";

type Category = Resource["category"];
const categories: Category[] = ["Guides", "Templates", "Branding", "Forms"];

function formatSize(kb: number) {
  return kb >= 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${kb} KB`;
}

export default function ResourcesPage() {
  const [category, setCategory] = useState<Category | "All">("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return resources
      .filter((r) => category === "All" || r.category === category)
      .filter((r) => r.title.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => b.downloads - a.downloads);
  }, [category, query]);

  return (
    <div className="pt-[72px]">
      <section className="py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Download center"
            title="Resources"
            description="Guides, templates, branding assets, and forms for running a branch or committee."
          />

          <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <FilterBar options={categories} active={category} onChange={setCategory} />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search resources…"
              aria-label="Search resources"
              className="w-full max-w-xs rounded-full border border-signalNavy/15 px-4 py-2 text-sm"
            />
          </div>

          <div className="mt-10">
            {filtered.length === 0 ? (
              <EmptyState message="No resources match your search." />
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {filtered.map((r) => (
                  <Card key={r.id} className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-ieeeBlue/10 p-2 text-ieeeBlue">
                        <FileText size={18} />
                      </div>
                      <div>
                        <p className="font-display text-sm font-semibold text-ink">{r.title}</p>
                        <p className="text-xs text-mist">
                          {r.fileType} · {formatSize(r.sizeKb)}
                        </p>
                      </div>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-2 text-xs text-mist">
                      <span>{r.downloads.toLocaleString()} downloads</span>
                      <button className="flex items-center gap-1 font-semibold text-ieeeBlue hover:underline">
                        <Download size={14} /> Download
                      </button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
