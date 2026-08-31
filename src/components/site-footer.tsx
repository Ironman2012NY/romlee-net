import { Link } from "@tanstack/react-router";
import { Mail, Phone, Youtube } from "lucide-react";
import { SITE } from "@/data/site";
import { useConsent } from "@/lib/consent";
import { useT } from "@/components/lang-switch";

export function SiteFooter() {
  const reset = useConsent((s) => s.reset);
  const copy = useT();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl tracking-tight text-fg">{SITE.name}</p>
          <p className="mt-1 font-display text-3xl tracking-tight text-fg">({SITE.alsoAs})</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{SITE.tagline}</p>
          <p className="mt-4 text-sm text-subtle">{SITE.brand} · Hagen / Portocolom</p>
        </div>

        <div className="text-sm">
          <p className="mb-3 font-medium text-fg">{copy.contact}</p>
          <a href={`mailto:${SITE.email}`} className="flex min-h-11 items-center gap-2 text-muted hover:text-fg">
            <Mail className="size-4" />
            {SITE.email}
          </a>
          <a href={SITE.phoneHref} className="flex min-h-11 items-center gap-2 text-muted hover:text-fg">
            <Phone className="size-4" />
            {SITE.phone}
          </a>
          <a
            href={SITE.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center gap-2 text-muted hover:text-fg"
          >
            <Youtube className="size-4" />
            YouTube {SITE.youtube.handle}
          </a>
          <a
            href={SITE.spotify.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center gap-2 text-muted hover:text-fg"
          >
            Spotify · Rom Lee
          </a>
        </div>

        <div className="text-sm">
          <p className="mb-3 font-medium text-fg">{copy.legal}</p>
          <div className="flex flex-col">
            <Link to="/impressum" className="flex min-h-11 items-center text-muted hover:text-fg">
              {copy.imprint}
            </Link>
            <Link to="/datenschutz" className="flex min-h-11 items-center text-muted hover:text-fg">
              {copy.privacy}
            </Link>
            <button
              type="button"
              onClick={reset}
              className="flex min-h-11 items-center text-left text-muted hover:text-fg"
            >
              {copy.cookieSettings}
            </button>
            <p className="mt-3 text-xs text-subtle">{copy.legalNote}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-subtle sm:px-6">
          © {new Date().getFullYear()} {SITE.operator}
        </p>
      </div>
    </footer>
  );
}
