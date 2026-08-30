import { create } from "zustand";

export const LOCALES = [
  "de",
  "en",
  "pl",
  "es",
  "fr",
  "it",
  "pt",
  "no",
  "tr",
  "ru",
  "uk",
  "ar",
  "he",
  "hi",
  "th",
  "ja",
  "ko",
  "id",
] as const;

export type Locale = (typeof LOCALES)[number];

export const LOCALE_NAME: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  pl: "Polski",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  pt: "Português",
  no: "Norsk",
  tr: "Türkçe",
  ru: "Русский",
  uk: "Українська",
  ar: "العربية",
  he: "עברית",
  hi: "हिन्दी",
  th: "ไทย",
  ja: "日本語",
  ko: "한국어",
  id: "Indonesia",
};

export const RTL_LOCALES: Locale[] = ["ar", "he"];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

function readLocale(): Locale {
  if (typeof window === "undefined") return "de";
  const q = new URLSearchParams(window.location.search).get("lang");
  if (q && isLocale(q)) return q;
  try {
    const raw = localStorage.getItem("romlee-locale");
    if (!raw) return "de";
    const parsed = JSON.parse(raw) as { state?: { locale?: string } } | string;
    const loc = typeof parsed === "string" ? parsed : parsed?.state?.locale;
    if (loc && isLocale(loc)) return loc;
  } catch {
    /* ignore */
  }
  return "de";
}

function writeLocale(locale: Locale) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("romlee-locale", JSON.stringify({ state: { locale }, version: 0 }));
  } catch {
    /* iframe / private mode */
  }
  const url = new URL(window.location.href);
  if (locale === "de") url.searchParams.delete("lang");
  else url.searchParams.set("lang", locale);
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

type LocaleState = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  hydrate: () => void;
};

export const useLocale = create<LocaleState>((set) => ({
  locale: "de",
  setLocale: (locale) => {
    writeLocale(locale);
    set({ locale });
  },
  hydrate: () => {
    const locale = readLocale();
    writeLocale(locale);
    set({ locale });
  },
}));
