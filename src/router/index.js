import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddTask from  '../views/AddTask.vue';
import Tasklist from '@/views/TaskList.vue';
import CombinedView from '@/views/CombinedView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
   
  {
    path: '/addtask',
    name: 'Addtask', 
    component: AddTask 
  },
  {
    path: '/tasklist',
    name: 'Tasklist', // 
    component: Tasklist // 
  },
  {
    path: '/combinetview',
    name: 'CombinetView', 
    component: CombinedView 
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
