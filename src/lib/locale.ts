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
  "zh",
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
  zh: "简体中文",
  ja: "日本語",
  ko: "한국어",
  id: "Indonesia",
};

export const RTL_LOCALES: Locale[] = ["ar", "he"];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

function readLocale(fallback: Locale): Locale {
  if (typeof window === "undefined") return "en";
  const query = new URLSearchParams(window.location.search).get("lang");
  return query && isLocale(query) ? query : fallback;
}

function writeLocale(locale: Locale) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (locale === "en") url.searchParams.delete("lang");
  else url.searchParams.set("lang", locale);
  window.history.replaceState(window.history.state, "", url);
}

type LocaleState = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  hydrate: () => void;
};

export const useLocale = create<LocaleState>((set, get) => ({
  locale: "en",
  setLocale: (locale) => {
    writeLocale(locale);
    set({ locale });
  },
  hydrate: () => {
    const locale = readLocale(get().locale);
    writeLocale(locale);
    set({ locale });
  },
}));
