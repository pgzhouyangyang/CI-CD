import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

console.log(App)

function aa() {
  window.console.log(333)
}

aa()
