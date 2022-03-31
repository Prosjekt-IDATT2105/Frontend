<template>
    <div class="container"> 
        <div class="header-top">
            <h3 @click="showDetailsAktive()">Aktive Emner</h3>
            <h3 @click="showDetailsArkiverte()">Arkiverte Emner</h3>
        </div>
        <div class="aktiveEmner" v-show="openAktiveEmner">
            <aktive-emner/>
        </div>
        <div class="aktiveEmner" v-show="openArkiverteEmner">
            <arkiverte-emner/>
        </div>
    </div>
</template>
<script>
import AktiveEmner from "../Student/AktiveEmner.vue";
import ArkiverteEmner from "../Student/ArkiverteEmner.vue";
export default {
    components: {
        AktiveEmner,
        ArkiverteEmner,
    },
    data() {
        return {
            openAktiveEmner: true,
            openArkiverteEmner: false
        }
    },
    methods: {
        showDetailsAktive() {
            this.openAktiveEmner = true;
            this.openArkiverteEmner = false;
        },
        showDetailsArkiverte() {
            this.openArkiverteEmner = true;
            this.openAktiveEmner = false;
        },
    }
}
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
}
.header-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 160px 0 160px;
    background-color: bisque;
}

@media only screen and (max-width:500px) {
  /* For mobile phones: */
  .container, h3, h4 {
    width: 100%;
  }
}
</style>