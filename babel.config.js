module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['./src'], // Укажите корневую папку вашего проекта
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // Укажите расширения файлов
    }],
  ],

};
