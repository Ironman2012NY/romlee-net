import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouterState } from "@tanstack/react-router";
import { LOCALES, LOCALE_NAME, RTL_LOCALES, useLocale, type Locale } from "@/lib/locale";
import { t } from "@/data/i18n";

export function LangSwitch() {
  const locale = useLocale((s) => s.locale);
  const setLocale = useLocale((s) => s.setLocale);
  const hydrate = useLocale((s) => s.hydrate);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, right: 0 });
  const btn = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLUListElement>(null);

  useEffect(() => {
    hydrate();
  }, [hydrate, pathname]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = RTL_LOCALES.includes(locale) ? "rtl" : "ltr";
  }, [locale]);

  useLayoutEffect(() => {
    if (!open || !btn.current) return;
    const r = btn.current.getBoundingClientRect();
    setPos({ top: r.bottom + 6, right: window.innerWidth - r.right });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      const node = e.target as Node;
      if (btn.current?.contains(node) || menu.current?.contains(node)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const pick = (code: Locale) => {
    setLocale(code);
    setOpen(false);
  };

  return (
    <div className="relative z-[210] shrink-0">
      <button
        ref={btn}
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-11 min-w-[7.5rem] items-center justify-between gap-2 rounded-md border border-border bg-elevated px-3 text-sm text-fg shadow-sm"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t(locale).lang}
      >
        <span>{LOCALE_NAME[locale]}</span>
        <span className="text-subtle" aria-hidden>
          ▾
        </span>
      </button>
      {open && typeof document !== "undefined"
        ? createPortal(
            <ul
              ref={menu}
              role="listbox"
              style={{ top: pos.top, right: pos.right }}
              className="fixed z-[400] max-h-[min(70vh,22rem)] w-48 overflow-auto rounded-md border border-border bg-elevated py-1 shadow-lg"
            >
              {LOCALES.map((code: Locale) => (
                <li key={code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={code === locale}
                    onClick={() => pick(code)}
                    className={
                      code === locale
                        ? "flex min-h-10 w-full items-center px-3 text-left text-sm text-accent"
                        : "flex min-h-10 w-full items-center px-3 text-left text-sm text-fg hover:bg-surface"
                    }
                  >
                    {LOCALE_NAME[code]}
                  </button>
                </li>
              ))}
            </ul>,
            document.body,
          )
        : null}
    </div>
  );
}

export function useT() {
  return t(useLocale((s) => s.locale));
}
