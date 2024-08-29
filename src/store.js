import { create } from "zustand";

const useStore = create((set) => ({
  animation: "Idle",
  setAnimation: (animation) => set({ animation }),
}));

export default useStore;
