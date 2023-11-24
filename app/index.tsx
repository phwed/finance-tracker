import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Logo from "@assets/logo.png";
import { Image } from "expo-image";
import { Link, Redirect } from "expo-router";
import { Button, H2, Paragraph, Text, View } from "tamagui";

import { brand } from "@/theme/colors";
import { useAuthStore } from "@/zustand/stores/authStore";

export default function index() {
  const isLoggedin = useAuthStore((state) => state.isLoggedin);

  if (isLoggedin) {
    return <Redirect href="/home" />;
  }

  return (
    <View
      flex={1}
      bg="$background"
    >
      <View
        h={hp(65)}
        bg={brand.opacity(0.3)}
        m="$2"
        br="$5"
      >
        <Image
          source={Logo}
          style={{
            width: wp(90),
            height: hp(65),
            resizeMode: "contain"
          }}
        />
      </View>

      <View
        gap="$3"
        jc="center"
        ai="center"
        p="$7"
      >
        <H2>Manage your Finanace</H2>

        <Paragraph
          fontSize="$5"
          textAlign="center"
        >
          Making spending money easier and more fun
        </Paragraph>

        <View
          theme="brand"
          mt="$8"
        >
          <Link
            href="/login"
            asChild
          >
            <Button size="$5">Get Started</Button>
          </Link>
        </View>
      </View>
    </View>
  );
}
