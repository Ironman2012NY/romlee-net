import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHead } from "@/components/site-shell";
import { YoutubeEmbed } from "@/components/youtube-embed";
import { christmasCopy, danceClips, angelsClips } from "@/data/christmas";
import { CHRISTMAS_LYRICS } from "@/data/featured-lyrics";
import { useLocale } from "@/lib/locale";

export const Route = createFileRoute("/weihnachten")({
  head: () => ({ meta: [{ title: "Weihnachten mit Rom Lee | RomleeMusic" }, { name: "description", content: "Christmas Is For All, Christmas Dance und We Are the Angels. Die Weihnachtsvideos und Originaltexte von Rom Lee." }] }),
  component: ChristmasPage,
});

function ChristmasPage() {
  const locale = useLocale(s => s.locale);
  const copy = christmasCopy(locale);
  return (
    <SiteShell>
      <PageHead title={copy.title} lead={copy.lead} />
      <main className="mx-auto max-w-6xl space-y-16 px-4 pb-20 sm:px-6">
        <section className="grid items-start gap-8 md:grid-cols-2">
          <YoutubeEmbed videoId="sd_elh2GVhE" title="Christmas Is For All" />
          <div>
            <h2 className="font-display text-3xl">Christmas Is For All</h2>
            <p className="mt-2 text-muted">English · Polski · Español · Deutsch</p>
            <p className="my-5 whitespace-pre-line text-lg leading-relaxed">{CHRISTMAS_LYRICS[0].body}</p>
            <Link to="/blog/$slug" params={{ slug: "christmas-for-all" }} className="text-accent underline">{copy.story}</Link>
            <details className="mt-5 rounded-lg border border-border px-4 py-3">
              <summary className="cursor-pointer font-medium">{copy.lyrics}</summary>
              {CHRISTMAS_LYRICS.map((verse, index) => (
                <div key={index} className="mt-5">
                  <h3 className="font-medium">{verse.heading}</h3>
                  <p className="mt-2 whitespace-pre-line leading-relaxed">{verse.body}</p>
                </div>
              ))}
            </details>
          </div>
        </section>
        <section>
          <h2 className="font-display text-3xl">Christmas Dance</h2>
          <Link to="/blog/$slug" params={{ slug: "christmas-dance" }} className="mt-2 inline-block text-accent underline">{copy.album}</Link>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {danceClips.map(clip => <YoutubeEmbed key={clip.id} videoId={clip.id} title={clip.title} short={clip.id === "kwd6l5JNUZc"} />)}
          </div>
        </section>
        <section>
          <h2 className="font-display text-3xl">{copy.originals}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {angelsClips.map(clip => <YoutubeEmbed key={clip.id} videoId={clip.id} title={clip.title} />)}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
