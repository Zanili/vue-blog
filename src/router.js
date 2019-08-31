/*
import Vue from 'vue'
import Router from 'vue-router'
import ShowBlog from "./components/ShowBlog.vue"
import AddBlog from "./components/AddBlog.vue"



 var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'show',
      component: ShowBlog
    },
    {
      path: '/add',
      name: 'add',
      component: AddBlog
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     
    }
  ]
});

export default router*/


import ShowBlog from "./components/ShowBlog.vue"
import AddBlog from "./components/AddBlog.vue"
import SingleBlog from "./components/SingleBlog.vue"

export default [
    {path: '/', name: 'show', component: ShowBlog
    },
    {path: '/add', name: 'add', component: AddBlog},
    {path: '/blog/:id', name: 'blog', component: SingleBlog}
    
]