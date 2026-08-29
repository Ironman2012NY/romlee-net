import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getPost } from "@/data/blog";
import { SITE } from "@/data/site";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  return (
    <SiteShell>
      <article className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
        <Link
          to="/blog"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg"
        >
          <ArrowLeft className="size-4" />
          Zurück zu allen Beiträgen
        </Link>
        <p className="mt-8 text-xs uppercase tracking-[0.18em] text-accent">{post.dateLabel}</p>
        <h1 className="mt-3 font-display text-3xl leading-tight tracking-tight text-fg sm:text-5xl">
          {post.title}
        </h1>
        {post.subtitle ? (
          <p className="mt-4 font-display text-xl tracking-tight text-accent sm:text-2xl">{post.subtitle}</p>
        ) : null}
        {post.cover ? (
          <div className="mt-10 flex justify-center">
            {post.slug === "warum-deutsch-polnisch" ? (
              <a
                href="https://www.hospicjumtischnera.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-xl"
              >
                <img
                  src={post.cover}
                  alt={SITE.hospice.name}
                  className="w-full rounded-2xl object-contain"
                />
              </a>
            ) : post.slug === "musik-puls-herz-sport" ? (
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/28116463/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <img
                  src={post.cover}
                  alt="PubMed: Music, pulse, heart and sport"
                  className="w-full rounded-xl border border-border object-contain"
                />
              </a>
            ) : (
              <img
                src={post.cover}
                alt=""
                className={
                  post.coverContain
                    ? "max-h-72 w-auto max-w-full object-contain"
                    : "aspect-[16/9] w-full rounded-xl object-cover"
                }
              />
            )}
          </div>
        ) : null}
        {post.coverCaption ? (
          <p className="mt-3 text-center text-sm italic text-subtle">{post.coverCaption}</p>
        ) : null}
        <div className="mt-10 space-y-5 text-base leading-relaxed text-muted">
          {post.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>
        {post.extra?.map((block) => (
          <section key={block.heading} className="mt-10">
            <h2 className="font-display text-2xl text-fg">{block.heading}</h2>
            <p className="mt-3 text-base leading-relaxed text-muted">{block.body}</p>
          </section>
        ))}
        {post.slug === "musik-puls-herz-sport" ? (
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={SITE.pdf}
              className="inline-flex min-h-11 items-center text-sm text-fg underline underline-offset-4"
            >
              PDF herunterladen
            </a>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/28116463/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-sm text-fg underline underline-offset-4"
            >
              PubMed
            </a>
          </div>
        ) : null}
      </article>
    </SiteShell>
  );
}
