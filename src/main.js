// polyfill
import 'babel-polyfill';// 解决低版本浏览器不支持es6

import Vue from 'vue';
import App from './App';
import store from './store';
import common from './common.js'

Vue.config.devtools = true;


new Vue({
    el: 'body',
    components: { App },
    store: store
});
