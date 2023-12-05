import { create } from "zustand";

import { budgetSlice } from "@/zustand/slices/budgetSlice";
import { incomeSlice } from "@/zustand/slices/incomeSlice";
import { transactionSlice } from "@/zustand/slices/transactionSlice";
import { transactionStatSlice } from "@/zustand/slices/transactionStatSlice";
import { CombinedAppTypes } from "@/zustand/types";

export const useAppStore = create<CombinedAppTypes>((...set) => ({
  ...transactionSlice(...set),
  ...budgetSlice(...set),
  ...incomeSlice(...set),
  ...transactionStatSlice(...set)
}));
