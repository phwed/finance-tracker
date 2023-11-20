import { brandGreen, neutral } from "@/theme/colors";

export const chartConfig = (isDark: boolean) => ({
  backgroundGradientFrom: neutral[500],
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  backgroundGradientTo: neutral[500],
  decimalPlaces: 0, // optional, defaults to 2dp
  color: brandGreen.opacity,
  propsForLabels: {
    fontSize: 10,
    fontFamily: "GillSans"
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
});
