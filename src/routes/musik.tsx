import { createFileRoute } from "@tanstack/react-router";
import { PlaylistTiles } from "@/components/playlist-tiles";
import { PageHead, SiteShell } from "@/components/site-shell";
import { useLocale } from "@/lib/locale";

export const Route = createFileRoute("/musik")({ component: PlaylistsPage });

function PlaylistsPage() {
  const locale = useLocale((s) => s.locale);
  const de = locale === "de";
  return (
    <SiteShell>
      <PageHead
        kicker="YouTube"
        title="Playlists"
        lead={de ? "Die Playlists vom YouTube-Kanal." : "The playlists from the YouTube channel."}
      />
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <PlaylistTiles />
      </div>
    </SiteShell>
  );
}
