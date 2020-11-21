import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Todos from '../views/todos/Todos';
import Todo from '../views/todos/Todo';
import Posts from '../views/posts/Posts';
import Post from '../views/posts/Post';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos,
  },
  {
    path: '/todo/:id',
    name: 'Todo',
    component: Todo,
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: Post,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
