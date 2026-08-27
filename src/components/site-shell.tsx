import type { ReactNode } from "react";
import { AudioBar } from "@/components/audio-bar";
import { CookieBanner } from "@/components/cookie-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { usePlayer } from "@/lib/player";
import { cn } from "@/lib/utils";

export function SiteShell({
  children,
  solidHeader = true,
}: {
  children: ReactNode;
  solidHeader?: boolean;
}) {
  const hasTrack = usePlayer((s) => Boolean(s.current));

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader solid={solidHeader} />
      <div className={cn(hasTrack ? "pb-24" : "pb-0")}>{children}</div>
      <SiteFooter />
      <AudioBar />
      <CookieBanner />
    </div>
  );
}

export function PageHead({
  kicker,
  title,
  lead,
}: {
  kicker?: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="mx-auto max-w-6xl px-4 pb-10 pt-32 sm:px-6 sm:pt-36">
      {kicker ? (
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-accent">{kicker}</p>
      ) : null}
      <h1 className="font-display text-3xl leading-none tracking-tight text-fg sm:text-5xl">
        {title}
      </h1>
      {lead ? <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{lead}</p> : null}
    </header>
  );
}
