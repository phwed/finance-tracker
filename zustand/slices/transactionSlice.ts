import { StateCreator } from "zustand";

import { CombinedAppTypes } from "@/zustand/types";
import {
  transaction,
  TRANSACTION_ACTION_TYPES,
  TransactionSliceInterface
} from "@/zustand/types/transactionTypes";

export const transactionSlice: StateCreator<
  CombinedAppTypes,
  [],
  [],
  TransactionSliceInterface
> = (set, get) => ({
  TRANSACTION_ACTION_TYPE: TRANSACTION_ACTION_TYPES.INITIAL_VALUE,

  isGetTransactionLoading: false,
  isAddTransactionLoading: false,
  isUpdateTransactionLoading: false,
  isDeleteTransactionLoading: false,

  message: "",

  transactions: [],

  resetActionTypeTransaction: () => {
    set({ TRANSACTION_ACTION_TYPE: TRANSACTION_ACTION_TYPES.INITIAL_VALUE });
  },

  setActionTypesTransaction: (object: Partial<TransactionSliceInterface>) => {
    set(object);
  },

  getTransactions: async (uid: string) => {
    console.log(uid);
  },

  addTransaction: async (transaction: transaction) => {
    console.log(transaction);
  },

  updateTransaction: async (transaction: transaction) => {
    console.log(transaction);
  },

  deleteTransaction: async (transaction: transaction) => {
    console.log(transaction);
  }
});
