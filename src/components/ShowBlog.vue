<template>
    <div v-theme:column="'wide'" id="show-blog">
        <h2>博客总览</h2>
        <input type="text" v-model="search" placeholder="搜索">
        <div class="single-blog" v-for="blog in filteredBlogs">
            <router-link v-bind:to="'/blog/' + blog.id"> 
                <h3 v-rainbow>{{blog.title | to-uppercase }}</h3>
            </router-link>
            
            <p>{{blog.body | snippet}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'show-blog',
        data(){
            return{
                blogs:[],
                search: ''
            }
        },
        created(){
            this.$http.get("https://jsonplaceholder.typicode.com/posts")
                .then (function (data) {
              /*  console.log(data);*/
                    this.blogs = data.body.slice(0, 13);
                   /* console.log(this.blogs);*/
            })
        },
        computed:{
            filteredBlogs: function () {
                return this.blogs.filter((blog) =>{
     return blog.title.match(this.search);              
                })
            }
        },
        
        //局部过滤器
        filters: {
            "to-uppercase": function (value) {
                return value.toUpperCase();
            }
        },
        
        //局部自定义指令指令
        directives: {
            'rainbow': {
                bind(el, binging, vnode){
                    el.style.color = '#' + Math.random().toString(16).slice(2,8);
                }
            }
        }
        
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #show-blog {
        margin: 20px auto 200px auto;
        max-width: 800px;
        font-family: "Microsoft YaHei UI ";
    }

    #show-blog > h2{
        text-align: center;
        font-size: 20px;
    }
    
    .single-blog{
        padding: 20px;
        margin: 20px 0px;
        box-sizing: border-box;
        background: #eee;
        border: 1px dotted #aaa;
    }

    .single-blog a {
        color: #444;
        text-decoration: none;
    }
    
     input[type = 'text']{
        margin-left: 250px;
        display: block;
         width: 300px;
         height: 20px;
    }
    
</style>
