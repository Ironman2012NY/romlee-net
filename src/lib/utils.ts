import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatViews(n: number): string {
  if (n >= 1_000_000_000) {
    const v = n / 1_000_000_000;
    return `${v.toFixed(v >= 10 ? 0 : 1).replace(".", ",")} Mrd.`;
  }
  if (n >= 1_000_000) {
    const v = n / 1_000_000;
    return `${v.toFixed(v >= 100 ? 0 : 1).replace(".", ",")} Mio.`;
  }
  if (n >= 1_000) {
    const v = n / 1_000;
    return v >= 10
      ? `${Math.round(v)} Tsd.`
      : `${v.toFixed(1).replace(".", ",")} Tsd.`;
  }
  return new Intl.NumberFormat("de-DE").format(n);
}

export function formatNumber(n: number): string {
  return new Intl.NumberFormat("de-DE").format(n);
}
