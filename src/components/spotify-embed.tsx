import { SITE } from "@/data/site";
import { useConsent } from "@/lib/consent";
import { useHydrated } from "@/lib/use-hydrated";

export function SpotifyEmbed({ height = 380 }: { height?: number }) {
  const hydrated = useHydrated();
  const spotify = useConsent((s) => s.spotify);
  const acceptAll = useConsent((s) => s.acceptAll);
  const allowed = hydrated && spotify;

  if (!allowed) {
    return (
      <div className="rounded-xl border border-border bg-surface p-6 text-center">
        <p className="font-display text-2xl text-fg">Spotify</p>
        <p className="mt-2 text-sm text-muted">
          Der Spotify-Player wird erst nach Einwilligung geladen.
        </p>
        <button
          type="button"
          onClick={acceptAll}
          className="mt-4 min-h-11 rounded-md bg-fg px-4 text-sm font-medium text-accent-fg"
        >
          Spotify laden
        </button>
        <p className="mt-3 text-xs text-subtle">
          Mit dem Laden werden Daten an Spotify übermittelt.
        </p>
        <a
          href={SITE.spotify.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-11 items-center text-sm text-muted underline underline-offset-4 hover:text-fg"
        >
          Direkt auf Spotify öffnen
        </a>
      </div>
    );
  }

  return (
    <iframe
      title="Rom Lee auf Spotify"
      src={SITE.spotify.embed}
      width="100%"
      height={height}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="rounded-xl"
    />
  );
}
