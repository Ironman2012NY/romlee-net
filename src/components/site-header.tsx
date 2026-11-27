import { christmasCopy } from "@/data/christmas";
import { Link } from "@tanstack/react-router";
import { NAV, SITE } from "@/data/site";
import { LangSwitch, useT } from "@/components/lang-switch";
import { useLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const copy = useT();
  const locale = useLocale((s) => s.locale);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[200] border-b transition-[background,border-color] duration-300",
        solid
          ? "border-border bg-bg/95 backdrop-blur-md"
          : "border-transparent bg-gradient-to-b from-bg/80 to-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-3 py-2 sm:px-6 sm:py-3">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" search={locale === "en" ? undefined : { lang: locale }} className="flex shrink-0 items-center gap-3">
            <img
              src="/images/romlee-music-logo.png"
              alt="Rom Lee Music"
              width={900}
              height={415}
              className="h-12 w-28 rounded-md bg-white/95 p-1.5 object-contain sm:h-14 sm:w-32"
            />
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-xl tracking-tight text-fg sm:text-2xl">
                {SITE.name}
              </span>
              <span className="block text-[11px] text-subtle">({SITE.alsoAs})</span>
            </span>
          </Link>
          <LangSwitch />
        </div>
        <nav
          className="-mx-1 flex items-center gap-1 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label={copy.lang}
        >
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              search={locale === "en" ? undefined : { lang: locale }}
              className="shrink-0 rounded-md px-3 py-2 text-sm text-muted hover:bg-elevated hover:text-fg"
              activeProps={{ className: "bg-elevated text-fg" }}
            >
              {copy.nav[item.to]}
            </Link>
          ))}
          <Link to="/weihnachten" search={locale === "en" ? undefined : { lang: locale }} className="shrink-0 rounded-md px-3 py-2 text-sm text-muted hover:bg-elevated hover:text-fg" activeProps={{ className: "bg-elevated text-fg" }}>
            {christmasCopy(locale).nav}
          </Link>
        </nav>
      </div>
    </header>
  );
}
