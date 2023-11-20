import { create, StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { mmkvStorage } from "@/utils/mmkvStorage";

type IPrefs = {
  scheme: "dark" | "light" | "system";
  setScheme: (scheme: "dark" | "light" | "system") => void;
  actionType: string;
  resetActionType: () => void;
};

const prefsSlice: StateCreator<IPrefs, [], [], IPrefs> = (set) => ({
  scheme: "system",
  actionType: "",
  setScheme: (scheme) => {
    set({ scheme: scheme, actionType: "themeChanged" });
  },
  resetActionType: () => {
    set({ actionType: "" });
  }
});

let store = (...set: Parameters<typeof prefsSlice>) => ({
  ...prefsSlice(...set)
});

store = persist(store, {
  name: "prefs",
  storage: createJSONStorage(() => mmkvStorage)
});

export const usePrefsStore = create<IPrefs>(store);
