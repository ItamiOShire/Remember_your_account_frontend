import { createApp } from 'vue'
import App from './App.vue'

import './assets/variables.css'
import MainLayout from './layouts/MainLayout.vue'
import NavigationBar from './components/NavigationBar.vue'
import AuthCard from './components/AuthCard.vue'
import Button from './components/Button.vue'
import IconInfo from './components/icons/IconInfo.vue'
import IconMenuBars from './components/icons/IconMenuBars.vue'
import AuthForm from './components/AuthForm.vue'
import FormInput from './components/FormInput.vue'

const app = createApp(App)
app.component('main-layout', MainLayout)
app.component('navigation-bar', NavigationBar)
app.component('auth-card', AuthCard)
app.component('Button', Button)
app.component('icon-info', IconInfo)
app.component('icon-menu-bars', IconMenuBars)
app.component('auth-form', AuthForm)
app.component('form-input', FormInput)
app.mount('#app')
