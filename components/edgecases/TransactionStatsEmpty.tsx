import React from "react";
import { useColorScheme } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { CornerLeftDown, CornerRightUp } from "@tamagui/lucide-icons";
import { Skeleton } from "moti/skeleton";
import { Paragraph, View, XStack } from "tamagui";

import { brand } from "@/theme/colors";
import { formatCurrency } from "@/utils/formatCurrency";

export default function TransactionStatsEmpty({
  loading
}: {
  loading: boolean;
}) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View
      px="$3"
      py="$3"
      br="$3"
      borderWidth={1}
      borderColor={brand[300]}
      bg={loading ? brand.opacity(0.5) : brand.opacity(0.1)}
      gap="$3"
    >
      <XStack
        jc="space-between"
        gap={"$7"}
      >
        <Skeleton
          colorMode={isDark ? "light" : "dark"}
          colors={[brand[100], brand[400]]}
        >
          <Paragraph color="gray">No Transactions yet</Paragraph>
        </Skeleton>
        <Skeleton
          colorMode={isDark ? "light" : "dark"}
          colors={[brand[100], brand[400]]}
        >
          <View
            bg="transparent"
            p="$1.5"
            borderRadius={20}
          >
            <CornerLeftDown
              color="rgba(0,0,0,0.0)"
              size={20}
            />
          </View>
        </Skeleton>
      </XStack>

      <XStack
        jc="space-between"
        ai="center"
        gap={"$7"}
      >
        <Skeleton
          colorMode={isDark ? "light" : "dark"}
          colors={[brand[100], brand[400]]}
        >
          <Paragraph color="$color">GHS 0.00</Paragraph>
        </Skeleton>
        <Skeleton
          colorMode={isDark ? "light" : "dark"}
          colors={[brand[100], brand[400]]}
        >
          <Paragraph size="$2">0.00 %</Paragraph>
        </Skeleton>
      </XStack>
    </View>
  );
}
