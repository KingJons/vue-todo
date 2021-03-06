// 入口文件
import Vue from 'vue';
// vue 构建webapp
import App from './App.vue'; 
// 将App挂载mount在页面root上（挂载点）
Vue.config.devtools = true;
new Vue({
    el: '#root',
    template: '<App />',
    components: {
        App
    }
})