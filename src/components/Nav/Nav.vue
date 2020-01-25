<template>
  <div id="nav">
    <div class="nav-wrapper">
      <router-link id="home" to="/"><i class="far fa-address-book"></i></router-link>
      <router-link id="snapshots" to="/snapshot"><i class="fas fa-book"></i></router-link>
     </div> 
    </div>
</template>

<script>
  // window.onload = function(){
  //   var currentUrl = window.location.pathname

  //   if(currentUrl == "/") {
  //     document.getElementById("home").classList.toggle("nav-selected")
  //   }
  // }

export default {
  name: "Nav",
}
</script>

<style>
    @import url("Nav.css");
</style>