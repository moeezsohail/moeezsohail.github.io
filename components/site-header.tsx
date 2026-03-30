'use client';

import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { navIds, person } from '@/lib/content';

/**
 * iOS (all browsers use WebKit): scrollIntoView({ behavior: "smooth" }) often no-ops;
 * rAF runs before the menu DOM is gone. Use sync state flush + delayed manual scrollTo
 * so layout matches the collapsed header and scroll-margin-top is honored.
 */
function scrollToHashSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const marginTop = parseFloat(getComputedStyle(el).scrollMarginTop || '0');
  const y = el.getBoundingClientRect().top + window.scrollY - marginTop;

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // iOS WebKit (Safari + Chrome on iPhone; iPadOS may report as Mac): instant scroll is reliable.
  const isIOS =
    typeof navigator !== 'undefined' &&
    (/iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
  const instant = reduced || isIOS;

  window.scrollTo({
    top: Math.max(0, y),
    left: 0,
    behavior: instant ? 'instant' : 'auto'
  });
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  /** Avoid same tap that opens the menu hitting the dimmer and closing instantly (iOS). */
  const [backdropArmed, setBackdropArmed] = useState(false);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => setBackdropArmed(true), 100);
    return () => {
      window.clearTimeout(t);
      setBackdropArmed(false);
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onMobileNavClick =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      flushSync(() => {
        setOpen(false);
      });

      window.history.replaceState(null, '', `#${id}`);

      const run = () => scrollToHashSection(id);
      requestAnimationFrame(run);
      window.setTimeout(run, 160);
    };

  return (
    <header
      className={`sticky top-0 z-50 w-full shrink-0 overflow-visible border-b pt-[env(safe-area-inset-top)] backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-200 ${
        scrolled
          ? 'border-[color-mix(in_oklab,var(--accent)_22%,var(--border))] bg-[color-mix(in_oklab,var(--surface)_94%,transparent)] shadow-[0_8px_28px_-18px_color-mix(in_oklab,var(--foreground)_50%,transparent)]'
          : 'border-[color-mix(in_oklab,var(--accent)_12%,var(--border))] bg-[color-mix(in_oklab,var(--surface)_85%,transparent)]'
      }`}
    >
      {open && backdropArmed ? (
        <button
          type="button"
          className="fixed inset-0 z-[40] bg-[color-mix(in_oklab,var(--foreground)_12%,transparent)] sm:hidden"
          aria-hidden
          tabIndex={-1}
          onClick={() => setOpen(false)}
        />
      ) : null}

      <div className="relative z-50 mx-auto flex min-h-14 w-full max-w-6xl items-center justify-between gap-3 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:min-h-14 sm:gap-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8">
        <a
          href="#top"
          className="logo-link flex min-h-11 min-w-[2.75rem] items-center font-display text-sm font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="text-logo-mark">{person.name.split(' ')[0]}</span>
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
            className="relative z-[60] inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-[color-mix(in_oklab,var(--accent)_20%,var(--border))] bg-[var(--elevated)] text-[var(--foreground)] transition-[transform,box-shadow,border-color] duration-200 hover:scale-105 hover:border-[color-mix(in_oklab,var(--accent-bright)_35%,var(--border))] hover:shadow-[0_0_20px_-4px_color-mix(in_oklab,var(--accent-bright)_35%,transparent)] active:scale-100"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={(e) => {
              e.stopPropagation();
              setOpen((v) => !v);
            }}
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="relative z-50 border-t border-[var(--border)] bg-[var(--surface)] py-2 shadow-[0_12px_24px_-12px_color-mix(in_oklab,var(--foreground)_25%,transparent)] sm:hidden"
        >
          <nav
            className="flex max-h-[min(70vh,24rem)] flex-col gap-0.5 overflow-y-auto overscroll-contain pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:px-6"
            aria-label="Mobile primary"
          >
            {navIds.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="cursor-pointer rounded-lg px-3 py-3.5 text-base text-[var(--foreground)] transition-[transform,background-color] duration-200 active:bg-[color-mix(in_oklab,var(--accent)_10%,var(--elevated))] motion-safe:hover:translate-x-1 motion-safe:hover:bg-[color-mix(in_oklab,var(--accent)_8%,var(--elevated))]"
                onClick={onMobileNavClick(id)}
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
