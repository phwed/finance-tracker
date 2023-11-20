import React from "react";
import { useColorScheme } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNotificationController } from "react-native-notificated";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { X } from "@tamagui/lucide-icons";
import { Image } from "expo-image";
import { Paragraph, XStack, YStack } from "tamagui";

import { blue } from "@/theme/colors";

type Props = {
  title: string;
  description: string;
};

export const Info = ({ title, description }: Props) => {
  const { remove } = useNotificationController();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <XStack
      backgroundColor={isDark ? "$backgroundFocus" : "#fff"}
      width={wp(95)}
      ml={wp(2.5)}
      py="$5"
      px="$4"
      space="$3"
      justifyContent="space-between"
      alignItems="center"
      borderRadius={"$6"}
      borderWidth={1}
      borderColor={blue[400]}
    >
      <Image
        source={require("@/assets/notificated-icons/info.png")}
        style={{ width: 40, height: 40 }}
      />
      <YStack
        flex={1}
        space="$2"
      >
        {title && <Paragraph fontWeight="600">{title}</Paragraph>}
        {description && <Paragraph size="$3">{description}</Paragraph>}
      </YStack>
      <TouchableOpacity
        onPress={() => {
          remove();
        }}
      >
        <X />
      </TouchableOpacity>
    </XStack>
  );
};
