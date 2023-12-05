import { AuthSliceInterface } from "@/zustand/types/authTypes";
import { BudgetSliceInterface } from "@/zustand/types/budgetTypes";
import { IncomeSliceInterface } from "@/zustand/types/incomeTypes";
import { TransactionStatsSliceInterface } from "@/zustand/types/transactionStatsTypes";
import { TransactionSliceInterface } from "@/zustand/types/transactionTypes";

export type CombinedAuthTypes = AuthSliceInterface;

export type CombinedAppTypes = TransactionSliceInterface &
  IncomeSliceInterface &
  BudgetSliceInterface &
  TransactionStatsSliceInterface;
