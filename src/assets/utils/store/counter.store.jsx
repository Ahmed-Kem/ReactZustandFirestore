import { create } from "zustand";

export const useCounterStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () =>
    set((state) => ({
      count: state.count <= 0 ? state.count : state.count - 1,
    })),
  reset: () => set(() => ({ count: 0 })),
}));
