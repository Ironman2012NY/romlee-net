import { useEffect } from "react";
import { LOCALES, LOCALE_NAME, RTL_LOCALES, useLocale, isLocale, type Locale } from "@/lib/locale";
import { t } from "@/data/i18n";

export function LangSwitch() {
  const locale = useLocale((s) => s.locale);
  const setLocale = useLocale((s) => s.setLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = RTL_LOCALES.includes(locale) ? "rtl" : "ltr";
  }, [locale]);

  return (
    <label className="flex shrink-0 items-center gap-2 text-xs text-subtle">
      <span className="sr-only">{t(locale).lang}</span>
      <select
        value={locale}
        onChange={(e) => {
          const next = e.target.value;
          if (isLocale(next)) setLocale(next);
        }}
        className="min-h-11 max-w-[11rem] rounded-md border border-border bg-elevated px-2 text-sm text-fg"
        aria-label={t(locale).lang}
      >
        {LOCALES.map((code: Locale) => (
          <option key={code} value={code}>
            {LOCALE_NAME[code]}
          </option>
        ))}
      </select>
    </label>
  );
}

export function useT() {
  return t(useLocale((s) => s.locale));
}
