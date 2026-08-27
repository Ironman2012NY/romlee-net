import { createFileRoute } from "@tanstack/react-router";
import { TECH_NOTE_EN, VIDEO_AI_NOTE } from "@/data/content";
import { IMPRESSUM } from "@/data/legal";
import { LegalBlocks } from "@/components/legal-blocks";
import { PageHead, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/impressum")({ component: ImpressumPage });

function ImpressumPage() {
  return (
    <SiteShell>
      <PageHead kicker="Rechtliches" title="Impressum" />
      <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <LegalBlocks blocks={IMPRESSUM} />
        <section className="mt-12">
          <h2 className="font-display text-2xl tracking-tight text-fg">
            Allgemeine Hinweise (in engl.)
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{TECH_NOTE_EN}</p>
        </section>
        <section className="mt-10">
          <h2 className="font-display text-2xl tracking-tight text-fg">
            Hinweis zur Videoproduktion und künstliche Intelligenz
          </h2>
          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted">
            {VIDEO_AI_NOTE}
          </p>
        </section>
      </div>
    </SiteShell>
  );
}
