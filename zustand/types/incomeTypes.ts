export const INCOME_ACTION_TYPES = {
  INITIAL_VALUE: "",

  ADD_INCOME_START: "ADD_INCOME_START",
  ADD_INCOME_SUCCESS: "ADD_INCOME_SUCCESS",
  ADD_INCOME_ERROR: "ADD_INCOME_ERROR",

  GET_INCOME_START: "GET_INCOMES_START",
  GET_INCOME_SUCCESS: "GET_INCOMES_SUCCESS",
  GET_INCOME_ERROR: "GET_INCOMES_ERROR",

  UPDATE_INCOME_START: "UPDATE_INCOME_START",
  UPDATE_INCOME_SUCCESS: "UPDATE_INCOME_SUCCESS",
  UPDATE_INCOME_ERROR: "UPDATE_INCOME_ERROR",

  DELETE_INCOME_START: "DELETE_INCOME_START",
  DELETE_INCOME_SUCCESS: "DELETE_INCOME_SUCCESS",
  DELETE_INCOME_ERROR: "DELETE_INCOME_ERROR"
};

export type income = {
  description: string;
  name: string;
  date: Date;
  amount: number;
  uid: string;
};

export interface IncomeSliceInterface {
  INCOME_ACTION_TYPE: (typeof INCOME_ACTION_TYPES)[keyof typeof INCOME_ACTION_TYPES];

  isAddIncomeLoading: boolean;
  isGetIncomeLoading: boolean;
  isUpdateIncomeLoading: boolean;
  isDeleteIncomeLoading: boolean;

  message: string;

  incomes: income[];

  resetActionTypeIncome: () => void;

  setActionTypesIncome: (object: Partial<IncomeSliceInterface>) => void;

  addIncome: (income: income) => void;

  getIncomes: (uid: string) => void;

  updateIncome: (income: income) => void;

  deleteIncome: (income: income) => void;
}
