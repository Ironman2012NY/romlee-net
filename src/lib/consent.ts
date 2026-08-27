import { create } from "zustand";
import { persist } from "zustand/middleware";

type ConsentState = {
  decided: boolean;
  youtube: boolean;
  spotify: boolean;
  acceptAll: () => void;
  essentialOnly: () => void;
  setMedia: (youtube: boolean, spotify: boolean) => void;
  reset: () => void;
};

export const useConsent = create<ConsentState>()(
  persist(
    (set) => ({
      decided: false,
      youtube: false,
      spotify: false,
      acceptAll: () => set({ decided: true, youtube: true, spotify: true }),
      essentialOnly: () => set({ decided: true, youtube: false, spotify: false }),
      setMedia: (youtube, spotify) => set({ decided: true, youtube, spotify }),
      reset: () => set({ decided: false, youtube: false, spotify: false }),
    }),
    { name: "romlee-consent" },
  ),
);
