<template>
  <div class="card-wrapper">
            <div class="card-padding">
                <div class="card-text">
                    <h2> <b>{{ h2 }}</b></h2>
                    <p>{{ p }}</p>
                </div>
                <div class="num-wrapper">
                    <div class="wrapper">
                        <button  @click="moveSelector('29px')" class="left selected-btn-text">1</button>
                        <button  @click="moveSelector('89px')">2</button>
                        <button  @click="moveSelector('149px')">3</button>
                        <button  @click="moveSelector('210px')">4</button>
                        <button  @click="moveSelector('268px')">5</button>
                    </div>
                    <div id="selected-btn"></div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "Card",
    props:[
        "h2", "p"
    ],
    methods:{
            moveSelector(leftMove){
                this.$el.children[0].children[1].children[1].style.left = leftMove
            }
        }
}
</script>

<style>
    @import url("Card.css");
</style>