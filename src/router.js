import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Trending from './views/Trending.vue'
import Addstory from './views/Addstory.vue'
import Article from './views/Article.vue'
import Preview from './views/Preview.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/trending',
      name: 'trending',
      component: Trending
    },
    {
      path: '/addstory',
      name: 'addstory',
      component: Addstory
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    }
    
  ]
})
