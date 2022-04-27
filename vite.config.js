import { defineConfig } from "vite"
// compile SFC
import vue from "@vitejs/plugin-vue"
// transform jsx
import jsx from "@vitejs/plugin-vue-jsx"
// polyfill
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  server: {
    // auto open internal browser
    // open: true,
  },
  plugins: [
    vue(),
    // jsx(),
    // legacy({
    //   targets: ['ie 8']
    // })
  ]
})