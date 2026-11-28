import { Play } from "lucide-react";
import { useConsent } from "@/lib/consent";
import { useLocale } from "@/lib/locale";
import { useHydrated } from "@/lib/use-hydrated";
import { formatViews } from "@/lib/utils";
import { useT } from "@/components/lang-switch";
import { coverForYoutubeId, localVideoForYoutubeId } from "@/data/tracks";

type Props = {
  videoId: string;
  title: string;
  views?: number;
  short?: boolean;
};

export function YoutubeEmbed({ videoId, title, views, short }: Props) {
  const hydrated = useHydrated();
  const locale = useLocale(state => state.locale);
  const youtube = useConsent((s) => s.youtube);
  const acceptAll = useConsent((s) => s.acceptAll);
  const copy = useT();
  const poster = coverForYoutubeId(videoId);
  const local = localVideoForYoutubeId(videoId);
  const vertical = short ?? Boolean(local);
  const frame = vertical ? "mx-auto aspect-[9/16] w-full max-w-72 bg-black" : "aspect-video w-full bg-black";

  if (local) {
    return (
      <div className="overflow-hidden rounded-xl border border-border bg-surface">
        <div className={frame}>
          <video
            src={local}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            className="size-full bg-black object-contain"
            title={title}
          />
        </div>
        <div className="flex items-start justify-between gap-3 px-4 py-3">
          <p className="text-sm text-fg">{title}</p>
          {views != null ? (
            <p className="shrink-0 text-xs tabular-nums text-muted">{formatViews(views)}</p>
          ) : null}
        </div>
      </div>
    );
  }

  const allowed = hydrated && youtube;

  if (!allowed) {
    return (
      <div className="overflow-hidden rounded-xl border border-border bg-surface">
        <div className={`relative ${frame}`}>
          <img src={poster} alt="" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-bg/50 p-6 text-center">
            <p className="max-w-sm text-sm text-fg">{title}</p>
            {views != null ? (
              <p className="text-xs tabular-nums text-muted">{formatViews(views)}</p>
            ) : null}
            <button
              type="button"
              onClick={acceptAll}
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-fg px-4 text-sm font-medium text-accent-fg"
            >
              <Play className="size-4" />
              {copy.loadYoutube}
            </button>
            <p className="max-w-xs text-xs text-subtle">{copy.loadYoutubeHint}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className={frame}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&playsinline=1&hl=${locale}`}
          title={title}
          className="block size-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="flex items-start justify-between gap-3 px-4 py-3">
        <p className="text-sm text-fg">{title}</p>
        {views != null ? (
          <p className="shrink-0 text-xs tabular-nums text-muted">{formatViews(views)}</p>
        ) : null}
      </div>
    </div>
  );
}
