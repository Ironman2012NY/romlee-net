import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PHOTOS } from "@/data/photos";
import { PageHead, SiteShell } from "@/components/site-shell";
import { useT } from "@/components/lang-switch";

export const Route = createFileRoute("/fotos")({ component: FotosPage });

function FotosPage() {
  const [active, setActive] = useState<string | null>(null);
  const copy = useT();
  const current = PHOTOS.find((p) => p.src === active);

  return (
    <SiteShell>
      <PageHead kicker={copy.fotosKicker} title={copy.fotosTitle} lead={copy.fotosLead} />
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="columns-1 gap-3 sm:columns-2 lg:columns-3">
          {PHOTOS.map((photo) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActive(photo.src)}
              className="mb-3 block w-full overflow-hidden rounded-lg"
            >
              <img src={photo.src} alt={photo.alt} className="w-full object-cover" />
            </button>
          ))}
        </div>
        <p className="mt-8 text-xs text-subtle">Einige Bilder ©</p>
      </div>

      {current ? (
        <button
          type="button"
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg/90 p-4"
          onClick={() => setActive(null)}
          aria-label="Schließen"
        >
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[90dvh] max-w-full rounded-md object-contain"
          />
        </button>
      ) : null}
    </SiteShell>
  );
}
