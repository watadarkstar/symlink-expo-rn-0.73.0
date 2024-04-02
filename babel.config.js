module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "*": "./",
            "@assets": "./assets",
            "@components": "./components",
            "@constants": "./constants",
            "@context": "./context",
            "@helpers": "./helpers",
            "@hooks": "./hooks",
            "@machines": "./machines",
            "@navigation": "./navigation",
            "@packageTypes": "./types",
            "@screens": "./screens",
            "@utils": "./utils",
            "@services": "./services",
          },
        },
      ],
      /** CAUTION: React Native Reanimated must be the last item in the plugins array */
      "react-native-reanimated/plugin",
    ],
  };
};
