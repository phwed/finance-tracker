import React from "react";
import { Alert } from "react-native";
import { Paragraph, View } from "tamagui";

import Header from "@/components/Header";
import { useAuthStore } from "@/zustand/stores/authStore";

export default function home() {
  const user = useAuthStore((state) => state.user);
  const signout = useAuthStore((state) => state.signout);

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
        // onLogout={() => signout()}
        onLogout={() => console.log("something")}
      />
    </View>
  );
}
