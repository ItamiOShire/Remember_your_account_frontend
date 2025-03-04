import { createApp } from 'vue'
import App from './App.vue'

import './assets/variables.css'
import MainLayout from './layouts/MainLayout.vue'
import NavigationBar from './components/NavigationBar.vue'
import Card from './components/Card.vue'
import Button from './components/Button.vue'
import IconInfo from './components/icons/IconInfo.vue'
import IconMenuBars from './components/icons/IconMenuBars.vue'

const app = createApp(App)
app.component('main-layout', MainLayout)
app.component('navigation-bar', NavigationBar)
app.component('card', Card)
app.component('Button', Button)
app.component('icon-info', IconInfo)
app.component('icon-menu-bars', IconMenuBars)
app.mount('#app')
