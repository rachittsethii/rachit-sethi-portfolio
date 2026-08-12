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
          <article key={cert.name} className="panel p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <Award className="size-6 text-primary" />
                <div>
                  <h2 className="text-lg font-semibold">{cert.name}</h2>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
              <a
                href={cert.link}
                aria-label={`Verify ${cert.name}`}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <ExternalLink className="size-4" />
              </a>
            </div>
            <p className="mt-4 font-mono text-xs text-primary">{cert.date}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
