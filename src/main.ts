import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueDragResize from '@/components/VueDragResize/vue-drag-resize'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import icon from '@/components/icon/Icon.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(VueDragResize)
app.use((Vue)=>{
  Vue.component(icon.name,icon)
})
app.use(ElementPlus, { size: 'mini' })
app.use(createPinia())
app.use(router)
app.mount('#app')
