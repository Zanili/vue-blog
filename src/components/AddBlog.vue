<template>
    <div id="add-blog">
        <h2>添加博客</h2>
        <form v-if="!submmited">
            <p>博客主题</p>
            <input type="text" v-model="blog.title" reqmuired>
            
            <p>博客内容</p>
            <textarea v-model="blog.content"></textarea>
            
            <div id="checkboxes">
                <p>分类</p>
                <input v-model="blog.classification" type="checkbox" value="Vue.js">Vue.js
                <input v-model="blog.classification" type="checkbox" value="Node.js">Node.js
                <input v-model="blog.classification" type="checkbox" value="React.js">React.js
                <input v-model="blog.classification" type="checkbox" value="Angular4">Angular4
            </div>
            
            <p>作者
            <select v-model="blog.author">
                <option v-for="author in authors">{{author}}</option>
            </select>
            </p>
            <button v-on:click.prevent="post" >确认添加</button>
        </form>
        
        <div v-if="submmited">
           <p> 添加博客成功！</p>
        </div>
        
        <hr>
        <div id="preview">
            <h3>博客总览</h3>
            <p>博客标题：{{blog.title}}</p>
            <p>博客内容：</p>
            <p>{{blog.content}}</p>
            <p>博客分类：</p>
            <ul>
            <li v-for="categories in blog.classification">
            {{categories}}</li>
            </ul>
            <p>作者：{{blog.author}}</p>
            
        </div>
    </div>
</template>

<script>
    export default {
        //https://jsonplaceholder.typicode.com/
        name: 'add-blog',
        data(){
            return{
                blog:{
                    title: "",
                    content: "",
                    classification: [],
                    author: "",
                },
                authors: ["Mon", "Tus", "Sat", "Sun"],
                submmited: false
            }
        },
        methods:{
            post: function () {
                this.$http.post(
                    "https://jsonplaceholder.typicode.com/posts",
                        {title: this.blog.title, 
                          body: this.blog.content,
                          userId: 1  
                    })
                    //post成功后返回的内容：
                    .then(function (data) {
                        console.log(data);
                        //点击添加博客后消除表单里的内容
                        this.submmited = true;
                    });
                
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #add-blog {
        margin: 20px auto 200px auto;
        max-width: 1000px;
        font-family: "Microsoft YaHei UI ";
    }
    
    h2{
       margin-top: 50px;
        text-align: center;
    }
    
    form p{
        margin-left: 200px;
    }
    
    form [type = "text"]{
        margin-left: 260px;
        width: 300px;
        height: 30px;
    }
    
    form textarea{
        margin-left: 260px;
        width: 600px;
        height: 200px;
    }
    
    #checkboxes{
        margin-left: 260px;
        font-size: 17px;
    }

    #checkboxes > p{
        margin-left: -60px;
    }
    
    select{
        margin-left: 20px;
        margin-top: 0px;
        width: 150px;
        height: 20px;
    }
    
    form > button{
        margin-left: 220px;
        width: 100px;
        height: 50px;
        font-size: 20px;
        background: cornflowerblue;
        color: #fff;
        border-radius: 10%;
    }
</style>
