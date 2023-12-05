export const TRANSACTION_ACTION_TYPES = {
  INITIAL_VALUE: "",

  GET_TRANSACTION_START: "GET_TRANSACTIONS_START",
  GET_TRANSACTION_SUCCESS: "GET_TRANSACTIONS_SUCCESS",
  GET_TRANSACTION_ERROR: "GET_TRANSACTIONS_ERROR",

  ADD_TRANSACTION_START: "ADD_TRANSACTION_START",
  ADD_TRANSACTION_SUCCESS: "ADD_TRANSACTION_SUCCESS",
  ADD_TRANSACTION_ERROR: "ADD_TRANSACTION_ERROR",

  UPDATE_TRANSACTION_START: "UPDATE_TRANSACTION_START",
  UPDATE_TRANSACTION_SUCCESS: "UPDATE_TRANSACTION_SUCCESS",
  UPDATE_TRANSACTION_ERROR: "UPDATE_TRANSACTION_ERROR",

  DELETE_TRANSACTION_START: "DELETE_TRANSACTION_START",
  DELETE_TRANSACTION_SUCCESS: "DELETE_TRANSACTION_SUCCESS",
  DELETE_TRANSACTION_ERROR: "DELETE_TRANSACTION_ERROR"
};

export type transaction = {
  name: string;
  description: string;
  amount: number;
  day: string;
  month: string;
  year: string;
  uid: string;
  tgid: string;
};

export interface TransactionSliceInterface {
  TRANSACTION_ACTION_TYPE: (typeof TRANSACTION_ACTION_TYPES)[keyof typeof TRANSACTION_ACTION_TYPES];

  isGetTransactionLoading: boolean;
  isAddTransactionLoading: boolean;
  isUpdateTransactionLoading: boolean;
  isDeleteTransactionLoading: boolean;

  message: string;

  transactions: transaction[];

  resetActionTypeTransaction: () => void;

  setActionTypesTransaction: (
    object: Partial<TransactionSliceInterface>
  ) => void;

  getTransactions: (uid: string) => void;

  addTransaction: (transaction: transaction) => void;

  updateTransaction: (transaction: transaction) => void;

  deleteTransaction: (transaction: transaction) => void;
}
