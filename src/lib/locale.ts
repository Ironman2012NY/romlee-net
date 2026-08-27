import { create } from "zustand";
import { persist } from "zustand/middleware";

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

type LocaleState = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

export const useLocale = create<LocaleState>()(
  persist(
    (set) => ({
      locale: "de",
      setLocale: (locale) => set({ locale }),
    }),
    { name: "romlee-locale" },
  ),
);

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
