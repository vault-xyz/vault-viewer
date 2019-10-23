import Vue from 'vue';
import VueRouter from 'vue-router';
import { createClient, withProvider } from 'vue-gql';
import router from './src/router';
import App from './src/app.vue';

Vue.use(VueRouter);

const client = createClient({
  url: 'http://localhost:5000/graphql'
});

const AppWithClient = withProvider(App, client);

new Vue({
  router,
  render: h => h(AppWithClient)
}).$mount('#app');