import { Pause, Play } from "lucide-react";
import { useEffect, useRef } from "react";
import { usePlayer } from "@/lib/player";

export function AudioBar() {
  const current = usePlayer((s) => s.current);
  const playing = usePlayer((s) => s.playing);
  const toggle = usePlayer((s) => s.toggle);
  const setPlaying = usePlayer((s) => s.setPlaying);
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !current?.audio) return;
    if (el.src !== current.audio) {
      el.src = current.audio;
    }
    if (playing) {
      void el.play().catch(() => setPlaying(false));
    } else {
      el.pause();
    }
  }, [current, playing, setPlaying]);

  if (!current) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-elevated/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <img src={current.cover} alt="" className="h-12 w-[4.75rem] rounded-sm object-cover" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm text-fg">{current.title}</p>
          <p className="text-xs text-subtle">Rom Lee · {current.duration}</p>
        </div>
        <button
          type="button"
          onClick={() => toggle(current)}
          className="inline-flex size-11 items-center justify-center rounded-full bg-fg text-accent-fg"
          aria-label={playing ? "Pause" : "Abspielen"}
        >
          {playing ? <Pause className="size-4" /> : <Play className="size-4 translate-x-px" />}
        </button>
        <audio
          ref={ref}
          onEnded={() => setPlaying(false)}
          onPause={() => {
            if (!ref.current?.ended) setPlaying(false);
          }}
          onPlay={() => setPlaying(true)}
        />
      </div>
    </div>
  );
}
