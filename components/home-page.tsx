import { SiteHeader } from "@/components/site-header";
import {
  about,
  education,
  experience,
  navIds,
  person,
  projects,
  skills,
} from "@/lib/content";
import Image from "next/image";

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

function SectionTitle({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="section-label">
      <span className="text-gradient">{children}</span>
    </h2>
  );
}

function visitLinkLabel(href: string) {
  try {
    const host = new URL(href).hostname.replace(/^www\./, "");
    return `Visit ${host}`;
  } catch {
    return "Visit site";
  }
}

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="min-w-0 flex-1 overflow-x-clip">
        <section className="relative">
          <div className="relative mx-auto max-w-3xl py-16 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:py-28 sm:pl-6 sm:pr-6">
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-10">
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
                <ul className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
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
                      <i className="fab fa-github link-icon-shift text-[1.05rem] opacity-90" aria-hidden />
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
                      <i className="fab fa-linkedin-in link-icon-shift text-[1.05rem] opacity-90" aria-hidden />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl space-y-16 py-12 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:space-y-20 sm:py-24 sm:pl-6 sm:pr-6">
          <section
            id={navIds[0].id}
            aria-labelledby="about-heading"
            className="scroll-mt-[max(6.5rem,calc(3.5rem+env(safe-area-inset-top)+1.25rem))] sm:scroll-mt-24"
          >
            <SectionTitle id="about-heading">About</SectionTitle>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--foreground)]/90">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          <section
            id={navIds[1].id}
            aria-labelledby="exp-heading"
            className="scroll-mt-[max(6.5rem,calc(3.5rem+env(safe-area-inset-top)+1.25rem))] sm:scroll-mt-24"
          >
            <SectionTitle id="exp-heading">Experience</SectionTitle>
            <ul className="mt-8 space-y-10">
              {experience.map((job) => (
                <li key={`${job.company}-${job.role}-${job.range}`}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="font-display text-base font-semibold text-[var(--foreground)]">
                        {job.role}
                      </h3>
                      <p className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-warm)] bg-clip-text text-sm font-medium text-transparent">
                        {job.company}
                      </p>
                    </div>
                    <p className="text-sm tabular-nums text-[var(--muted)]">{job.range}</p>
                  </div>
                  <p className="mt-1 text-sm text-[var(--muted)]">{job.location}</p>
                  <div className="relative mt-4 pl-5">
                    <div
                      className="absolute bottom-1 left-0 top-1 w-1 rounded-full bg-gradient-to-b from-[var(--accent-bright)] to-[var(--accent-warm-bright)]"
                      aria-hidden
                    />
                    <ul className="list-none space-y-2.5">
                      {job.highlights.map((h, i) => (
                        <li key={i} className="text-sm leading-relaxed text-[var(--foreground)]/85">
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
            id={navIds[2].id}
            aria-labelledby="proj-heading"
            className="scroll-mt-[max(6.5rem,calc(3.5rem+env(safe-area-inset-top)+1.25rem))] sm:scroll-mt-24"
          >
            <SectionTitle id="proj-heading">Projects</SectionTitle>
            <ul className="mt-8 grid gap-5">
              {projects.map((proj) => (
                <li key={proj.title}>
                  <div
                    className={
                      proj.featured
                        ? "card-tilt border-gradient-wrap shadow-[0_12px_40px_-12px_color-mix(in_oklab,var(--accent)_25%,transparent)]"
                        : ""
                    }
                  >
                    <article
                      className={`h-full rounded-[0.875rem] p-5 sm:p-6 ${
                        proj.featured
                          ? "bg-[var(--elevated)]"
                          : "rounded-2xl border border-[var(--border)] bg-[var(--elevated)]"
                      }`}
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
                      <p className="mt-4 text-base leading-relaxed text-[var(--foreground)]/90 sm:text-sm">
                        {proj.description}
                      </p>
                      {proj.highlights?.length ? (
                        <ul className="mt-4 list-none space-y-2 border-t border-[color-mix(in_oklab,var(--accent)_12%,var(--border))] pt-4">
                          {proj.highlights.map((line, i) => (
                            <li
                              key={i}
                              className="relative pl-4 text-sm leading-relaxed text-[var(--foreground)]/88 before:absolute before:left-0 before:top-[0.45em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-br before:from-[var(--accent-bright)] before:to-[var(--accent-warm-bright)] before:content-['']"
                            >
                              {line}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                        {proj.tags.map((t, i) => {
                          const warm = i % 2 === 1;
                          return (
                            <li
                              key={t}
                              className="rounded-full px-3 py-1 text-xs font-semibold"
                              style={{
                                background: warm ? "var(--tag-bg-warm)" : "var(--tag-bg)",
                                color: warm ? "var(--tag-text-warm)" : "var(--tag-text)",
                              }}
                            >
                              {t}
                            </li>
                          );
                        })}
                      </ul>
                      {proj.href ? (
                        <a
                          href={proj.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group mt-5 inline-flex min-h-11 max-w-full items-center gap-1.5 break-words text-sm font-bold text-[var(--accent)] underline decoration-[color-mix(in_oklab,var(--accent)_40%,transparent)] decoration-2 underline-offset-[0.35em] transition-[color,decoration-color] duration-200 hover:text-[var(--accent-warm)] hover:decoration-[var(--accent-warm-bright)]"
                        >
                          {visitLinkLabel(proj.href)}
                          <ExternalIcon className="link-icon-shift" />
                        </a>
                      ) : null}
                    </article>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section
            id={navIds[3].id}
            aria-labelledby="edu-heading"
            className="scroll-mt-[max(6.5rem,calc(3.5rem+env(safe-area-inset-top)+1.25rem))] sm:scroll-mt-24"
          >
            <SectionTitle id="edu-heading">Education & skills</SectionTitle>
            <div className="border-gradient-wrap mt-8">
              <div className="rounded-[0.875rem] bg-[var(--elevated)] p-5 sm:p-6">
                <h3 className="font-display text-base font-bold text-[var(--foreground)]">
                  {education.school}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{education.degree}</p>
                <p className="mt-1 text-sm tabular-nums text-[var(--muted)]">{education.years}</p>
                <p className="mt-2 text-sm font-medium text-[color-mix(in_oklab,var(--accent)_15%,var(--foreground))]">
                  {education.detail}
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {(
                [
                  ["Languages", skills.languages],
                  ["Frameworks", skills.frameworks],
                  ["Cloud & distributed", skills.cloud],
                  ["Data & messaging", skills.data],
                ] as const
              ).map(([label, items]) => (
                <div
                  key={label}
                  className="card-tilt rounded-xl border border-[color-mix(in_oklab,var(--accent)_10%,var(--border))] bg-[color-mix(in_oklab,var(--surface)_92%,var(--accent)_8%)] p-4 sm:p-5 hover:border-[color-mix(in_oklab,var(--accent)_22%,var(--border))]"
                >
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--accent-warm)]">
                    {label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/90">
                    {items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <footer className="border-t border-[color-mix(in_oklab,var(--accent)_15%,var(--border))] bg-[color-mix(in_oklab,var(--background)_82%,var(--surface))] backdrop-blur-sm">
          <div className="mx-auto max-w-3xl px-4 py-10 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-10 sm:px-6 sm:pb-10">
            <p className="text-balance text-center text-sm text-[var(--muted)]">
              © {new Date().getFullYear()}{" "}
              <span className="font-medium text-[var(--foreground)]">{person.name}</span>
              <span className="mx-2 text-[var(--border)]">·</span>
              <a
                href={`tel:+1${person.phone.replace(/\D/g, "")}`}
                className="rounded px-1 font-medium text-[var(--accent)] underline decoration-transparent underline-offset-4 transition-[color,decoration-color,transform] duration-200 hover:text-[var(--accent-warm)] hover:decoration-[var(--accent-warm-bright)] motion-safe:hover:-translate-y-px"
              >
                {person.phone}
              </a>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
