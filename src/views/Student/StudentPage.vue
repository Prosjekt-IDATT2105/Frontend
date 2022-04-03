<!-- Siden brukeren blir sendt til hvis rollen til som ble sendt med token er student
Her får studenten oversikt over sikt over emner de har dette semesteret og emner de har hatt tidligere. 
Under aktive emner vil studenten kunne få oversikt over emnene de har og om køene til disse emnene er åpne
og oversikt over øvingene i det aktuelle emnet-->
<template>
    <div class="container"> 
        <!-- Headers som som studenten kan bruke for å se om de ønsker å se på tidligere emner
        eller om de ønsker å se på aktive emner. Hvis brukeren trykker på Aktive emner vil de få
        oversikt over sine aktive mener og om de trykker på arkiverte emner får vil de få oversikt over 
        arkiverte mener. Henter inn sidene AkiveEmner og ArkiverteEmner-->
        <div class="header-top">
            <h3 id="active" @click="showDetailsAktive()">Aktive Emner</h3>
            <img src="@/assets/QS.png"/>
            <h3 id="arkivert" @click="showDetailsArkiverte()">Arkiverte Emner</h3>
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
//Imports:
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
        /**Metode for at studenten skal få oversikt over sine aktive emner om de trykker på headeren for 
         * aktive emner. Her er aktive emner satt som default verdi så denne siden vil automatisk vises når
         * brukeren logger på.
        */
        showDetailsAktive() {
            this.openAktiveEmner = true;
            this.openArkiverteEmner = false;
        },
        /**Metode for å vise brukeren info om arkiverte emner når de trykker på headeren for arkiverte emner*/
        showDetailsArkiverte() {
            this.openArkiverteEmner = true;
            this.openAktiveEmner = false;
        },
    }
}
</script>
<!--Styling for StudentPage visning-->
<style scoped>
.container {
    width: 100%;
    display: flex;
    flex-direction: column;
}
.header-top {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    background-color: #424242;
    width: 100%;
}
img {
    max-height: 40px;
    max-width: 20%;
    margin: 15px;
}
#active:hover {
    cursor: pointer;
}
#arkivert:hover {
    cursor: pointer;
}
@media screen and (max-width: 575px) {
    .header-top {
        width: 100%;
        padding: 0;
    }
    img {
        max-height: 30px;
        max-width: 20%;
        margin-top: 7px;
    }
    #active {
        padding-left: 5px;
    }
    #arkivert {
        padding-right: 5px;
    }
    #active:hover {
        cursor: pointer;
    }
    #arkivert:hover {
        cursor: pointer;
    }
}
</style>