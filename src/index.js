import { createApp } from "vue"
import App from './App.vue'
import { forEach } from "lodash-es"

forEach(["🍎", "🍌", "🍊"], val => {
  console.log(val);
})

createApp(App).mount("#app")
