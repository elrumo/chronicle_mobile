<template>
  <div id="app">
    <router-view/>
    <Nav/>
  </div>
</template>

<script>
  import Nav from "@/components/Nav/Nav.vue"
  
  export default{
    components: {
      Nav
    },

  }

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700,900&display=swap');

body{
  border: 0;
  margin: 0;
  background-color: #E7ECFF;
}

button{
  font-family: 'Source Sans Pro', sans-serif;
  border: none;
  background-color: rgba(0, 0, 0, 0);
}

button:focus{
  outline: 0;
}

  

#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 0;
  margin: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #2275D3;
}
</style>
