<template>
    <div class="addstory">
        <form v-on:submit.prevent> 
           <h2>Add a New Blog Post</h2>
	       <label><b>Blog Title:</b></label> 
           <input id="one" type="text" placeholder="Title..." v-model.lazy="blog.title" required /><br>
           <label><b>Blog Author:</b></label> 
           <input id="two" type="text" placeholder="Author..." v-model.lazy="blog.author" required /><br>
	       <label><b>Blog Content:</b></label>
           <textarea v-model.lazy="blog.content"></textarea>
           <input id="save" type='button' @click="save" value="Save">
	       <!-- <button id="delete" @click="del">Delete</button> -->
            <button>
            <router-link class="link-preview" to="/preview">Preview Blog</router-link>
            </button>
            <div class="image-input">
              <button type="primary" class="flex-center" icon="ios-camera-outline">Post Image</button>
          </div>
        </form>
	    
        
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:"Addstory",
    data () {
        return {
            blog: {
                title:"",
                author:"",
                content:"",
                image_url: ''
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
           this.blog = {
               title: "",
               author: "",
               content: "",
               image_url: '',
           }
           console.log(this.posts)
        },

    del() {
        this.$store.commit("delPost", this.blog)
        this.blog = {
               title: "",
               author: "",
               content: "",
           }
           console.log(this.posts)

    }
        
    }
}   
</script>

<style scoped>
.addstory{
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background:#fff;
  width:100vw;
  height:150vh;
  margin:-8px;
}
form{
	position: absolute;
    width: 700px;
    height: 500px;
    left: 319px;
    top: 136px;
    border: 1px solid #888686;
    box-sizing: border-box;
    box-shadow: 6px 6px 5px  rgba(0, 0, 0, 0.25);
    border-radius: 20px;
}	
label{
	color: #333;
	font-size:14px;
	padding-right: 20px;
    font-size:16px;
    text-align: justify;

}
#one{
	height: 50px;
	width: 530px;
	background:#fff;
    padding: 10px;
    margin:15px 0px 0px 20px; 
    border: 1px solid #888686;
    box-sizing: border-box;
    border-radius:5px;
    
}
#two{
    height: 50px;
	width: 530px;
	background:#fff;
    padding: 10px;
    margin:15px 0px 0px 0px; 
    border: 1px solid #888686;
    box-sizing: border-box;
    border-radius:5px;
}
textarea{
	height: 150px;
	width: 525px;
	background:#fff;
    margin:15px 0px 0px -8px; 
    border: 1px solid #888686;
    border-radius:5px;
    
    
}

#save{
	width:80px;
   height:40px;
   background:#ee6685;
   border:none;
   color:#fff;
   font-size:12px;
   margin:30px 30px 0px -60px;
   border-radius:5px;
}
#delete{
	width:80px;
   height:40px;
   background:#ee6685;
   border:none;
   color:#fff;
   font-size:12px;
   margin:30px 30px 0px 0px;
   border-radius:5px;
  
}

button{
   width:100px;
   height:40px;
   background:#ee6685;
   border:none;
   color:#fff;
   font-size:12px;
   margin:30px 0px 0px 0px;
   border-radius:5px;
}
.image-input{
    margin-left: 310px;
    margin-top: -70px;
}
.link-preview{
    color:#fff;
    text-decoration: none;
}
</style>
