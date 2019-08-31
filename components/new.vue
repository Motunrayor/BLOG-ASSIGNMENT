<template>
    <div class="addstory">
        <nav class="navigation">
            <b id="one">D</b><b id="side">Dailyblog</b>
      <div class="navigation__menu">
        <span class="link__wrapper">
          <router-link class="link" to="/">HOME</router-link>
        </span>
        <span class="link__wrapper">
           <router-link class="link" to="/trending">TRENDING</router-link>
        </span>
        <span class="link__wrapper">
            <router-link class="link" to="/addstory">ADDSTORY</router-link>
        </span>
           
    </div>
  </nav>
        <form> 
           <h2>Add a New Blog Post</h2>
	       <label><b>Blog Title:</b></label> 
           <input type="text" placeholder="Title..." v-model.lazy="blog.title" required /><br>
	       <label><b>Blog Content:</b></label>
           <textarea v-model.lazy="blog.content"></textarea>
           <div id="preview">
               <h3>Preview Blog</h3>
               <p>Blog title: </p>
               <p id="p1">{{blog.title}}</p>
               <p>Blog content:</p>
               <p id="p1">{{blog.content}}</p>
           </div>
	       <button id="save">Save</button>
	       <button id="publish">Publish</button>
        </form>
        
        
        
    </div>
</template>

<script>
export default {
    name:"Addstory",
    data () {
        return {
            blog: {
                title:"",
                content:""
            } 
        }  
    }
 }
</script>
<style scoped>
.navigation {
    position: absolute;
    width: 1308px;
    margin:-8px;
    left: 8px;
    top: 2px;
    background: #fcf5f5;
    padding: 1.9em;
    display: flex;
    justify-content: space-between;
}
 .navigation__menu {
   display: flex;
   align-content: center;
   justify-content: center;
   flex: 1;
   margin-left:485px;
}
.link {
   color: #999;
   font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
   font-size: 12px;
   padding: 0.5 0em;
   text-decoration: none;
   
}
.link:a hover{
  text-decoration: underline;
  color:#ee6685;
}

 .link__wrapper {
   padding: 0.9em 1.6em;
}
#side{
    margin: 16px 0px 15px 5px;
    color: #ee6685;
    font-family:Arial, Helvetica, sans-serif;
    font-size: 18px;
}
#one{
    margin:8px 0px 0px 135px;
    color:#fff;
    border-radius: 50px;
    background: #fa4b74;
    font-size: 17px;
    width:20px;
    height: 20px;
    padding:12px;
    
}
.addstory{
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background:#fcf5f5;
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

}
input{
	height: 40px;
	width: 530px;
	background:#fcf5f5;
    padding: 10px;
    margin:15px 0px 0px 20px; 
    border: 1px solid #888686;
    box-sizing: border-box;
    border-radius:5px;
    
}
textarea{
	height: 50px;
	width: 525px;
	background:#fcf5f5;
    margin:15px 0px 0px 0px; 
    border: 1px solid #888686;
    border-radius:5px;
    
    
}
#preview{
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
#save{
	width:60px;
   height:30px;
   background:#ee6685;
   border:none;
   color:#fff;
   font-size:12px;
   margin:10px 10px 0px 0px;
   border-radius:5px;
}
#publish{
	width:60px;
   height:30px;
   background:#ee6685;
   border:none;
   color:#fff;
   font-size:12px;
   margin:10px 0px 0px 0px;
   border-radius:5px;
}

</style>