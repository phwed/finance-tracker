import { useCallback } from "react";
import { useNotifications } from "react-native-notificated";
import { useFocusEffect } from "expo-router";

import { TRANSACTION_STATS_ACTION_TYPES } from "../zustand/types/transactionStatsTypes";

import { useAppStore } from "@/zustand/stores/appStore";

export const useHomeSideEffects = () => {
  const { notify } = useNotifications();
  const resetActionTypeTransactionStats = useAppStore(
    (state) => state.resetActionTypeTransactionStats
  );
  const TRANSACTION_STATS_ACTION_TYPE = useAppStore(
    (state) => state.TRANSACTION_STATS_ACTION_TYPE
  );
  const message = useAppStore((state) => state.message);

  useFocusEffect(
    useCallback(() => {
      if (
        TRANSACTION_STATS_ACTION_TYPE ===
        TRANSACTION_STATS_ACTION_TYPES.GET_TRANSACTION_STATS_ERROR
      ) {
        notify("error", {
          params: {
            title: "Error",
            description: message
          }
        });
        resetActionTypeTransactionStats();
        return;
      }
    }, [TRANSACTION_STATS_ACTION_TYPE])
  );
};
