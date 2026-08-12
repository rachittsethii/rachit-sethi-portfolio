import { createFileRoute } from "@tanstack/react-router";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact ${profile.name} — Get in touch` },
      {
        name: "description",
        content: `Reach ${profile.name} by email or social links, and download a copy of the resume.`,
      },
      { property: "og:title", content: `Contact ${profile.name}` },
      { property: "og:description", content: "Email, social links and resume download." },
    ],
  }),
  component: ContactPage,
});

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "GitHub", value: "View profile", href: profile.github, Icon: Github },
  { label: "LinkedIn", value: "Connect", href: profile.linkedin, Icon: Linkedin },
];

function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="mono-label">Contact</p>
      <h1 className="mt-3 text-4xl font-semibold">Let's build something</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        I'm open to roles, freelance work and interesting collaborations. The fastest way to reach
        me is email.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {links.map(({ label, value, href, Icon }) => (
          <a key={label} href={href} className="panel flex flex-col gap-2 p-6">
            <Icon className="size-5 text-primary" />
            <span className="mono-label">{label}</span>
            <span className="text-sm text-foreground">{value}</span>
          </a>
        ))}
      </div>

      <div className="panel mt-6 flex flex-wrap items-center justify-between gap-4 p-6">
        <div>
          <h2 className="text-lg font-semibold">Resume</h2>
          <p className="text-sm text-muted-foreground">Grab a PDF copy of my full background.</p>
        </div>
        <a
          href={profile.resumeUrl}
          download
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Download className="size-4" />
          Download resume
        </a>
      </div>
    </div>
  );
}