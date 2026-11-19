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
  const featuredIds = ["XxG2R3tZfp8", "sd_elh2GVhE"];
  const featured = featuredIds.flatMap(id => videosByViews.filter(video => video.id === id));
  const videos = videosByViews.filter(video => !featuredIds.includes(video.id)).sort((a, b) => b.views - a.views);
  const shorts = [...shortsByViews].sort((a, b) => b.views - a.views);
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
        <div className="space-y-12">
          {filter !== "short" && (
            <section>
              <h2 className="mb-4 font-display text-3xl">{de ? "Im Mittelpunkt" : "Featured songs"}</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {featured.map(clip => <YoutubeEmbed key={clip.id} videoId={clip.id} title={clip.title} views={clip.views} />)}
              </div>
            </section>
          )}
          {filter !== "short" ? (
            <section>
              <h2 className="mb-4 font-display text-3xl tracking-tight text-fg">
                {de ? "Videos, nach Aufrufen" : "Videos, by views"}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {videos.map((clip) => (
                  <YoutubeEmbed key={clip.id} videoId={clip.id} title={clip.title} views={clip.views} />
                ))}
              </div>
            </section>
          ) : null}
          {filter !== "video" ? (
            <section>
              <h2 className="mb-4 font-display text-3xl tracking-tight text-fg">
                {de ? "Shorts, nach Aufrufen" : "Shorts, by views"}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {shorts.map((clip) => (
                  <YoutubeEmbed key={clip.id} videoId={clip.id} title={clip.title} views={clip.views} short />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </div>
    </SiteShell>
  );
}
