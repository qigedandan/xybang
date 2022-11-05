import { createApp } from 'vue'
import TDesign from 'tdesign-vue-next';
import './style.css'
import App from './App.vue'
import router from './router/index'
// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';

const app = createApp(App)
app.use(TDesign)
app.use(router)
app.mount('#app')
