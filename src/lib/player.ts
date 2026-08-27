import { create } from "zustand";
import type { Track } from "@/data/tracks";

type PlayerState = {
  current: Track | null;
  playing: boolean;
  play: (track: Track) => void;
  toggle: (track?: Track) => void;
  pause: () => void;
  setPlaying: (playing: boolean) => void;
};

export const usePlayer = create<PlayerState>((set, get) => ({
  current: null,
  playing: false,
  play: (track) => set({ current: track, playing: true }),
  toggle: (track) => {
    const { current, playing } = get();
    if (track && current?.id !== track.id) {
      set({ current: track, playing: true });
      return;
    }
    set({ playing: !playing });
  },
  pause: () => set({ playing: false }),
  setPlaying: (playing) => set({ playing }),
}));
