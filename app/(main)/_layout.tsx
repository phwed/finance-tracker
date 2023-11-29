import React from "react";
import { Platform, StyleSheet, useColorScheme } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import IconBold from "@components/icons/IconBold";
import IconLinear from "@components/icons/IconLinear";
import { BlurView } from "expo-blur";
import { Redirect, Stack, Tabs } from "expo-router";
import { View, YStack } from "tamagui";

import { brand } from "@/theme/colors";
import { useAuthStore } from "@/zustand/stores/authStore";

export default function _layout() {
  const isLoggedin = useAuthStore((state) => state.isLoggedin);
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const isAndroid = Platform.OS === "android";
  const isIos = Platform.OS === "ios";

  if (!isLoggedin) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: insets.bottom > 5 ? insets.bottom : 15,
          left: wp(3),
          right: wp(3),
          paddingTop: isIos ? 10 : 0,
          borderRadius: 20,
          shadowColor: "rgb(47, 64, 85)",
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.12,
          shadowRadius: 16,
          height: isAndroid ? 60 : 80
        },
        tabBarBackground: () => (
          <BlurView
            intensity={80}
            style={{
              ...StyleSheet.absoluteFillObject,
              borderRadius: 20,
              overflow: "hidden",
              backgroundColor: "rgba(101, 92, 155, 0.4)"
            }}
          />
        )
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <YStack>
              {focused ? (
                <IconBold
                  color={isDark ? "white" : brand[500]}
                  name="i-home-2"
                  size={35}
                />
              ) : (
                <IconLinear
                  color={isDark ? "white" : brand[500]}
                  name="i-home-2"
                  size={35}
                />
              )}
            </YStack>
          )
        }}
      />

      <Tabs.Screen
        name="transactions"
        options={{
          tabBarIcon: ({ focused }) => (
            <YStack>
              {focused ? (
                <IconBold
                  color={isDark ? "white" : brand[500]}
                  name="i-money-send"
                  size={35}
                />
              ) : (
                <IconLinear
                  color={isDark ? "white" : brand[500]}
                  name="i-money-send"
                  size={35}
                />
              )}
            </YStack>
          )
        }}
      />

      <Tabs.Screen
        name="goals"
        options={{
          tabBarIcon: ({ focused }) => (
            <YStack>
              {focused ? (
                <IconBold
                  color={isDark ? "white" : brand[500]}
                  name="i-flash"
                  size={35}
                />
              ) : (
                <IconLinear
                  color={isDark ? "white" : brand[500]}
                  name="i-flash"
                  size={35}
                />
              )}
            </YStack>
          )
        }}
      />
    </Tabs>
  );
}
