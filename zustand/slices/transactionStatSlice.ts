import { StateCreator } from "zustand";

import { APPWRITE_IDS } from "@/appwrite/config";
import { readFromCollectionByUid } from "@/appwrite/functions";
import { CombinedAppTypes } from "@/zustand/types";
import {
  TRANSACTION_STATS_ACTION_TYPES,
  transactionStats,
  TransactionStatsSliceInterface
} from "@/zustand/types/transactionStatsTypes";
export const transactionStatSlice: StateCreator<
  CombinedAppTypes,
  [],
  [],
  TransactionStatsSliceInterface
> = (set, get) => ({
  TRANSACTION_STATS_ACTION_TYPE: TRANSACTION_STATS_ACTION_TYPES.INITIAL_VALUE,

  isGetTransactionStatsLoading: false,
  isAddTransactionStatsLoading: false,
  isUpdateTransactionStatsLoading: false,
  isDeleteTransactionStatsLoading: false,

  message: "",

  transactionStats: [],

  resetActionTypeTransactionStats: () => {
    set({
      TRANSACTION_STATS_ACTION_TYPE:
        TRANSACTION_STATS_ACTION_TYPES.INITIAL_VALUE
    });
  },

  setActionTypesTransactionStats: (
    object: Partial<TransactionStatsSliceInterface>
  ) => {
    set(object);
  },
  getTransactionStats: (uid: string) => {
    set({
      isGetTransactionStatsLoading: true,
      TRANSACTION_STATS_ACTION_TYPE:
        TRANSACTION_STATS_ACTION_TYPES.GET_TRANSACTION_STATS_START
    });

     console.log(uid)

    readFromCollectionByUid(APPWRITE_IDS.COLLECTIONS.TRANSACTION_STATS, uid)
      .then((response) => {
        if (response.documents.length === 0) {
          set({
            isGetTransactionStatsLoading: false
          });
          return;
        }
        const responseArray = response.documents.map((document) => {
          return {
            $updatedAt: document.$updatedAt,
            $createdAt: document.$createdAt,
            $id: document.$id,
            initial: document.initial,
            current: document.current,
            uid: document.uid,
            tgid: document.tgid,
            tgname: document.tgname
          };
        });

        set({
          isGetTransactionStatsLoading: false,
          TRANSACTION_STATS_ACTION_TYPE:
            TRANSACTION_STATS_ACTION_TYPES.GET_TRANSACTION_STATS_SUCCESS,
          transactionStats: responseArray
        });
      })
      .catch((error) => {
        console.log(error.message);
        set({
          isGetTransactionStatsLoading: false,
          TRANSACTION_STATS_ACTION_TYPE:
            TRANSACTION_STATS_ACTION_TYPES.GET_TRANSACTION_STATS_ERROR,
          message: error.message
        });
      });
  },

  addTransactionStats: (transactionStats: transactionStats) => {
    console.log(transactionStats);
  },

  updateTransactionStats: (transactionStats: transactionStats) => {
    console.log(transactionStats);
  },

  deleteTransactionStats: (transactionStats: transactionStats) => {
    console.log(transactionStats);
  }
});
