import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Todos from '../views/todos/Todos';
import Todo from '../views/todos/Todo';
import Posts from '../views/posts/Posts';
import Post from '../views/posts/Post';
import Albums from '../views/albums/Albums';
import Album from '../views/albums/Album';
import Photos from '../views/Photos';

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
  {
    path: '/albums',
    name: 'Albums',
    component: Albums,
  },
  {
    path: '/album/:id',
    name: 'Album',
    component: Album,
  },
  {
    path: '/photos',
    name: 'Photos',
    component: Photos,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
