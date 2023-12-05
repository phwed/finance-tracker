import { StateCreator } from "zustand";

import { CombinedAppTypes } from "@/zustand/types";
import {
  income,
  INCOME_ACTION_TYPES,
  IncomeSliceInterface
} from "@/zustand/types/incomeTypes";

export const incomeSlice: StateCreator<
  CombinedAppTypes,
  [],
  [],
  IncomeSliceInterface
> = (set, get) => ({
  INCOME_ACTION_TYPE: INCOME_ACTION_TYPES.INITIAL_VALUE,

  isGetIncomeLoading: false,
  isAddIncomeLoading: false,
  isUpdateIncomeLoading: false,
  isDeleteIncomeLoading: false,

  message: "",

  incomes: [],

  resetActionTypeIncome: () => {
    set({ INCOME_ACTION_TYPE: INCOME_ACTION_TYPES.INITIAL_VALUE });
  },

  setActionTypesIncome: (object: Partial<IncomeSliceInterface>) => {
    set(object);
  },

  getIncomes: async (uid: string) => {
    console.log(uid);
  },

  addIncome: async (income: income) => {
    console.log(income);
  },

  updateIncome: async (income: income) => {
    console.log(income);
  },

  deleteIncome: async (income: income) => {
    console.log(income);
  }
});
