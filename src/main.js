import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import Routes from './router'
import Router from "vue-router";


Vue.config.productionTip = false;

/*//注册全局组件(在main.js中注册，然后在APP中去使用，但一般不使用全局组件）
Vue.component("users", Users);*/

Vue.use(VueResource);
Vue.use(Router);

/*
// 全 局  自定义指令
Vue.directive('rainbow', {
  bind(el, binging, vnode){
    el.style.color = '#' + Math.random().toString(16).slice(2,8);
  }
});*/

//自定义指令： binding 改变屏大小， arg 传的参数改变背景色
Vue.directive('theme', {
  bind(el,binding,vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1260px";
    } else if (binding.value == "narrow") {
      el.style.maxWidth = "560px";
    } 
    
    if (binding.arg == "column") {
      el.style.backgroundColor = "#6677cc";
      el.style.padding = "20px"
    } 
  }
});


//自定义过滤器
/*//全局过滤函数
Vue.filter("to-uppercase", function (value) {
  return value.toUpperCase();
});*/


Vue.filter("snippet",function (value) {
  return value.slice(0, 100) + '.......'
});

//创建路由
const router = new Router({
  routes: Routes,
  mode:'history'
});


new Vue({
  el: '#app',
  render: h => h(App),
  router,
}).$mount('#app');


//执行顺序： index.html  --> main.js -->APP.vue
