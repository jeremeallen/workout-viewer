import Vue from 'vue';
import VueRouter from 'vue-router';
import Workout from './components/Workout';
import Workouts from './components/Workouts';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Workouts },
  { path: '/workout', component: Workout },
];

const router = new VueRouter({
  routes,
});

export default router;

