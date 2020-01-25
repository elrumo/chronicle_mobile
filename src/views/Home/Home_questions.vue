<template>
  <div id="home-questions">
    <div class="questions-wrapper">
         <div class="subheading">
            <h1>Checkup</h1>
            <h2>Let’s see how you’ve felt this week.</h2>
        </div>
        <Card id="select-1" h2="Motivated" p="The higher the number the more motivated."/>
        <Card id="select-2" h2="Stressed" p="The higher the number the more stressed."/>
        <Card h2="Energy levels" p="The higher the number the more energy."/>
        <Card h2="Productivity" p="The higher the number the more productive."/>
        <Card h2="Self-esteem" p="The higher the number the more motivated."/>
    </div>
    <Button title="Submit" whereto="/"/>
  </div>
</template>

<script>
    import Button from "@/components/Button/Button.vue"
    import Card from "@/components/Card/Card.vue"
    export default {
        name: "homequestions",
        components:{
           Button,
           Card
        },
        methods:{
            moveSelector(leftMove, e){
                document.getElementById("selected-btn").style.left = leftMove
                console.log(this.parent)
            }
        }
        
    }
</script>

<style>
    @import url(Home.css);
</style>