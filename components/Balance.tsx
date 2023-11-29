import React from "react";
import { useColorScheme } from "react-native";
import { Skeleton } from "moti/skeleton";
import { H4, Paragraph, View, XStack, YStack } from "tamagui";

import { brand } from "@/theme/colors";
import { formatCurrency } from "@/utils/formatCurrency";

interface IBalance {
  total_balance: number;
  loading?: boolean;
}

export default function Balance({ total_balance, loading }: IBalance) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <Skeleton.Group show={loading}>
      <YStack gap="$1">
        <XStack>
          <Skeleton
            colorMode={isDark ? "light" : "dark"}
            colors={[brand[100], brand[400]]}
          >
            <H4
              size="$9"
              lineHeight={"$10"}
            >
              {formatCurrency(total_balance ?? 0)}
            </H4>
          </Skeleton>
        </XStack>

        <XStack>
          <Skeleton
            colorMode={isDark ? "light" : "dark"}
            colors={[brand[100], brand[400]]}
          >
            <Paragraph>Available Balance</Paragraph>
          </Skeleton>
        </XStack>
      </YStack>
    </Skeleton.Group>
  );
}
