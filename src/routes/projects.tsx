import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github } from "lucide-react";
import { profile, projects } from "../lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: `Projects — ${profile.name}` },
      {
        name: "description",
        content: `Selected software projects built by ${profile.name}, spanning machine learning, NLP and data analysis.`,
      },
      { property: "og:title", content: `Projects by ${profile.name}` },
      {
        property: "og:description",
        content: "Full-stack web apps, tooling and interface work with links to live demos and code.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="mono-label">Work</p>
      <h1 className="mt-3 text-4xl font-semibold">Projects</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        A selection of things I've designed, built and shipped.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name} className="panel flex flex-col p-6">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <div className="flex gap-2 text-muted-foreground">
                <a href={project.repo} aria-label={`${project.name} source code`} className="transition-colors hover:text-primary">
                  <Github className="size-4" />
                </a>
                <a href={project.link} aria-label={`${project.name} live site`} className="transition-colors hover:text-primary">
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
            <p className="mt-3 flex-1 text-sm text-muted-foreground">{project.blurb}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="font-mono text-xs text-primary">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}