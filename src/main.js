import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Import createRouter and createWebHistory
import TheArchive from './components/TheArchive.vue';
import LandingPage from './components/LandingPage.vue';
import AboutPage from './components/AboutPage.vue';


const routes = [
    { path: '/', component: LandingPage }, // Redirect root to a default route
    { path: '/archive', component: TheArchive },
    { path: '/about', component: AboutPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app');
