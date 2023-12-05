export const BUDGET_ACTION_TYPES = {
  INITIAL_VALUE: "",

  GET_BUDGET_START: "GET_BUDGETS_START",
  GET_BUDGET_SUCCESS: "GET_BUDGETS_SUCCESS",
  GET_BUDGET_ERROR: "GET_BUDGETS_ERROR",

  ADD_BUDGET_START: "ADD_BUDGET_START",
  ADD_BUDGET_SUCCESS: "ADD_BUDGET_SUCCESS",
  ADD_BUDGET_ERROR: "ADD_BUDGET_ERROR",

  UPDATE_BUDGET_START: "UPDATE_BUDGET_START",
  UPDATE_BUDGET_SUCCESS: "UPDATE_BUDGET_SUCCESS",
  UPDATE_BUDGET_ERROR: "UPDATE_BUDGET_ERROR",

  DELETE_BUDGET_START: "DELETE_BUDGET_START",
  DELETE_BUDGET_SUCCESS: "DELETE_BUDGET_SUCCESS",
  DELETE_BUDGET_ERROR: "DELETE_BUDGET_ERROR"
};

export type budget = {
  goal: string;
  description: string;
  amount: number;
  period: Date;
  uid: string;
  status: string;
};

export interface BudgetSliceInterface {
  BUDGET_ACTION_TYPE: (typeof BUDGET_ACTION_TYPES)[keyof typeof BUDGET_ACTION_TYPES];

  isGetBudgetLoading: boolean;
  isAddBudgetLoading: boolean;
  isUpdateBudgetLoading: boolean;
  isDeleteBudgetLoading: boolean;

  message: string;

  budgets: budget[];

  resetActionTypeBudget: () => void;

  setActionTypesBudget: (object: Partial<BudgetSliceInterface>) => void;

  getBudgets: (uid: string) => void;

  addBudget: (budget: budget) => void;

  updateBudget: (budget: budget) => void;

  deleteBudget: (budget: budget) => void;
}
