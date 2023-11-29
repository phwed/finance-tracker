import React from "react";
import { Alert } from "react-native";
import { RefreshControl } from "react-native-gesture-handler";
import { AnimatePresence, Paragraph, ScrollView, View } from "tamagui";

import Balance from "../../components/Balance";

import Header from "@/components/Header";
import HomeChart from "@/components/HomeChart";
import Stats from "@/components/Stats";
import { useAuthStore } from "@/zustand/stores/authStore";

export default function home() {
  const user = useAuthStore((state) => state.user);
  const signout = useAuthStore((state) => state.signout);
  const [loading, setLoading] = React.useState(false);

  const [filter, setFilter] = React.useState("Week");
  const [chartData, setChartData] = React.useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
      }
    ]
  });

  const fetchData = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

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
            onRefresh={() => fetchData()}
          />
        }
      >
        <Balance
          total_balance={5000}
          loading={loading}
        />

        <Stats loading={loading} />

        <HomeChart
          loading={loading}
          chartData={chartData}
          filter={filter}
        />
      </ScrollView>
    </View>
  );
}
