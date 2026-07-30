"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Menu, X, Search } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "/about", label: "About" },
  { href: "/committees", label: "Committees" },
  { href: "/events", label: "Events" },
  { href: "/branches", label: "Branches" },
  { href: "/resources", label: "Resources" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-40 h-[72px] transition-colors duration-300",
        scrolled
          ? "border-b border-white/10 bg-signalNavy/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container-shell flex h-full items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
  <Image
    src="/logos/ieee-nkss-logo.png"
    alt="IEEE North Karnataka Subsection SAC"
    width={200}
    height={200}
    priority
    className="h-10 w-auto"
  />
</Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative py-2 text-sm font-medium text-white/80 transition-colors hover:text-white",
                  active && "text-white"
                )}
              >
                {link.label}
                <span
                  className={clsx(
                    "absolute -bottom-0.5 left-0 h-[2px] bg-signalCyan transition-all duration-300",
                    active ? "w-full" : "w-0"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button
            aria-label="Search"
            className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-sm text-white/70 hover:border-white/30 hover:text-white"
          >
            <Search size={15} />
            <span className="font-mono text-xs">⌘K</span>
          </button>
          <Link
            href="/contact"
            className="rounded-full bg-ieeeBlue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-ieeeBlue/90"
          >
            Join IEEE
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={clsx(
          "fixed inset-0 top-[72px] z-30 bg-signalNavy transition-transform duration-200 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "flex h-[52px] items-center border-b border-white/5 pl-6 text-base text-white/90",
                pathname?.startsWith(link.href) && "border-l-4 border-l-signalCyan bg-white/5"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="m-6 rounded-full bg-ieeeBlue px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Join IEEE
          </Link>
        </nav>
      </div>
    </header>
  );
}
