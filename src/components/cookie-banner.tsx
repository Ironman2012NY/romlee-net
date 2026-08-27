import { Link } from "@tanstack/react-router";
import { useConsent } from "@/lib/consent";
import { useHydrated } from "@/lib/use-hydrated";
import { useT } from "@/components/lang-switch";

export function CookieBanner() {
  const hydrated = useHydrated();
  const decided = useConsent((s) => s.decided);
  const acceptAll = useConsent((s) => s.acceptAll);
  const essentialOnly = useConsent((s) => s.essentialOnly);
  const copy = useT();

  if (!hydrated || decided) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-elevated/95 p-4 shadow-[0_-12px_40px_rgb(0_0_0_/_0.4)] backdrop-blur-md sm:p-5">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="font-medium text-fg">{copy.cookieTitle}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            {copy.cookieBody}{" "}
            <Link to="/datenschutz" className="underline decoration-border-strong underline-offset-2">
              {copy.privacy}
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={essentialOnly}
            className="min-h-11 rounded-md border border-border px-4 text-sm text-fg transition-colors hover:border-border-strong"
          >
            {copy.essential}
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="min-h-11 rounded-md bg-fg px-5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            {copy.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}
