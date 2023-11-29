import React from "react";
import { Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LogOut } from "@tamagui/lucide-icons";
import { Avatar, Button, H4, Paragraph, View, XStack } from "tamagui";

import IconLinear from "@/components/icons/IconLinear";

interface IHeader {
  onLogout: () => void;
  image_url: string;
  title: string;
}

export default function Header({ onLogout, image_url, title }: IHeader) {
  const insets = useSafeAreaInsets();

  return (
    <XStack
      pt={insets.top + 10}
      px="$4"
      pb="$3"
      jc="space-between"
    >
      <H4 size="$7">{title}</H4>

      <XStack gap="$3">
        <Avatar
          size="$3"
          circular
        >
          <Avatar.Image
            source={{
              uri: image_url
            }}
          />
          <Avatar.Fallback
            delayMs={600}
            backgroundColor="$blue10"
          />
        </Avatar>

        <Button
          icon={
            <IconLinear
              name="i-logout-1"
              size={18}
            />
          }
          size="$3"
          onPress={() =>
            Alert.alert("Logout", "Are you sure you want to logout?", [
              {
                text: "Cancel",
                style: "cancel"
              },
              {
                text: "Logout",
                onPress: () => onLogout()
              }
            ])
          }
        />
      </XStack>
    </XStack>
  );
}
