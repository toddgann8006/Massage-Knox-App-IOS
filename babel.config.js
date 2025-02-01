module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: ['QR_CODE'],
          safe: false,
          allowUndefined: true,
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
