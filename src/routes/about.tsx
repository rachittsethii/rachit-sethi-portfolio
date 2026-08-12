import { createFileRoute } from "@tanstack/react-router";
import { profile, skills, experience, education } from "../lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${profile.name} — Software Engineer` },
      {
        name: "description",
        content: `Background, skills and work experience of ${profile.name}, a software engineer building web products with React, TypeScript and Node.js.`,
      },
      { property: "og:title", content: `About ${profile.name}` },
      {
        property: "og:description",
        content: `Skills, experience and education of ${profile.name}.`,
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="mono-label">About</p>
      <h1 className="mt-3 text-4xl font-semibold">A bit about me</h1>
      <div className="mt-6 max-w-2xl space-y-4 text-muted-foreground">
        {profile.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.group} className="panel p-5">
              <p className="mono-label">{group.group}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Experience</h2>
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

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Education</h2>
        <div className="mt-6 space-y-4">
          {education.map((item) => (
            <div key={item.school} className="panel p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{item.school}</h3>
                <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{item.degree}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}