import { createFileRoute } from "@tanstack/react-router";
import { Award, ExternalLink } from "lucide-react";
import { certificates, profile } from "../lib/portfolio-data";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: `Certificates — ${profile.name}` },
      {
        name: "description",
        content: `Certifications earned by ${profile.name}, including Copado AI and web development training.`,
      },
      { property: "og:title", content: `Certificates — ${profile.name}` },
      {
        property: "og:description",
        content: "Professional certifications and training achievements.",
      },
    ],
  }),
  component: CertificatesPage,
});

function CertificatesPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="mono-label">Credentials</p>
      <h1 className="mt-3 text-4xl font-semibold">Certificates</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Certifications and training programs I've completed.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {certificates.map((cert) => (
          <article key={cert.name} className="panel flex flex-col p-6">
            <div className="flex items-start gap-3">
              <Award className="size-6 shrink-0 text-primary" />
              <div>
                <h2 className="text-lg font-semibold">{cert.name}</h2>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4">
              <p className="font-mono text-xs text-primary">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                Verify credential <ExternalLink className="size-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
