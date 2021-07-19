import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import { createApp } from 'vue'

import './index.css'

import Store from './store'
import App from './components/App.vue'

const app = createApp(App);
app.use(Store);
app.mount('#app');
