process.env.TAMAGUI_TARGET = "native"; // Don't forget to specify your TAMAGUI_TARGET here

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./",
            "@components": "./components",
            "@app": "./app*",
            "@assets": "./assets",
            "@config": "./config",
            "@constants": "./constants",
            "@hooks": "./hooks",
            "@utils": "./utils",
            "@types": "./types",
            "@theme": "./theme",
            "@zustand": "./zustand",
            "@amplify": "./amplify",
            "@providers": "./providers",
            "@graphql": "./graphql"
          }
        }
      ],
      [
        "transform-inline-environment-variables",
        // NOTE: include is optional, you can leave this part out
        {
          include: ["TAMAGUI_TARGET", "EXPO_ROUTER_APP_ROOT"]
        }
      ],
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.ts",
          logTimings: true
        }
      ],
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel")
    ]
  };
};
