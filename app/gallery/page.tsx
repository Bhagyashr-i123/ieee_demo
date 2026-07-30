"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems } from "@/lib/data/gallery";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FilterBar } from "@/components/shared/FilterBar";

const years = Array.from(new Set(galleryItems.map((g) => g.year))).sort().reverse();

export default function GalleryPage() {
  const [year, setYear] = useState<string | "All">("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(
    () => galleryItems.filter((g) => year === "All" || g.year === year),
    [year]
  );

  const openAt = (id: string) => setLightbox(filtered.findIndex((g) => g.id === id));
  const close = () => setLightbox(null);
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % filtered.length));
  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  return (
    <div className="pt-[72px]">
      <section className="py-20">
        <div className="container-shell">
          <SectionHeading eyebrow="Moments" title="Gallery" description="Photos from events across the network." />

          <div className="mt-8">
            <FilterBar options={years} active={year} onChange={setYear} />
          </div>

          <div className="mt-8 columns-2 gap-4 md:columns-3">
            {filtered.map((g) => (
              <button
                key={g.id}
                onClick={() => openAt(g.id)}
                className="mb-4 block w-full overflow-hidden rounded-xl2"
              >
                <Image
                  src={g.image}
                  alt={`${g.event}, ${g.year}`}
                  width={400}
                  height={300}
                  className="w-full transition-transform hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          onKeyDown={onKeyDown}
          className="fixed inset-0 z-50 flex items-center justify-center bg-signalNavy/95 p-6"
        >
          <button aria-label="Close" onClick={close} className="absolute right-6 top-6 text-white">
            <X size={24} />
          </button>
          <button aria-label="Previous image" onClick={prev} className="absolute left-6 text-white">
            <ChevronLeft size={28} />
          </button>
          <div className="max-w-3xl text-center">
            <Image
              src={filtered[lightbox].image}
              alt={filtered[lightbox].event}
              width={900}
              height={600}
              className="mx-auto rounded-xl2"
            />
            <p className="mt-4 text-white">
              {filtered[lightbox].event} · {filtered[lightbox].year}
            </p>
          </div>
          <button aria-label="Next image" onClick={next} className="absolute right-6 text-white">
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </div>
  );
}
