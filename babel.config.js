module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '~controller': './dist/presentation/controllers',
          '~presentaion-protocols': 'dist/presentation/protocols',
          '~presentation-errors': 'dist/presentation/errors',
          '~presentation-helpers': 'dist/presentation/helpers',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts', '**/*.test.ts'],
};
