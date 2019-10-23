import Vue from 'vue';
import { createClient, withProvider } from 'vue-gql';
import App from './src/app.vue';

const client = createClient({
  url: 'http://localhost:5000/graphql'
});

// use this instead of your App
const AppWithClient = withProvider(App, client);

new Vue({
  render: h => h(AppWithClient)
}).$mount('#app');