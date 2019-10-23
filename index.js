import Vue from 'vue';
import VueRouter from 'vue-router';
import VueApollo from 'vue-apollo';
import router from './src/router';
import apolloClient from './src/apollo-client';
import App from './src/app.vue';

Vue.use(VueRouter);
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

const app = new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app');

export default app;