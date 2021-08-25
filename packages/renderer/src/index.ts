import {createApp} from 'vue';
import App from '/@/App.vue';
import router from '/@/router';
import {store, key} from '/@/store';
import 'element-plus/dist/index.css';
import '/@/style/index.scss';

const app = createApp(App);

app
  .use(router)
  .use(store, key)
  .mount('#app');
