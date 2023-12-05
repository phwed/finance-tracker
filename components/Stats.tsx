import React from "react";
import { useColorScheme } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CornerLeftDown, CornerRightUp } from "@tamagui/lucide-icons";
import { Skeleton } from "moti/skeleton";
import { Paragraph, View, XStack } from "tamagui";

import TransactionStatsEmpty from "@/components/edgecases/TransactionStatsEmpty";
import { brand } from "@/theme/colors";
import { formatCurrency } from "@/utils/formatCurrency";

type ItemProps = {
  tgname: string;
  initial: number;
  current: number;
  tgid: string;
};

interface IStats {
  loading: boolean;
  stats: ItemProps[];
}

export default function Stats({ loading, stats }: IStats) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const loadinngData = [
    {
      tgname: "Income",
      initial: 4000,
      current: 5000,
      tgid: "income"
    },
    {
      tgname: "Expenses",
      initial: 0,
      current: 5000,
      tgid: "expenses"
    }
  ];

  const calculatePercentageofChange = (initial: number, current: number) => {
    if (initial === 0) return 0;
    const percentage = ((current - initial) / initial) * 100;
    return percentage;
  };

  return (
    <View mt="$6">
      <FlatList
        data={loading ? loadinngData : stats}
        extraData={stats}
        horizontal
        ItemSeparatorComponent={() => <View width={15} />}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => <TransactionStatsEmpty loading={loading} />}
        renderItem={({ item }) => (
          <Skeleton.Group show={loading}>
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
                  <Paragraph color="gray">{item.tgname}</Paragraph>
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
                    {calculatePercentageofChange(item.initial, item.current) >
                    0 ? (
                      <CornerRightUp
                        color="green"
                        size={20}
                      />
                    ) : calculatePercentageofChange(
                        item.initial,
                        item.current
                      ) === 0 ? (
                      <CornerLeftDown
                        color="rgba(0,0,0,0.0)"
                        size={20}
                      />
                    ) : (
                      <CornerLeftDown
                        color="red"
                        size={20}
                      />
                    )}
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
                  <Paragraph color="$color">
                    {formatCurrency(item.current)}
                  </Paragraph>
                </Skeleton>
                <Skeleton
                  colorMode={isDark ? "light" : "dark"}
                  colors={[brand[100], brand[400]]}
                >
                  <Paragraph
                    size="$2"
                    color={
                      calculatePercentageofChange(item.initial, item.current) >
                      0
                        ? "green"
                        : calculatePercentageofChange(
                            item.initial,
                            item.current
                          ) === 0
                        ? "$color"
                        : "red"
                    }
                  >
                    {calculatePercentageofChange(
                      item.initial,
                      item.current
                    ).toFixed(2)}
                    %
                  </Paragraph>
                </Skeleton>
              </XStack>
            </View>
          </Skeleton.Group>
        )}
      />
    </View>
  );
}
