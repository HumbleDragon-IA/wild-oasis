import { create } from "zustand";

const useDarkModeStore = create((set, get) => ({
  isDarkModeOn: "light-mode",

  toggleDarkMode: (mode) => set((state) => ({ isDarkModeOn: mode })),

  getIsInDarkMode: () => get().isDarkModeOn,
}));

export default useDarkModeStore;
