/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    ['@vue/babel-plugin-jsx'],
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        style: true
      },
      'ant-design-vue'
    ]
  ]
};
