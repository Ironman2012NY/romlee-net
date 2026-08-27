import { createFileRoute, Link } from "@tanstack/react-router";
import { POSTS } from "@/data/blog";
import { SITE } from "@/data/site";
import { PageHead, SiteShell } from "@/components/site-shell";
import { useT } from "@/components/lang-switch";

export const Route = createFileRoute("/blog/")({ component: BlogIndex });

function BlogIndex() {
  const copy = useT();
  return (
    <SiteShell>
      <PageHead kicker={copy.blogKicker} title={copy.blogTitle} lead={copy.blogLead} />
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-border-strong"
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
                <p className="text-xs uppercase tracking-[0.14em] text-subtle">{post.dateLabel}</p>
                <h2 className="mt-2 font-display text-2xl leading-tight text-fg">{post.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <a
          href={SITE.pdf}
          className="mt-10 inline-flex min-h-11 items-center text-sm text-muted underline underline-offset-4 hover:text-fg"
        >
          Wissenschaftlichen Artikel als PDF lesen
        </a>
      </div>
    </SiteShell>
  );
}
