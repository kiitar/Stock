module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ios.js', '.android.js'],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _atoms: './src/components/atoms',
          _molecules: './src/components/molecules',
          _organisms: './src/components/organisms',
          _routes: './src/routes',
          _screens: './src/screens',
          _services: './src/services',
          _styles: './src/styles',
          _utils: './src/utils',
        },
      },
    ],
  ],
};
