import { Suspense, useEffect } from "react";
import React from "react";
import { useColorScheme, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createNotifications } from "react-native-notificated";
import {
  Outfit_100Thin as thin,
  Outfit_200ExtraLight as extraLight,
  Outfit_300Light as light,
  Outfit_400Regular as regular,
  Outfit_500Medium as medium,
  Outfit_600SemiBold as semiBold,
  Outfit_700Bold as bold,
  Outfit_800ExtraBold as extraBold,
  Outfit_900Black as black
} from "@expo-google-fonts/outfit";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import * as Font from "expo-font";
import { Slot, SplashScreen, Stack, useRouter } from "expo-router";
import { TamaguiProvider, Text, Theme } from "tamagui";

import config from "../tamagui.config";

import { Error } from "@/theme/notificated/Error";
import { Info } from "@/theme/notificated/Info";
import { Success } from "@/theme/notificated/Success";
import { Warning } from "@/theme/notificated/Warning";
import { useAuthStore } from "@/zustand/stores/authStore";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [appIsReady, setAppIsReady] = React.useState(false);
  const colorScheme = useColorScheme();
  const appEntry = useAuthStore((state) => state.appEntry);

  const { NotificationsProvider } = createNotifications({
    isNotch: true,
    variants: {
      success: {
        component: Success
      },
      error: {
        component: Error
      },
      info: {
        component: Info
      },
      warning: {
        component: Warning
      }
    },
    defaultStylesSettings: {
      darkMode: colorScheme === "dark",
      globalConfig: {
        titleFamily: "GillSans",
        descriptionFamily: "GillSans"
      }
    }
  });

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          IconBold: require("../assets/icons/IconBold.ttf"),
          IconLinear: require("../assets/icons/IconLinear.ttf"),
          Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
          InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
          Outfit: regular,
          OutfitExtraLight: extraLight,
          OutfitLight: light,
          OutfitMedium: medium,
          OutfitExtraBold: extraBold,
          OutfitBlack: black,
          OutfitThin: thin,
          OutfitBold: bold,
          OutfitSemiBold: semiBold
        });

        appEntry();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TamaguiProvider config={config}>
        <Suspense fallback={<Text>Loading...</Text>}>
          <Theme name={colorScheme}>
            <NotificationsProvider />
            <ThemeProvider
              value={colorScheme === "light" ? DefaultTheme : DarkTheme}
            >
              <View
                style={{ flex: 1 }}
                onLayout={onLayoutRootView}
              >
                <Slot />
              </View>
            </ThemeProvider>
          </Theme>
        </Suspense>
      </TamaguiProvider>
    </GestureHandlerRootView>
  );
}
