<template>
    <div class="preview">
               <h3>Preview Blog</h3>
               <p>Blog title: </p>
               <p id="p1">{{blog.title}}</p>
               <p>Blog author: </p>
               <p id="p1">{{blog.author}}</p>
               <p>Blog content:</p>
               <p id="p1">{{blog.content}}</p>
         
     </div>      
</template>

<script>
export default {
    name:'Preview1',
    data () {
        return {
            blog: {
                title:"",
                author:"",
                content:""
            }
        } 
         
    }
}
</script>

<style>
.preview{
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background:#FFF;
  width:100vw;
  height:150vh;
  margin:-8px;
}
#pre-blog{
    padding: 10px 20px 0px 20px;
    border: 1px dotted #ccc;
    margin: 10px 60px;
    width: 572px;
    height: 220px;
}

h3{
    margin: 10px;
}
p{
    margin:auto;
    text-align: justify;
}
#p1{
    text-align: justify;
}
</style>