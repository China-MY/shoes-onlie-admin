import './assets/main.scss'
import 'element-plus/dist/index.css'


import { createApp } from 'vue'

// import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'

const app = createApp(App);

// app.use(createPinia())
// app.use(router)

// app.mount('#app')

async function asyncRegister() {
    const createPinia = (await import("pinia")).createPinia;
    app.use(createPinia());

    const router = (await import("@/router")).default;
    app.use(router);

    app.mount('#app');
}
asyncRegister();