import React from "react";
import { useNotifications } from "react-native-notificated";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Logo from "@assets/logo.png";
import { Eye, EyeOff } from "@tamagui/lucide-icons";
import { Image } from "expo-image";
import { useFocusEffect, useRouter } from "expo-router";
import { FormikProvider, useFormik } from "formik";
import {
  Button,
  Input,
  Paragraph,
  Spinner,
  Stack,
  View,
  XStack,
  YStack
} from "tamagui";
import * as Yup from "yup";

import FormContainer from "@/components/FormContainer";
import { brand } from "@/theme/colors";
import { useAuthStore } from "@/zustand/stores/authStore";
import { AUTH_ACTION_TYPES } from "@/zustand/types/authTypes";

interface ILogin {
  email: string;
  password: string;
}

export default function Login() {
  const insets = useSafeAreaInsets();
  const { notify } = useNotifications();
  const [showPassword, togglePassword] = React.useReducer((s) => !s, false);

  // zustand
  const isLoginLoading = useAuthStore((state) => state.isLoginLoading);
  const login = useAuthStore((state) => state.login);
  const message = useAuthStore((state) => state.message);
  const AUTH_ACTION_TYPE = useAuthStore((state) => state.AUTH_ACTION_TYPE);
  const reseActionTypeAuth = useAuthStore((state) => state.reseActionTypeAuth);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validateOnChange: false,
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required")
    }),
    onSubmit: (values: ILogin) => {
      login(values.email, values.password);
    }
  });

  const { values, setFieldValue, handleSubmit, handleBlur, errors } = formik;

  // side effects
  useFocusEffect(
    React.useCallback(() => {
      if (AUTH_ACTION_TYPE === AUTH_ACTION_TYPES.LOGIN_SUCCESS) {
        notify("success", {
          params: {
            title: "Login Successful",
            description: message
          }
        });
        reseActionTypeAuth();
        router.replace("/home");
      } else if (AUTH_ACTION_TYPE === AUTH_ACTION_TYPES.LOGIN_ERROR) {
        notify("error", {
          params: {
            title: "Login Error",
            description: message
          }
        });
        reseActionTypeAuth();
      }
    }, [AUTH_ACTION_TYPE])
  );

  return (
    <View
      pt={insets.top + 5}
      pb={insets.bottom}
      bg="$background"
      px="$4"
      flex={1}
    >
      <FormContainer fillScreen>
        <View
          h={hp(45)}
          bg={brand.opacity(0.3)}
          m="$2"
          br="$5"
        >
          <Image
            source={Logo}
            style={{
              width: wp(90),
              height: hp(45),
              resizeMode: "contain"
            }}
          />
        </View>

        <FormikProvider value={formik}>
          <YStack space="$5">
            <Stack gap="$2">
              <Paragraph>Email</Paragraph>

              <Input
                placeholder="Email"
                value={values.email}
                onChangeText={(text) => setFieldValue("email", text)}
                onBlur={handleBlur("email")}
                autoCapitalize="none"
                keyboardType="email-address"
                autoCorrect={false}
                borderColor={errors.email ? "red" : "$borderColor"}
              />

              {errors.email && (
                <Paragraph color="red">{errors.email}</Paragraph>
              )}
            </Stack>

            <Stack gap="$2">
              <Paragraph>Password</Paragraph>

              <XStack>
                <Input
                  w="100%"
                  placeholder="Password"
                  value={values.password}
                  onChangeText={(text) => setFieldValue("password", text)}
                  onBlur={handleBlur("password")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  borderColor={errors.password ? "red" : "$borderColor"}
                  secureTextEntry={!showPassword}
                />

                <Button
                  position="absolute"
                  onPress={togglePassword}
                  right={0}
                  icon={showPassword ? <EyeOff /> : <Eye />}
                />
              </XStack>

              {errors.email && (
                <Paragraph color="red">{errors.password}</Paragraph>
              )}
            </Stack>

            <View theme="brand">
              <Button
                onPress={() => handleSubmit()}
                w="100%"
                mt="$5"
              >
                {isLoginLoading ? <Spinner /> : "Login"}
              </Button>
            </View>
          </YStack>
        </FormikProvider>
      </FormContainer>
    </View>
  );
}
