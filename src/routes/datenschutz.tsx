import { createFileRoute } from "@tanstack/react-router";
import { DATENSCHUTZ } from "@/data/legal";
import { LegalBlocks } from "@/components/legal-blocks";
import { PageHead, SiteShell } from "@/components/site-shell";
import { useConsent } from "@/lib/consent";

export const Route = createFileRoute("/datenschutz")({ component: DatenschutzPage });

function DatenschutzPage() {
  const reset = useConsent((s) => s.reset);

  return (
    <SiteShell>
      <PageHead
        kicker="DSGVO / TDDDG"
        title="Datenschutzerklärung"
        lead="Deutsche Datenschutzerklärung unter Berücksichtigung von DSGVO, TDDDG, DDG, Digital Services Act und KI-Verordnung. Stand: 27. August 2026."
      />
      <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <button
          type="button"
          onClick={reset}
          className="mb-10 min-h-11 rounded-md border border-border px-4 text-sm text-fg"
        >
          Cookie-Einstellungen öffnen
        </button>
        <LegalBlocks blocks={DATENSCHUTZ} />
        <p className="mt-12 text-xs text-subtle">Stand: 27. August 2026</p>
      </div>
    </SiteShell>
  );
}
