import { createApp } from 'vue';
import App from './App.vue';
import VConsole from 'vconsole';
new VConsole(); // 开启调试工具
import store from './store';
import 'amfe-flexible'; // 动态设置根字体
createApp(App).use(store).mount('#app');
