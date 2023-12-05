import React, { forwardRef, useMemo } from "react";
import { useColorScheme } from "react-native";
import BottomSheet, {
  // BottomSheetBackdrop,
  BottomSheetModal
} from "@gorhom/bottom-sheet";
// import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { Button, Paragraph, View, XStack } from "tamagui";

import { filters } from "@/constants/options";
import { brand, neutral } from "@/theme/colors";

interface Props {
  onOpenChange: () => void;
  filter: string;
  setFilter: (filter: string) => void;
}

const FilterSheet = forwardRef<BottomSheet, Props>(
  ({ onOpenChange, filter, setFilter }, ref: React.Ref<any>) => {
    const snapPoints = useMemo(() => ["25%", "25%"], []);
    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";

    // const renderBackdrop = React.useCallback(
    //   (
    //     props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps
    //   ) => <BottomSheetBackdrop {...props} />,
    //   []
    // );

    return (
      <React.Fragment>
        <BottomSheetModal
          ref={ref}
          index={1}
          snapPoints={snapPoints}
          enablePanDownToClose
          keyboardBehavior="interactive"
          keyboardBlurBehavior="restore"
          backgroundStyle={{
            backgroundColor: isDark ? neutral[800] : "white"
          }}
          handleIndicatorStyle={{
            backgroundColor: brand[500]
          }}
          // backdropComponent={renderBackdrop}
        >
          <View
            px="$3"
            ai="center"
          >
            <Paragraph textAlign="center">
              Select a time period to see how your spending has changed.
            </Paragraph>

            <XStack
              space="$2"
              mt="$5"
            >
              {filters.map((item, index) => (
                <Button
                  key={index}
                  onPress={() => {
                    setFilter(item);
                  }}
                  bg={item === filter ? brand[400] : "$backgroundFocus"}
                >
                  {item}
                </Button>
              ))}
            </XStack>
          </View>
        </BottomSheetModal>
      </React.Fragment>
    );
  }
);

// display name
FilterSheet.displayName = "FilterSheet";

export default FilterSheet;
