import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/data/site";
import { TRACKS } from "@/data/tracks";
import { PageHead, SiteShell } from "@/components/site-shell";
import { TrackRow } from "@/components/track-row";
import { useT } from "@/components/lang-switch";

export const Route = createFileRoute("/musik")({ component: MusikPage });

function MusikPage() {
  const copy = useT();
  return (
    <SiteShell>
      <PageHead kicker={copy.musikKicker} title={copy.musikTitle} lead={copy.musikLead} />
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="mb-8 overflow-hidden rounded-xl">
          <img
            src="/images/covers/4941713.jpg"
            alt="Love and Peace"
            className="aspect-[21/9] w-full object-cover"
          />
        </div>
        <div className="divide-y divide-border rounded-xl border border-border bg-surface p-2 sm:p-3">
          {TRACKS.map((t, i) => (
            <TrackRow key={t.id} track={t} index={i + 1} />
          ))}
        </div>
        <p className="mt-8 text-sm text-subtle">
          Audio wird von {SITE.original} geladen. Vollständige Download-Optionen dort.
        </p>
      </div>
    </SiteShell>
  );
}
