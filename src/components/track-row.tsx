import { Pause, Play } from "lucide-react";
import type { Track } from "@/data/tracks";
import { LANG_LABEL, trackUrl } from "@/data/tracks";
import { usePlayer } from "@/lib/player";
import { cn } from "@/lib/utils";

export function TrackRow({ track, index }: { track: Track; index?: number }) {
  const current = usePlayer((s) => s.current);
  const playing = usePlayer((s) => s.playing);
  const toggle = usePlayer((s) => s.toggle);
  const active = current?.id === track.id;
  const isPlaying = active && playing;

  return (
    <div
      className={cn(
        "group flex items-center gap-3 rounded-lg border border-transparent px-2 py-2 transition-colors duration-200",
        active ? "border-border bg-elevated" : "hover:bg-elevated/60",
      )}
    >
      <button
        type="button"
        onClick={() => {
          if (!track.audio) {
            window.open(trackUrl(track), "_blank", "noopener,noreferrer");
            return;
          }
          toggle(track);
        }}
        className="relative aspect-video w-[4.75rem] shrink-0 overflow-hidden rounded-sm sm:w-24"
        aria-label={`${track.title} ${isPlaying ? "pausieren" : "abspielen"}`}
      >
        <img src={track.cover} alt="" className="size-full object-cover" />
        <span className="absolute inset-0 flex items-center justify-center bg-bg/40 opacity-0 transition-opacity group-hover:opacity-100">
          {isPlaying ? (
            <Pause className="size-5 text-fg" />
          ) : (
            <Play className="size-5 translate-x-px text-fg" />
          )}
        </span>
      </button>
      {index != null ? (
        <span className="hidden w-6 text-xs tabular-nums text-subtle sm:block">
          {String(index).padStart(2, "0")}
        </span>
      ) : null}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm text-fg">{track.title}</p>
        <p className="text-xs text-subtle">
          Rom Lee · {LANG_LABEL[track.lang]} · {track.duration}
        </p>
      </div>
      <a
        href={trackUrl(track)}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden min-h-11 items-center text-xs text-muted hover:text-fg sm:inline-flex"
      >
        {track.localVideo ? "Video" : "YouTube"}
      </a>
    </div>
  );
}
