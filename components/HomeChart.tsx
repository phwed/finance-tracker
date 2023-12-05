import React from "react";
import { useColorScheme } from "react-native";
import { LineChart } from "react-native-chart-kit";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import { ChevronDown } from "@tamagui/lucide-icons";
import { Skeleton } from "moti/skeleton";
import { Button, Paragraph, Spinner, View, XStack } from "tamagui";

import { brand, brandGreen, neutral } from "@/theme/colors";
import If from "@/utils/If";

interface IHomeChart {
  loading?: boolean;
  chartData?: any;
  filter?: string;
  onFilter?: () => void;
}

export default function HomeChart({
  loading,
  filter,
  chartData,
  onFilter
}: IHomeChart) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  return (
    <Skeleton.Group show={loading}>
      <View
        mt="$7"
        ai="center"
      >
        <XStack
          w="100%"
          mb="$4"
          jc="space-between"
          ai="center"
        >
          <Paragraph size="$5">Transactions Summary</Paragraph>
          <Button
            iconAfter={ChevronDown}
            onPress={onFilter}
          >
            {filter}
          </Button>
        </XStack>

        <If
          condition={chartData}
          then={
            <LineChart
              data={
                chartData ?? {
                  labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Nov",
                    "Dec"
                  ],
                  datasets: [
                    {
                      data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                      ]
                    }
                  ]
                }
              }
              width={wp(100)} // from react-native
              height={hp(30)}
              yAxisLabel="¢"
              yAxisSuffix="k"
              withInnerLines={false} // hide the grid behind chart
              withHorizontalLabels={true} // hide horizontal labels
              withOuterLines={false} // hide lines next to labels
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundGradientFrom: neutral[100],
                backgroundGradientFromOpacity: 0,
                backgroundGradientToOpacity: 0,
                backgroundGradientTo: neutral[800],
                decimalPlaces: 0,
                color: !isDark
                  ? brand.opacity
                  : (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                propsForLabels: {
                  fontSize: 10,
                  fontFamily: "regular"
                },
                labelColor: isDark
                  ? (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
                  : (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "0",
                  strokeWidth: "0",
                  stroke: brandGreen[500]
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          }
          else={
            <View
              height={hp(30)}
              width={"100%"}
              ai="center"
              jc="center"
              br="$8"
              bg={
                loading
                  ? brand.opacity(0.5)
                  : isDark
                  ? neutral[700]
                  : neutral[200]
              }
            >
              {!loading && <Paragraph size="$5">No data to display</Paragraph>}
            </View>
          }
        />
      </View>
    </Skeleton.Group>
  );
}
