import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { zustandStorage } from "../middlewares/storage";

import { authSlice } from "@/zustand/slices/authSlice";
import { CombinedAuthTypes } from "@/zustand/types";

let store = (...set: Parameters<typeof authSlice>) => ({
  ...authSlice(...set)
});

store = persist(store, {
  name: "auth",
  storage: createJSONStorage(() => zustandStorage)
});

export const useAuthStore = create<CombinedAuthTypes>(store);
