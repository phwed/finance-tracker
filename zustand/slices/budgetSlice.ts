import { StateCreator } from "zustand";

import { CombinedAppTypes } from "@/zustand/types";
import {
  budget,
  BUDGET_ACTION_TYPES,
  BudgetSliceInterface
} from "@/zustand/types/budgetTypes";

export const budgetSlice: StateCreator<
  CombinedAppTypes,
  [],
  [],
  BudgetSliceInterface
> = (set, get) => ({
  BUDGET_ACTION_TYPE: BUDGET_ACTION_TYPES.INITIAL_VALUE,

  isGetBudgetLoading: false,
  isAddBudgetLoading: false,
  isUpdateBudgetLoading: false,
  isDeleteBudgetLoading: false,

  message: "",

  budgets: [],

  resetActionTypeBudget: () => {
    set({ BUDGET_ACTION_TYPE: BUDGET_ACTION_TYPES.INITIAL_VALUE });
  },

  setActionTypesBudget: (object: Partial<BudgetSliceInterface>) => {
    set(object);
  },

  getBudgets: async (uid: string) => {
    console.log(uid);
  },

  addBudget: async (budget: budget) => {
    console.log(budget);
  },

  updateBudget: async (budget: budget) => {
    console.log(budget);
  },

  deleteBudget: async (budget: budget) => {
    console.log(budget);
  }
});
