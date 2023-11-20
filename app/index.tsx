import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Logo from "@assets/logo.png";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Button, H2, Text, View } from "tamagui";

import { brand } from "@/theme/colors";

export default function index() {
  return (
    <View flex={1}>
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

        <Text fontSize="$5">Making spending money easier and more fun</Text>

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
