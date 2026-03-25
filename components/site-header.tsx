"use client";

import { useEffect, useState } from "react";
import { navIds, person } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[color-mix(in_oklab,var(--accent)_12%,var(--border))] bg-[color-mix(in_oklab,var(--surface)_85%,transparent)] pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto flex min-h-14 max-w-3xl items-center justify-between gap-3 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:min-h-14 sm:gap-4 sm:pl-6 sm:pr-6">
        <a
          href="#top"
          className="logo-link flex min-h-11 min-w-[2.75rem] items-center font-display text-sm font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="text-logo-mark">{person.name.split(" ")[0]}</span>
          <span className="text-[var(--foreground)]">.</span>
        </a>
        <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary">
          {navIds.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="nav-link-animated rounded-lg px-3 py-1.5 text-sm font-medium text-[var(--muted)] hover:bg-[color-mix(in_oklab,var(--accent)_10%,var(--elevated))] hover:text-[var(--foreground)]"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:hidden">
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-[color-mix(in_oklab,var(--accent)_20%,var(--border))] bg-[var(--elevated)] text-[var(--foreground)] transition-[transform,box-shadow,border-color] duration-200 hover:scale-105 hover:border-[color-mix(in_oklab,var(--accent-bright)_35%,var(--border))] hover:shadow-[0_0_20px_-4px_color-mix(in_oklab,var(--accent-bright)_35%,transparent)] active:scale-100"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[var(--border)] bg-[var(--surface)] py-2 sm:hidden"
        >
          <nav
            className="flex flex-col gap-0.5 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:px-6"
            aria-label="Mobile primary"
          >
            {navIds.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-lg px-3 py-3.5 text-base text-[var(--foreground)] transition-[transform,background-color] duration-200 active:bg-[color-mix(in_oklab,var(--accent)_10%,var(--elevated))] motion-safe:hover:translate-x-1 motion-safe:hover:bg-[color-mix(in_oklab,var(--accent)_8%,var(--elevated))]"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
