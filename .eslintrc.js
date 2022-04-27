module.exports = {
  root: true,
  env: {
    es6: true, // 支持新的 ES6 全局变量，同时自动启用 ES6 语法支持
    node: true, // 启动node环境
    browser: true, // 浏览器环境中的全局变量。
  },
  extends: ['eslint:recommended', 'standard', 'plugin:prettier/recommended'],
}
