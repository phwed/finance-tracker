import React from "react";
import { Redirect, Stack } from "expo-router";

import { useAuthStore } from "@/zustand/stores/authStore";

export default function _layout() {
  const isLoggedin = useAuthStore((state) => state.isLoggedin);

  if (!isLoggedin) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    />
  );
}
