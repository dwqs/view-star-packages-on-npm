import Vue from 'vue';

import App from '../general/app/index.vue';

const env = process.env.NODE_ENV || 'development';

if (env !== 'development') {
    Vue.config.devtools = false;
    Vue.config.productionTip = false;
}

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
