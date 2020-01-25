import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import HomeNew from './views/Home/Home_new.vue'
import HomeQuestions from './views/Home/Home_questions.vue'
import Snapshot from './views/Snapshot.vue'

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
      path: '/snapshot',
      name: 'snapshot',
      component: Snapshot
    },
    {
      path: '/homenew',
      name: 'homenew',
      component: HomeNew
    },
    {
      path: '/homequestions',
      name: 'homequestions',
      component: HomeQuestions
    },
  ]
})
