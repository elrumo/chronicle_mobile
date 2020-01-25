<template>
  <div id="button">
      <router-link class="button-text" :to="whereto">
      <div class="button-loc">{{ title }}</div>
      </router-link>
  </div>
</template>

<script>

export default {
    name: "Button",
    props:['title','whereto']
}

</script>

<style>
    @import url("Button.css");
</style>