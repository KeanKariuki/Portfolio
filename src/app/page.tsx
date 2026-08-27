import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kean Kariuki — Backend Engineer in Training",
  description:
    "Kean Kariuki (@KeanKariuki) — Maths & CS at JKUAT, full-stack intern at Gnovation, building PesaFlow in Spring Boot. Incoming Safaricom backend intern.",
  openGraph: {
    title: "Kean Kariuki — Backend Engineer in Training",
    description:
      "Maths & CS @ JKUAT · full-stack intern at Gnovation · building PesaFlow, a mini M-Pesa-style backend in Spring Boot, Java 21, PostgreSQL and Redis.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const GITHUB = "https://github.com/KeanKariuki";
const EMAIL = "keanzy254@gmail.com";

const facts: { label: string; value: string }[] = [
  { label: "Studying", value: "BSc Maths & CS, JKUAT" },
  { label: "Currently", value: "Full-stack intern, Gnovation" },
  { label: "Incoming", value: "Safaricom intern, Oct 2026" },
  { label: "Based in", value: "Nairobi, Kenya" },
];

const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Java 21", "Python", "JavaScript", "Kotlin"] },
  {
    group: "Backend",
    items: ["Spring Boot", "Django", "Node.js", "PostgreSQL", "MySQL", "Redis"],
  },
  { group: "Frontend", items: ["React", "Vue 3", "Vite", "Typescript", "Next" ] },
  { group: "Tooling", items: ["Git & GitHub", "Docker", "Figma", "VS Code", "Postman"] },
];

const experience: {
  role: string;
  org: string;
  period: string;
  detail: string;
}[] = [
  {
    role: "Full-stack developer intern",
    org: "Gnovation Ltd, Enterprise Rd",
    period: "Jun – Aug 2026",
    detail:
      "Built the Business Monitor landing page with Vite and a Python backend, and shipped OTP-based user authorization to harden the auth flow. Also worked on Cascade, an AI + meter-reading platform, structuring and integrating the chatbot interface.",
  },
  {
    role: "IT intern & tour consultant",
    org: "Sovereign Adventures, Roysambu",
    period: "Aug 2025",
    detail:
      "Maintained the tourism platform and translated client needs from non-technical staff into concrete technical requirements.",
  },
  {
    role: "IT intern",
    org: "Paschal Construction, Thindigua",
    period: "Jun – Jul 2025",
    detail:
      "Led improvements to the company website for accessibility and engagement while supporting networking and digital record-keeping.",
  },
  {
    role: "IT intern",
    org: "Datacore, Nairobi West",
    period: "May – Aug 2024",
    detail:
      "System troubleshooting, hardware setup and basic networking protocols alongside first-year coursework.",
  },
  {
    role: "IT intern",
    org: "Pumptech, Embakasi",
    period: "Feb – May 2023",
    detail: "Supported day-to-day IT operations and helped keep systems up.",
  },
];

const projects: {
  title: string;
  blurb: string;
  stack: string;
  href: string;
  live?: string;
}[] = [
  {
    title: "pesaflow-backend",
    blurb:
      "A mini mobile-money platform modeled on M-Pesa, built as a capstone ahead of the Safaricom internship. Entity design, deadlock-safe pessimistic locking for transfers, a paginated transaction-history API, and a Redis caching layer.",
    stack: "Spring Boot 3.5 · Java 21 · PostgreSQL · Redis",
    href: `${GITHUB}?tab=repositories`,
  },
  {
    title: "ziara-sez",
    blurb:
      "A dealership site rebuilt end-to-end on plain PostgreSQL (no ORM binary to install), with DB-level pagination that keeps the fleet page fast into the thousands of listings, rate-limited admin auth, an S3-pluggable photo pipeline, and Resend/Twilio alerts the moment a test-drive is booked. Ships with a Dockerfile and docker-compose for self-hosting.",
    stack: "Next.js 14 · PostgreSQL · Docker · Resend/Twilio",
    href: `${GITHUB}?tab=repositories`,
  },
  {
    title: "equipment-reservation",
    blurb:
      "A Django + Next.js booking platform for renting out equipment by the hour or day, with a REST API (token auth, availability checks, automatic deposit calculation) and real Paystack payments — inline checkout, server-side verification, and a webhook as the actual source of truth so a flaky callback can never fake a paid booking.",
    stack: "Django REST Framework · Next.js · PostgreSQL · Paystack",
    href: `${GITHUB}?tab=repositories`,
    live: "https://equipment-reservation-olive.vercel.app/",
  },
  {
    title: "memory-gacha",
    blurb:
      "A gacha machine that pulls up real memories instead of loot — weighted rarity tiers, a persistent collection that survives a refresh, and a photo/song/message attached to each pull. Part portfolio piece, part gift.",
    stack: "React 19 · TypeScript · Vite · SCSS",
    href: `${GITHUB}?tab=repositories`,
    live: "https://memory-gacha-lemon.vercel.app/",
  },
  {
    title: "business-monitor",
    blurb:
      "Business monitoring web app at Gnovation — responsive landing page, dashboards over live operational data, and an OTP-based authorization flow.",
    stack: "Vite · Python · React",
    href: `${GITHUB}?tab=repositories`,
  },
  {
    title: "cascade",
    blurb:
      "AI layered onto meter-reading systems. I helped build and structure the chatbot interface so it sat naturally inside the existing product UI.",
    stack: "Vue 3 · AI chat integration",
    href: `${GITHUB}?tab=repositories`,
  },
  {
    title: "skylink-insurance",
    blurb:
      "Ongoing insurance services website with a secure backend and responsive frontend, focused on intuitive UI and careful handling of client data.",
    stack: "React · MongoDB",
    href: `${GITHUB}?tab=repositories`,
  },
  {
    title: "cereal-shopping-app",
    blurb:
      "Android app connecting farmers directly with consumers — secure login and a local database for managing transactions.",
    stack: "Kotlin · SQLite",
    href: `${GITHUB}?tab=repositories`,
  },
  {
    title: "systems-programming-c",
    blurb: "Low-level C work: a file-backed database and a POSIX multi-process simulation.",
    stack: "C · POSIX",
    href: `${GITHUB}?tab=repositories`,
  },
];

const education: { title: string; org: string; period: string }[] = [
  {
    title: "BSc Mathematics & Computer Science",
    org: "Jomo Kenyatta University of Agriculture and Technology",
    period: "2023 – 2027 (expected)",
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    org: "Coursera — in progress, prep for CompTIA Security+",
    period: "2025 –",
  },
  {
    title: "Certificate in Full Stack Software Development",
    org: "eMobilis Technology Institute, Westlands",
    period: "2023",
  },
  {
    title: "KCSE, grade A−",
    org: "Mang'u High School, Thika",
    period: "",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <header className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border pb-6">
          <span className="font-display text-xl">Kean Kariuki</span>
          <nav className="flex gap-6 text-sm text-muted-foreground">
            <a className="transition-colors hover:text-foreground" href="#about">
              About
            </a>
            <a className="transition-colors hover:text-foreground" href="#skills">
              Skills
            </a>
            <a className="transition-colors hover:text-foreground" href="#experience">
              Experience
            </a>
            <a className="transition-colors hover:text-foreground" href="#work">
              Work
            </a>
            <a className="transition-colors hover:text-foreground" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        <section className="pt-16 md:pt-24" id="about">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            @KeanKariuki
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Backend engineer
            <span className="block italic text-muted-foreground">in training</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">
            I&apos;m Kean — a Mathematics and Computer Science student at JKUAT who builds
            full-stack products and keeps drifting toward the server side: data models,
            correctness under concurrency, and APIs that hold up.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            I&apos;m currently a full-stack developer intern at Gnovation, where I work on
            the Business Monitor web app and the Cascade AI meter-reading platform. Alongside
            that I&apos;m building PesaFlow, a mini mobile-money backend modeled on M-Pesa,
            ahead of a backend engineering internship at Safaricom starting October 2026.
          </p>

          <figure className="mt-14 border border-border bg-secondary/40">
            <Image
              src="/hero-ink.jpg"
              alt="Abstract ink diagram of value moving between accounts, drawn on paper"
              width={1408}
              height={1008}
              className="w-full mix-blend-multiply"
              priority
            />
            <figcaption className="border-t border-border px-4 py-3 text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Money moving between accounts — the problem space I keep coming back to
            </figcaption>
          </figure>

          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-sm">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="pt-20 md:pt-28" id="skills">
          <h2 className="font-display text-3xl md:text-4xl">What I&apos;m working with</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {skills.map((skill) => (
              <div
                key={skill.group}
                className="grid gap-3 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8"
              >
                <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {skill.group}
                </h3>
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-20 md:pt-28" id="experience">
          <h2 className="font-display text-3xl md:text-4xl">Experience</h2>
          <ol className="mt-10 divide-y divide-border border-y border-border">
            {experience.map((job) => (
              <li key={`${job.org}-${job.period}`} className="py-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-display text-2xl">{job.role}</h3>
                  <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{job.org}</p>
                <p className="mt-3 max-w-xl leading-relaxed text-foreground/75">{job.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="pt-20 md:pt-28" id="work">
          <h2 className="font-display text-3xl md:text-4xl">Selected work</h2>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {projects.map((item) => (
              <li key={item.title} className="group relative py-8 transition-colors hover:bg-secondary/60">
                <div className="flex items-baseline justify-between gap-6">
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <span className="text-sm text-muted-foreground transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
                <p className="mt-3 max-w-xl leading-relaxed text-foreground/75">{item.blurb}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {item.stack}
                  </p>
                  {item.live ? (
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noreferrer"
                      className="relative z-10 text-xs uppercase tracking-[0.15em] text-foreground underline underline-offset-4 hover:text-foreground/70"
                    >
                      Live demo
                    </a>
                  ) : null}
                </div>
                {/* Stretched link: makes the whole row clickable while keeping
                    "Live demo" above it (z-10) as an independent, focusable link. */}
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0"
                  aria-label={`View ${item.title} on GitHub`}
                />
              </li>
            ))}
          </ul>
        </section>

        <section className="pt-20 md:pt-28" id="education">
          <h2 className="font-display text-3xl md:text-4xl">Education &amp; certificates</h2>
          <dl className="mt-10 divide-y divide-border border-y border-border">
            {education.map((entry) => (
              <div key={entry.title} className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:gap-8">
                <div>
                  <dt className="text-base">{entry.title}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{entry.org}</dd>
                </div>
                {entry.period ? (
                  <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground sm:text-right">
                    {entry.period}
                  </span>
                ) : null}
              </div>
            ))}
          </dl>
        </section>

        <section className="pt-20 md:pt-28" id="contact">
          <h2 className="font-display text-3xl md:text-4xl">Get in touch</h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Open to backend and systems-focused conversations — internships, collaboration, or
            just comparing notes. Based in Nairobi, reachable anytime.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kean-kariuki-39586b289/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-sm border border-foreground/25 px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center rounded-sm border border-foreground/25 px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              {EMAIL}
            </a>
          </div>
        </section>

        <footer className="mt-24 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kean Kariuki · Maths &amp; CS @ JKUAT · Nairobi
        </footer>
      </div>
    </div>
  );
}
