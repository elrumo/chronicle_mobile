<template>
  <div>
    <router-link to="/homenew" class="unselected">
      <div id="ImageTitle">
        <div class="image-wrapper">
          <img class="questions-image" src="@/assets/done-1.png" alt="">
        </div>
        <h3>All done for now</h3>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  }
}
</script>

<style>
  @import url(Home.css);
</style>
