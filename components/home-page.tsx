'use client';

import { SiteHeader } from '@/components/site-header';
import {
  about,
  education,
  experience,
  navIds,
  person,
  projects,
  skills
} from '@/lib/content';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

function SectionTitle({
  id,
  children
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <h2 id={id} className="section-label">
      <span className="text-gradient">{children}</span>
    </h2>
  );
}

export function HomePage() {
  const navByLabel = Object.fromEntries(navIds.map((item) => [item.label, item.id]));
  const projectCategories = useMemo(
    () => ['All', ...new Set(projects.map((project) => project.category).filter(Boolean))],
    []
  ) as ('All' | 'Commerce' | 'Collaboration' | 'Platform')[];
  const [activeCategory, setActiveCategory] = useState<
    'All' | 'Commerce' | 'Collaboration' | 'Platform'
  >('All');
  const visibleProjects = useMemo(
    () =>
      projects.filter((project) =>
        activeCategory === 'All' ? true : project.category === activeCategory
      ),
    [activeCategory]
  );

  const handleCardOpen = (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
    href?: string
  ) => {
    if (!href) return;
    const target = event.target as HTMLElement | null;
    if (target?.closest('a,button')) return;
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]')
    );
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -2% 0px', threshold: 0.05 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SiteHeader />
      <main id="top" className="min-w-0 flex-1 overflow-x-clip">
        <section className="relative">
          <div className="relative mx-auto w-full max-w-6xl py-14 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:py-24 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8">
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-10 lg:gap-14">
              <div className="relative shrink-0">
                <Image
                  src="/profile_pic.jpeg"
                  alt="Moeez Sohail"
                  width={176}
                  height={176}
                  priority
                  className="h-36 w-36 rounded-2xl object-cover shadow-[0_12px_40px_-16px_color-mix(in_oklab,var(--foreground)_35%,transparent)] ring-2 ring-[color-mix(in_oklab,var(--accent)_40%,var(--border))] ring-offset-4 ring-offset-[var(--background)] sm:h-44 sm:w-44"
                />
              </div>
              <div className="min-w-0 flex-1 text-center sm:text-left">
                <p className="mb-3 text-sm font-semibold tracking-wide text-[var(--accent-warm-bright)]">
                  {person.title}
                </p>
                <h1 className="font-display text-[clamp(1.875rem,6.5vw+0.5rem,3.15rem)] font-bold leading-[1.12] tracking-tight sm:text-5xl sm:leading-[1.08]">
                  <span className="text-gradient">{person.name}</span>
                </h1>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                  {person.tagline}
                </p>
                <p className="mt-2 text-sm text-[color-mix(in_oklab,var(--accent)_25%,var(--muted))]">
                  {person.location}
                </p>
                <ul className="mt-8 mx-auto flex w-full max-w-[22rem] flex-col gap-3 sm:mx-0 sm:max-w-none sm:flex-row sm:flex-wrap">
                  <li className="w-full sm:w-auto">
                    <a
                      href={`mailto:${person.email}`}
                      className="btn-lift flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-gradient-cta px-5 py-2.5 text-sm font-semibold text-[var(--accent-on-solid)] shadow-[0_4px_20px_color-mix(in_oklab,var(--accent)_35%,transparent)] hover:brightness-110 hover:shadow-[0_10px_36px_-6px_color-mix(in_oklab,var(--accent-warm-bright)_30%,transparent)] sm:inline-flex sm:w-auto sm:justify-start"
                    >
                      Email
                    </a>
                  </li>
                  <li className="w-full sm:w-auto">
                    <a
                      href={person.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group btn-lift flex min-h-11 w-full items-center justify-center gap-2.5 rounded-full border-2 border-[color-mix(in_oklab,var(--accent)_45%,var(--border))] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--accent-bright)] hover:shadow-[0_8px_28px_-10px_color-mix(in_oklab,var(--accent-bright)_30%,transparent)] hover:text-[var(--accent)] sm:inline-flex sm:w-auto sm:justify-start"
                    >
                      GitHub
                      <i
                        className="fab fa-github link-icon-shift text-[1.05rem] opacity-90"
                        aria-hidden
                      />
                    </a>
                  </li>
                  <li className="w-full sm:w-auto">
                    <a
                      href={person.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group btn-lift flex min-h-11 w-full items-center justify-center gap-2.5 rounded-full border-2 border-[color-mix(in_oklab,var(--accent-warm)_40%,var(--border))] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--accent-warm-bright)] hover:shadow-[0_8px_28px_-10px_color-mix(in_oklab,var(--accent-warm-bright)_28%,transparent)] hover:text-[var(--accent-warm-bright)] sm:inline-flex sm:w-auto sm:justify-start"
                    >
                      LinkedIn
                      <i
                        className="fab fa-linkedin-in link-icon-shift text-[1.05rem] opacity-90"
                        aria-hidden
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl space-y-16 py-12 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:space-y-20 sm:py-20 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8">
          <section
            id={navByLabel.About}
            aria-labelledby="about-heading"
            className="reveal scroll-mt-[max(7.25rem,calc(env(safe-area-inset-top,0px)+4.5rem))] sm:scroll-mt-28"
            data-reveal
          >
            <SectionTitle id="about-heading">About</SectionTitle>
            <div className="mt-6 max-w-4xl space-y-4 text-base leading-relaxed text-[var(--foreground)]/90">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex justify-center sm:justify-start">
              <a
                href={`#${navByLabel.Projects}`}
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--accent)_25%,var(--border))] text-sm text-[var(--muted)] transition-[color,border-color,transform] duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:translate-y-0.5"
                aria-label="Jump to Projects section"
              >
                <span aria-hidden>↓</span>
              </a>
            </div>
          </section>

          <section
            id={navByLabel.Projects}
            aria-labelledby="proj-heading"
            className="reveal scroll-mt-[max(7.25rem,calc(env(safe-area-inset-top,0px)+4.5rem))] sm:scroll-mt-28"
            data-reveal
          >
            <SectionTitle id="proj-heading">Projects</SectionTitle>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`cursor-pointer rounded-full border px-3 py-1.5 text-xs font-semibold transition-[color,background-color,border-color] duration-200 ${
                    activeCategory === category
                      ? 'border-[color-mix(in_oklab,var(--accent)_40%,var(--border))] bg-[var(--tag-bg)] text-[var(--tag-text)]'
                      : 'border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[color-mix(in_oklab,var(--accent)_28%,var(--border))] hover:text-[var(--foreground)]'
                  }`}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
            <ul className="mt-8 grid items-stretch gap-5 xl:grid-cols-2">
              {visibleProjects.map((proj) => (
                <li key={proj.title} className="reveal h-full" data-reveal>
                  <div
                    className={
                      proj.featured
                        ? 'card-tilt border-gradient-wrap h-full shadow-[0_12px_40px_-12px_color-mix(in_oklab,var(--accent)_25%,transparent)]'
                        : 'h-full'
                    }
                  >
                    <article
                      className={`h-full rounded-[0.875rem] p-5 sm:p-6 ${
                        proj.featured
                          ? 'bg-[var(--elevated)]'
                          : 'rounded-2xl border border-[var(--border)] bg-[var(--elevated)]'
                      } ${proj.href ? 'cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-bright)]' : ''}`}
                      onClick={(event) => handleCardOpen(event, proj.href)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          handleCardOpen(event, proj.href);
                        }
                      }}
                      role={proj.href ? 'link' : undefined}
                      tabIndex={proj.href ? 0 : undefined}
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-2">
                        <h3 className="font-display text-lg font-bold text-[var(--foreground)] sm:text-xl">
                          {proj.title}
                        </h3>
                        {proj.period ? (
                          <span className="w-fit shrink-0 rounded-full bg-[var(--tag-bg-warm)] px-3 py-1.5 text-xs font-semibold tabular-nums text-[var(--tag-text-warm)] sm:py-1">
                            {proj.period}
                          </span>
                        ) : null}
                      </div>
                      {proj.featured ? (
                        <p className="mt-2 inline-flex items-center rounded-md bg-[var(--tag-bg)] px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--tag-text)]">
                          Featured build
                        </p>
                      ) : null}
                      <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-[var(--foreground)]/95 sm:text-sm">
                        {proj.description}
                      </p>
                      {proj.proof ? (
                        <p className="mt-3 rounded-lg border border-[color-mix(in_oklab,var(--accent)_15%,var(--border))] bg-[color-mix(in_oklab,var(--surface)_88%,transparent)] px-3 py-2 text-sm leading-relaxed text-[var(--foreground)]">
                          {proj.proof}
                        </p>
                      ) : null}
                      {proj.highlights?.length ? (
                        <ul className="mt-5 list-none space-y-2.5 border-t border-[color-mix(in_oklab,var(--accent)_12%,var(--border))] pt-5">
                          {proj.highlights.slice(0, 3).map((line, i) => (
                            <li
                              key={i}
                              className="relative pl-4 text-sm leading-relaxed text-[var(--foreground)]/95 before:absolute before:left-0 before:top-[0.45em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-br before:from-[var(--accent-bright)] before:to-[var(--accent-warm-bright)] before:content-['']"
                            >
                              {line}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {proj.coreStack?.length || proj.opsQuality?.length ? (
                        <div className="mt-5 space-y-3">
                          {proj.coreStack?.length ? (
                            <div>
                              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                                Core stack
                              </p>
                              <ul className="flex flex-wrap gap-2">
                                {proj.coreStack.map((t, i) => {
                                  const warm = i % 2 === 1;
                                  return (
                                    <li
                                      key={`core-${t}`}
                                      className="rounded-full px-3 py-1 text-xs font-semibold"
                                      style={{
                                        background: warm
                                          ? 'var(--tag-bg-warm)'
                                          : 'var(--tag-bg)',
                                        color: warm
                                          ? 'var(--tag-text-warm)'
                                          : 'var(--tag-text)'
                                      }}
                                    >
                                      {t}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ) : null}
                          {proj.opsQuality?.length ? (
                            <div>
                              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[var(--accent-warm)]">
                                Ops &amp; quality
                              </p>
                              <ul className="flex flex-wrap gap-2">
                                {proj.opsQuality.map((t, i) => {
                                  const warm = i % 2 === 0;
                                  return (
                                    <li
                                      key={`ops-${t}`}
                                      className="rounded-full px-3 py-1 text-xs font-semibold"
                                      style={{
                                        background: warm
                                          ? 'var(--tag-bg-warm)'
                                          : 'var(--tag-bg)',
                                        color: warm
                                          ? 'var(--tag-text-warm)'
                                          : 'var(--tag-text)'
                                      }}
                                    >
                                      {t}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ) : null}
                        </div>
                      ) : (
                        <ul
                          className="mt-5 flex flex-wrap gap-2"
                          aria-label="Technologies"
                        >
                          {proj.tags.map((t, i) => {
                            const warm = i % 2 === 1;
                            return (
                              <li
                                key={t}
                                className="rounded-full px-3 py-1 text-xs font-semibold"
                                style={{
                                  background: warm
                                    ? 'var(--tag-bg-warm)'
                                    : 'var(--tag-bg)',
                                  color: warm
                                    ? 'var(--tag-text-warm)'
                                    : 'var(--tag-text)'
                                }}
                              >
                                {t}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                      <div className="mt-5 flex flex-wrap items-center gap-3">
                        {proj.href ? (
                          <a
                            href={proj.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex min-h-11 max-w-full items-center gap-1.5 break-words text-sm font-bold text-[var(--accent)] underline decoration-[color-mix(in_oklab,var(--accent)_40%,transparent)] decoration-2 underline-offset-[0.35em] transition-[color,decoration-color] duration-200 hover:text-[var(--accent-warm)] hover:decoration-[var(--accent-warm-bright)]"
                          >
                            Live
                            <ExternalIcon className="link-icon-shift" />
                          </a>
                        ) : null}
                        {proj.codeHref ? (
                          <a
                            href={proj.codeHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex min-h-11 max-w-full items-center gap-1.5 break-words text-sm font-bold text-[var(--accent-warm)] underline decoration-[color-mix(in_oklab,var(--accent-warm)_35%,transparent)] decoration-2 underline-offset-[0.35em] transition-[color,decoration-color] duration-200 hover:text-[var(--accent)] hover:decoration-[var(--accent-bright)]"
                          >
                            Code
                            <ExternalIcon className="link-icon-shift" />
                          </a>
                        ) : (
                          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                            Available for similar platform builds. Source code is proprietary.
                          </span>
                        )}
                      </div>
                    </article>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section
            id={navByLabel.Experience}
            aria-labelledby="exp-heading"
            className="reveal scroll-mt-[max(7.25rem,calc(env(safe-area-inset-top,0px)+4.5rem))] sm:scroll-mt-28"
            data-reveal
          >
            <SectionTitle id="exp-heading">Experience</SectionTitle>
            <ul className="mt-8 space-y-6">
              {experience.map((job) => (
                <li
                  key={`${job.company}-${job.role}-${job.range}`}
                  className="reveal rounded-xl border border-[color-mix(in_oklab,var(--accent)_10%,var(--border))] bg-[color-mix(in_oklab,var(--surface)_92%,var(--accent)_8%)] p-4 sm:p-5"
                  data-reveal
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="font-display text-lg font-bold text-[var(--foreground)]">
                        {job.role}
                      </h3>
                      <p className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-warm)] bg-clip-text text-sm font-medium text-transparent">
                        {job.company}
                      </p>
                    </div>
                    <p className="text-sm tabular-nums text-[var(--muted)]">
                      {job.range}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {job.location}
                  </p>
                  {job.summary ? (
                    <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]/90">
                      {job.summary}
                    </p>
                  ) : null}
                  <div className="relative mt-4 pl-5">
                    <div
                      className="absolute bottom-1 left-0 top-1 w-1 rounded-full bg-gradient-to-b from-[var(--accent-bright)] to-[var(--accent-warm-bright)]"
                      aria-hidden
                    />
                    <ul className="list-none space-y-2.5">
                      {job.highlights.slice(0, 3).map((h, i) => (
                        <li
                          key={i}
                          className="text-sm leading-relaxed text-[var(--foreground)]/92"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section
            id={navByLabel.Education}
            aria-labelledby="edu-heading"
            className="reveal scroll-mt-[max(7.25rem,calc(env(safe-area-inset-top,0px)+4.5rem))] sm:scroll-mt-28"
            data-reveal
          >
            <SectionTitle id="edu-heading">Education & skills</SectionTitle>
            <div className="border-gradient-wrap mt-8">
              <div className="rounded-[0.875rem] bg-[var(--elevated)] p-5 sm:p-6">
                <h3 className="font-display text-base font-bold text-[var(--foreground)]">
                  {education.school}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {education.degree}
                </p>
                <p className="mt-1 text-sm tabular-nums text-[var(--muted)]">
                  {education.years}
                </p>
                <p className="mt-2 text-sm font-medium text-[color-mix(in_oklab,var(--accent)_15%,var(--foreground))]">
                  {education.detail}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/85">
                  {education.focus}
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.roleTracks.map((track) => (
                <span
                  key={track}
                  className="rounded-full border border-[color-mix(in_oklab,var(--accent)_25%,var(--border))] bg-[color-mix(in_oklab,var(--surface)_88%,transparent)] px-3 py-1.5 text-xs font-semibold text-[var(--foreground)]"
                >
                  {track}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {skills.groups.map((group) => (
                <div
                  key={group.label}
                  className="card-tilt rounded-xl border border-[color-mix(in_oklab,var(--accent)_10%,var(--border))] bg-[color-mix(in_oklab,var(--surface)_92%,var(--accent)_8%)] p-4 sm:p-5 hover:border-[color-mix(in_oklab,var(--accent)_22%,var(--border))]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--accent-warm)]">
                      {group.label}
                    </h3>
                    <span className="rounded-full bg-[var(--tag-bg)] px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-[var(--tag-text)]">
                      {group.level}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/88">
                    {group.description}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item, i) => {
                      const warm = i % 2 === 1;
                      return (
                        <li
                          key={`${group.label}-${item}`}
                          className="rounded-full px-3 py-1 text-xs font-semibold"
                          style={{
                            background: warm ? 'var(--tag-bg-warm)' : 'var(--tag-bg)',
                            color: warm
                              ? 'var(--tag-text-warm)'
                              : 'var(--tag-text)'
                          }}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">
              Also worked with: {skills.alsoWorkedWith.join(' · ')}
            </p>
          </section>
        </div>

        <footer className="border-t border-[color-mix(in_oklab,var(--accent)_15%,var(--border))] bg-[color-mix(in_oklab,var(--background)_82%,var(--surface))] backdrop-blur-sm">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-10 sm:px-6 sm:pb-10 lg:px-8">
            <p className="text-balance text-center text-sm text-[var(--muted)]">
              © {new Date().getFullYear()}{' '}
              <span className="font-medium text-[var(--foreground)]">
                {person.name}
              </span>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
