import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/data/site";
import { SpotifyEmbed } from "@/components/spotify-embed";
import { PageHead, SiteShell } from "@/components/site-shell";
import { useT } from "@/components/lang-switch";

export const Route = createFileRoute("/spotify")({ component: SpotifyPage });

function SpotifyPage() {
  const copy = useT();
  return (
    <SiteShell>
      <PageHead kicker={copy.spotifyKicker} title={copy.spotifyTitle} lead={copy.spotifyLead} />
      <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <p className="mb-8 text-sm leading-relaxed text-muted">
          Spotify ist zum Streamen da: Songs und Canvas. Keine vollständigen Musikvideos — die
          gibt es nur auf{" "}
          <a
            href={SITE.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-fg"
          >
            {SITE.youtube.handle}
          </a>
          .
        </p>
        <SpotifyEmbed height={520} />
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={SITE.spotify.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-md border border-border px-5 text-sm text-fg"
          >
            {copy.openSpotify}
          </a>
          <Link
            to="/videos"
            className="inline-flex min-h-11 items-center rounded-md bg-fg px-5 text-sm font-medium text-accent-fg"
          >
            {copy.videosOnYt}
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
