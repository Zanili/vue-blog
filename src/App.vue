
<!-- 1. 模板：html结构-->
<template>
  <div id="app">
    <!--<add-blog></add-blog>-->
    <!--<show-blog></show-blog>-->

    <blog-header></blog-header>
    <router-view></router-view>
   <!-- <router-link to="/">登录</router-link>
    <router-link to="/add">注册</router-link>
    <router-view></router-view>-->
  </div>
</template>

<!--2. 行为： 处理逻辑-->
<script>
import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlog'
import BlogHeader from './components/BlogHeader'

export default {
  name: 'app',
  data(){
    return{
    }
  },
  components:{
    AddBlog,ShowBlog,BlogHeader
  }
  
}
</script>

<!--3. 样式： 解决样式-->
<style>

</style>
