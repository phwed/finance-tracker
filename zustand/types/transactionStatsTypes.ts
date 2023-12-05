export const TRANSACTION_STATS_ACTION_TYPES = {
  INITIAL_VALUE: "",

  GET_TRANSACTION_STATS_START: "GET_TRANSACTION_STATS_START",
  GET_TRANSACTION_STATS_SUCCESS: "GET_TRANSACTION_STATS_SUCCESS",
  GET_TRANSACTION_STATS_ERROR: "GET_TRANSACTION_STATS_ERROR",

  ADD_TRANSACTION_STATS_START: "ADD_TRANSACTION_STATS_START",
  ADD_TRANSACTION_STATS_ERROR: "ADD_TRANSACTION_STATS_ERROR",
  ADD_TRANSACTION_STATS_SUCCESS: "ADD_TRANSACTION_STATS_SUCCESS",

  UPDATE_TRANSACTION_STATS_START: "UPDATE_TRANSACTION_STATS_START",
  UPDATE_TRANSACTION_STATS_FAIL: "UPDATE_TRANSACTION_STATS_FAIL",
  UPDATE_TRANSACTION_STATS_SUCCESS: "UPDATE_TRANSACTION_STATS_SUCCESS",

  DELETE_TRANSACTION_STATS_START: "DELETE_TRANSACTION_STATS_START",
  DELETE_TRANSACTION_STATS_SUCCESS: "DELETE_TRANSACTION_STATS_SUCCESS",
  DELETE_TRANSACTION_STATS_ERROR: "DELETE_TRANSACTION_STATS_ERROR"
};

export type transactionStats = {
  initial: number;
  current: number;
  uid: string;
  tgid: string;
  tgname: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
};

export interface TransactionStatsSliceInterface {
  TRANSACTION_STATS_ACTION_TYPE: (typeof TRANSACTION_STATS_ACTION_TYPES)[keyof typeof TRANSACTION_STATS_ACTION_TYPES];

  isGetTransactionStatsLoading: boolean;
  isAddTransactionStatsLoading: boolean;
  isUpdateTransactionStatsLoading: boolean;
  isDeleteTransactionStatsLoading: boolean;

  message: string;

  transactionStats: transactionStats[];

  resetActionTypeTransactionStats: () => void;

  setActionTypesTransactionStats: (
    object: Partial<TransactionStatsSliceInterface>
  ) => void;

  getTransactionStats: (uid: string) => void;

  addTransactionStats: (transactionStats: transactionStats) => void;

  updateTransactionStats: (transactionStats: transactionStats) => void;

  deleteTransactionStats: (transactionStats: transactionStats) => void;
}
