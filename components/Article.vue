<template>
    <div class="article">
            <h1>Articles</h1>
        <article
            v-for="(post, index) in posts"
            :key="post.title"
        >
            <h4>{{post.title}}</h4>
            <p id="author">{{post.author}}</p>
            <p id="content">{{post.content}}<i @click="del(index)" class="fas fa-trash-alt"></i></p>
            <hr>
        </article>    
</div>
    
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:"Article",
     data () {
        return {
            blog: {
                title:"",
                author:"",
                content:"",
                image_url: "",
                
            },
        } 
         
    },
    computed: mapState([
        "posts"
    ]),
    methods: {
        save() {
           console.log(this.blog);
           this.$store.commit("addPost", this.blog) 
           console.log(this.posts)
        },
        del(id){
            this.$delete("deletepost", this.blog, id);
            console.log(id);
        }
    }  
}
</script>
<style scoped>
.article{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    
}
article{
    width: 70vw;
    margin:0px 0px 90px 200px;
  
}
h4{
    line-height: 0em;
    font-size: 20px;
    text-align: justify;
    
    
}
#author{
    font-size: 15px;
    text-align: justify;
    padding-bottom: 10px;
    /* margin: 0px 0px 10px 100px; */
}
#content{
    font-size: 18px;
    text-align: justify;
    

    /* margin: 0px 0px 0px 100px; */
}
.fa-trash-alt{
    cursor: pointer;
    color:#f00;
     margin: 40px 0px 0px 0px;
     float: right;
}
hr{
    margin-top: 40px;
  border-bottom: 2px solid #547bce;
}

</style>