import React from "react";
import { Alert } from "react-native";
import { RefreshControl } from "react-native-gesture-handler";
import { useNotifications } from "react-native-notificated";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useFocusEffect } from "expo-router";
import { AnimatePresence, Paragraph, ScrollView, View } from "tamagui";

import Balance from "../../components/Balance";

import Header from "@/components/Header";
import HomeChart from "@/components/HomeChart";
import FilterSheet from "@/components/Sheets/FilterSheet";
import Stats from "@/components/Stats";
import {
  dummyMonthData,
  dummyWeekData,
  dummyYearData
} from "@/constants/options";
import { useHomeSideEffects } from "@/hooks/useHomeSideEffects";
import { useAppStore } from "@/zustand/stores/appStore";
import { useAuthStore } from "@/zustand/stores/authStore";

export default function home() {
  // notification
  const { notify } = useNotifications();

  // store
  const store = useAppStore();
  const user = useAuthStore((state) => state.user);
  const uid = useAuthStore((state) => state.uid);
  const signout = useAuthStore((state) => state.signout);
  const transactionStats = useAppStore((state) => state.transactionStats);
  const getTransactionStats = useAppStore((state) => state.getTransactionStats);
  const isGetTransactionStatsLoading = useAppStore(
    (state) => state.isGetTransactionStatsLoading
  );

  // states
  const [loading, setLoading] = React.useState(false);
  const [filter, setFilter] = React.useState("Week");
  const [chartData, setChartData] = React.useState({});

  // refs
  const filterSheet = React.useRef<BottomSheetModal>(null);

  // functions
  const handleDismissFilterSheet = () => {
    filterSheet.current?.dismiss();
  };

  const filteredData = React.useMemo(() => {
    if (filter === "Week") {
      return dummyWeekData;
    } else if (filter === "Month") {
      return dummyMonthData;
    } else {
      return null;
    }
  }, [filter, chartData]);

  // callback functions
  const reloadData = React.useCallback(() => {
    getTransactionStats(uid);
  }, []);

  // effects
  useFocusEffect(
    React.useCallback(() => {
      if (transactionStats.length === 0) {
        getTransactionStats(uid);
      }
    }, [transactionStats])
  );

  // sideEffects
  useHomeSideEffects();

  return (
    <View
      bg="$background"
      flex={1}
    >
      <Header
        title="Finance Tracker"
        image_url={
          user?.profile_picture ??
          "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
        }
        onLogout={() => signout()}
      />

      <ScrollView
        flex={1}
        px="$4"
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => reloadData()}
          />
        }
      >
        <Balance
          total_balance={5000}
          loading={loading}
        />

        <Stats
          loading={isGetTransactionStatsLoading}
          stats={transactionStats}
        />

        <HomeChart
          loading={loading}
          chartData={filteredData}
          filter={filter}
          onFilter={() => filterSheet.current?.present()}
        />
      </ScrollView>

      <FilterSheet
        filter={filter}
        setFilter={setFilter}
        ref={filterSheet}
        onOpenChange={() => handleDismissFilterSheet()}
      />
    </View>
  );
}
