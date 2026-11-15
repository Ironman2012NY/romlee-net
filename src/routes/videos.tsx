import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHead, SiteShell } from "@/components/site-shell";
import { YoutubeEmbed } from "@/components/youtube-embed";
import { shortsByViews, videosByViews } from "@/data/youtube-order";
import { useLocale } from "@/lib/locale";

export const Route = createFileRoute("/videos")({ component: VideosPage });

function VideosPage() {
  const locale = useLocale((s) => s.locale);
  const de = locale === "de";
  const [filter, setFilter] = useState<"all" | "video" | "short">("all");
  const ranked = [
    ...videosByViews.map((v) => ({ ...v, short: false })),
    ...shortsByViews.map((v) => ({ ...v, short: true })),
  ].sort((a, b) => b.views - a.views);
  const shown = ranked.filter((clip) =>
    filter === "all" ? true : filter === "short" ? clip.short : !clip.short,
  );
  const tabs = [
    ["all", de ? "Alle" : "All"],
    ["video", "Videos"],
    ["short", "Shorts"],
  ] as const;

  return (
    <SiteShell>
      <PageHead
        kicker="YouTube"
        title="Videos"
        lead={
          de
            ? "Die Videos vom YouTube-Kanal, nach Aufrufen."
            : "The videos from the YouTube channel, by views."
        }
      />
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="mb-8 flex flex-wrap gap-2" role="tablist">
          {tabs.map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={filter === id}
              onClick={() => setFilter(id)}
              className={
                filter === id
                  ? "min-h-11 rounded-md bg-accent px-4 text-sm text-accent-fg"
                  : "min-h-11 rounded-md border border-border bg-surface px-4 text-sm text-fg"
              }
            >
              {label}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((clip) => (
            <YoutubeEmbed
              key={clip.id}
              videoId={clip.id}
              title={clip.title}
              views={clip.views}
              short={clip.short}
            />
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
