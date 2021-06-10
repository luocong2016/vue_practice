import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Lazyload } from '@/components/layzload';

const app = createApp(App, { author: 'bukn' });

app.use(store);
app.use(router);
app.use(Lazyload, {
  lazyComponent: true
});

/* 应用配置 */
// 错误拦截
// app.config.errorHandler = (err, vm, info) => {
//   console.log('errorHandler', info);
// };
// 警告拦截
// app.config.warnHandler = function (msg, vm, trace) {
//   console.log('warnHandler:', trace);
// };
// 全局属性
app.config.globalProperties.author = 'lutz';
// 自定义元素
// app.config.isCustomElement = (tag) => tag.startsWith('icon-');
// 参数自定义合并策略 this.$options.hello
// app.config.optionMergeStrategies.hello = (parent, child, vm) => {
//   return `Hello, ${child} ${vm}`;
// };
// app.config.performance = true;

app.mount('#app');
