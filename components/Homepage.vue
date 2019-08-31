<template>
    <div class="homepage">
      <img id="image" src="../assets/image.png">
      <img id="fire" src="../assets/fire.png">
      <img id="sam" src="../assets/sam.png"><span id="side">Samantha</span>
      <p id="bold"><b>How Millenials<br>can make the world<br>a better place</b></p>
      <p id="lorem">Lorem ipsum dolor sit amet, consectetur<br>adipiscing elit, sed do eiusmod tempor.</p>
      <button>
            <router-link class="link" to="/article">Read More</router-link>
        </button>
      <video src="../assets/SIMPLE GELE TUTORIAL WITH ASOOKE.mp4"  controls></video>
      <h1>TOP PICK</h1>
      <strong id="small-top">Top Pick Article</strong>
      <div id="color1">
        <p id="write">Lorem ipsum dolor sit a met, consectetur adipiscing elit, sed do eiusmod tempor<br> incididunt ut labore et dolore magna aliqua. Ut enin ad minim veniam, quis nostrud. </p>
      </div>

      <div class="move">
        <carousel>
        <slide><img src="../assets/three.png"> </slide>
        <slide><img src="../assets/three.png"> </slide>
        <slide><img src="../assets/three.png"> </slide>
        <slide><img src="../assets/three.png"> </slide>
        <slide><img src="../assets/fire.png" width="500px" height="400px"> </slide>
      </carousel>
      </div>
      
  </div>
   
</template>

<script>
export default {
    name:"Homepage",
}
</script>

<style scoped>
#fire{
  float:right;
  margin-top:170px;
  height: 580px;
   width:370px;
  
}
#sam{
 
  margin:180px 0px -10px 0px;
}
#side{
 margin: -210px 0px 0px 6px;
 color: rgb(43, 46, 43);
   font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
   font: inherit;
}
#image{
   float:left;
   height:440px;
   width:325px;
   margin-top:110px;
   margin-left:150px;
}
.homepage{
    background: #fff;
    width: 100vw;
    height: 1000px;
    margin:-110px -7px -7px -7px;
}
#bold b{
  position: absolute;
  margin-left: -50px;
  margin-top:40px;
  color: #000;
  font-size:74px;
   font-family: 'Times New Roman', Times, serif;
  text-align: center;
}
#lorem{
    position: absolute;
    color: #999;
    font-size: 17px;
    line-height: 1.8em;
    letter-spacing: 0.5px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin: 355px 0px 0px 540px;
   
}
button{
  background: #f7416b;
  color: #fff;
  border: none;
  width: 186px;
  height: 60px;
  margin: 130px 0px 0px 360px;
  font-size: 15px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.link {
   color: #fff;
   font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
   font-size: 16px;
   padding: 0.5 0em;
   text-decoration: none;
}
 .link__wrapper {
   padding: 0.9em 1.6em;
}
video{
   float: left;
    height: 200px;
   width:325px;
   margin-left:150px;
   margin-top: -155px;
   
}
h1{
  color: #999;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 100px;
  opacity: 0.1;
  font-weight: 900%;
  letter-spacing: -5px;
  margin:150px 0px 0px -770px;

}
#small-top{
  position: absolute;
  color: #000;
  font-size: 35px;
  font-weight: 900;
  margin: -80px 0px 0px -525px;
  font-family: Arial, Helvetica, sans-serif;
}
#color1{
  background: #f4f5f5;
  height: 380px;
  width: 77vw;
  margin-top: -60px;
}
.move{
  margin: -185px 0px 0px 90px;
}
/* carousel img{
  margin: -90px 0px 0px 280px;
} */
#write{
    position: absolute;
    color: #999;
    font-size: 18px;
    line-height: 1.8em;
    letter-spacing: 0.5px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin: 90px 0px 0px 150px;
    opacity: 0.1em;
    text-align: justify;
  
}
.Vue-Carousal-pagination{
  margin-top:-40px;
}
</style>