import React from "react";
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps
} from "react-native-keyboard-aware-scroll-view";

interface Props extends KeyboardAwareScrollViewProps {
  children: React.ReactNode;
  fillScreen?: boolean;
  extraScrollHeight?: number;
}

export default function FormContainer(props: Props) {
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      extraScrollHeight={props.extraScrollHeight ? props.extraScrollHeight : 0}
      enableOnAndroid={true}
      bounces={false}
      contentContainerStyle={{
        flexGrow: props.fillScreen ? 1 : undefined
      }}
    >
      {props.children}
    </KeyboardAwareScrollView>
  );
}
