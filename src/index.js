import { createApp } from "vue"
import App from './App.vue'
import { forEach } from "lodash-es"

forEach(["🍎", "🍌", "🍊"], val => {
  console.log(val);
})

console.log(import.meta.env)
const eslint = require('eslint')

createApp(App).mount("#app")
