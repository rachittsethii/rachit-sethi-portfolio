import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile, skills, experience, projects } from "../lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — Machine Learning & Software Developer` },
      {
        name: "description",
        content: `${profile.name} is a CSE undergraduate building AI and machine learning projects with Python. See projects, skills and contact details.`,
      },
      { property: "og:title", content: `${profile.name} — ML & Software Developer` },
      { property: "og:description", content: profile.tagline },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      <section className="page-glow border-b border-border/60">
        <div className="mx-auto max-w-5xl px-5 py-24">
          <p className="mono-label">{profile.role}</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight sm:text-6xl">
            Hi, I'm <span className="text-gradient">{profile.name.split(" ")[0]}</span>.
            <br />
            I build for the web.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{profile.tagline}</p>
          <p className="mt-4 flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <MapPin className="size-3.5 text-primary" />
            {profile.location}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View projects <ArrowRight className="size-4" />
            </Link>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Download className="size-4" /> Resume
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mono-label">About</p>
            <h2 className="mt-3 text-3xl font-semibold">Engineer, end to end</h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              More about me <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="panel h-fit p-6">
            <p className="mono-label">Stack</p>
            <div className="mt-4 space-y-4">
              {skills.map((group) => (
                <div key={group.group}>
                  <p className="text-sm font-medium text-foreground">{group.group}</p>
                  <p className="mt-1 font-mono text-xs leading-relaxed text-muted-foreground">
                    {group.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16">
        <p className="mono-label">Achievements</p>
        <h2 className="mt-3 text-3xl font-semibold">Where I've worked</h2>
        <div className="mt-6 space-y-4">
          {experience.map((job) => (
            <div key={job.role + job.company} className="panel p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {job.role} <span className="text-primary">@ {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-primary">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="mono-label">Selected work</p>
            <h2 className="mt-3 text-3xl font-semibold">Projects</h2>
          </div>
          <Link to="/projects" className="text-sm font-medium text-primary hover:underline">
            All projects
          </Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="panel p-6">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{project.blurb}</p>
              <p className="mt-4 font-mono text-xs text-primary">{project.stack.join(" · ")}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
