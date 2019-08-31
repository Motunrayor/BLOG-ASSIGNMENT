<template>
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
        
</template>

<script>
export default {
    name:"Navbar",
}
</script>

<style scoped>
.navigation {
    /* position: absolute; */
    width: 1308px;
    margin: auto;
    left: 8px;
    top: 2px;
    margin: -8px;
    background: #fff;
    padding: 1.9em;
    display: flex;
    justify-content: space-between;
}
 .navigation__menu {
   display: flex;
   font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
   align-content: center;
   justify-content: center;
   flex: 1;
   margin-left:185px;
}
.link {
   color: #999;
   font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
   font-size: 12px;
   padding: 0.5 0em;
   text-decoration: none;
}
.link:hover {
   color: #292937;
  padding-bottom: 1em;
  border-bottom: 2px solid #f5668c;
}
 .link__wrapper {
   padding: 0.9em 1.6em;
}

#side{
    margin: 20px 0px 15px 10px;
    color: #ee6685;
    font-family:Arial, Helvetica, sans-serif;
    font-size: 18px;
}
#one{
    margin:8px 0px 0px 135px;
    color:#fff;
    border-radius: 50px;
    background: #fa4b74;
    font-size: 18px;
    width:20px;
    height: 20px;
    padding:12px;
    
}
</style>

