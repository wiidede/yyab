import {createApp} from 'vue';
import App from '/@/App.vue';
import router from '/@/router';
// 如果要使用.scss样式文件，则需要引入base.scss文件
// import 'element-plus/packages/theme-chalk/src/base.scss';

import {
  ElButton,
  ElSelect,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElScrollbar,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
} from 'element-plus';

const components = [
  ElButton,
  ElSelect,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElScrollbar,
];

const plugins = [
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
];

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component);
});

plugins.forEach(plugin => {
  app.use(plugin);
});

app
  .use(router)
  .mount('#app');
