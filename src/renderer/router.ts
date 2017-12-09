import Vue from 'vue';
import VueRouter, { Location, Route, RouteConfig } from 'vue-router';

const homeComponent = () => import('../components/index').then(({ HomeComponent }) => HomeComponent);
Vue.use(VueRouter);

export const routes: () => RouteConfig[] = () => [
  {
    path: '/',
    component: homeComponent
  }
]

export const router = () => new VueRouter({ mode: 'history', routes: routes()})