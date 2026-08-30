import { createFileRoute, Link } from "@tanstack/react-router";
import { POSTS, localizePost } from "@/data/blog";
import { SITE } from "@/data/site";
import { PageHead, SiteShell } from "@/components/site-shell";
import { useT } from "@/components/lang-switch";
import { useLocale } from "@/lib/locale";

export const Route = createFileRoute("/blog/")({ component: BlogIndex });

const PINNED_SLUG = "ki-als-bildsprache";

function BlogIndex() {
  const copy = useT();
  const locale = useLocale((s) => s.locale);
  const localized = POSTS.map((p) => localizePost(p, locale));
  const pinned = localized.filter((p) => p.slug === PINNED_SLUG);
  const rest = localized.filter((p) => p.slug !== PINNED_SLUG);
  const posts = [...pinned, ...rest];
  return (
    <SiteShell>
      <PageHead kicker={copy.blogKicker} title={copy.blogTitle} lead={copy.blogLead} />
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => {
            const isPinned = post.slug === PINNED_SLUG;
            return (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className={
                  isPinned
                    ? "overflow-hidden rounded-xl border border-accent/40 bg-surface transition-colors hover:border-accent"
                    : "overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-border-strong"
                }
              >
                {post.cover ? (
                  <div
                    className={
                      post.coverContain
                        ? "flex aspect-[16/9] items-center justify-center bg-elevated p-6"
                        : ""
                    }
                  >
                    <img
                      src={post.cover}
                      alt=""
                      className={
                        post.coverContain
                          ? "max-h-full max-w-full object-contain"
                          : "aspect-[16/9] w-full object-cover"
                      }
                    />
                  </div>
                ) : null}
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.14em] text-accent">
                    {isPinned ? copy.currentDiscussion : post.dateLabel}
                  </p>
                  <h2 className="mt-2 font-display text-2xl leading-tight text-fg">{post.title}</h2>
                  {post.subtitle ? (
                    <p className="mt-2 text-sm font-medium text-accent">{post.subtitle}</p>
                  ) : null}
                  <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <a
          href={SITE.pdf}
          className="mt-10 inline-flex min-h-11 items-center text-sm text-muted underline underline-offset-4 hover:text-fg"
        >
          {copy.readPdfArticle}
        </a>
      </div>
    </SiteShell>
  );
}
