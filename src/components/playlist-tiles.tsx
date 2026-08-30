import { Play } from "lucide-react";
import { PLAYLISTS } from "@/data/videos";
import { useT } from "@/components/lang-switch";

export function PlaylistTiles() {
  const copy = useT();
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {PLAYLISTS.map((p) => (
        <a
          key={p.id}
          href={`https://www.youtube.com/playlist?list=${p.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-xl border border-border bg-surface"
        >
          <div className="aspect-[16/10]">
            <img
              src={p.cover}
              alt=""
              className="size-full object-cover transition duration-500 group-hover:scale-[1.04]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
            <div>
              <p className="font-display text-xl leading-tight text-fg">{p.title}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                {p.subtitle} · {p.count} {copy.videos}
              </p>
            </div>
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-fg text-accent-fg">
              <Play className="size-4 fill-current" />
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
