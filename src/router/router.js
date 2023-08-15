import StartPage from "@/pages/StartPage";
import ExpencePage from "@/pages/ExpencePage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: StartPage
    },
    {
        path: '/expence',
        component: ExpencePage
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;