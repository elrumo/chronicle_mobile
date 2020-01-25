<template>
    <div id="ImageTitle">
        <div class="image-wrapper">
            <img class="questions-image" src="@/assets/done-2.png" alt="">
        </div>
        <h3>Time for a checkup!</h3>
        <Button title="Start" whereto="/homequestions"/>
    </div>
</template>

<script>
    import Button from "@/components/Button/Button.vue"

    export default {
        name: 'homenew',
        components:{
            Button
        }
    }

</script>

<style>
    @import url(Home.css);
</style>