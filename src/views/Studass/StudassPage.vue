<!--Siden som brukeren blir sendt til hvis rollen deres er Studass.
En studentassisten vil også ha tilgang til studentsiden ettersom de også er studenter i andre 
emner enn de er studentassistent i. De vil ha mulighet til å enten ha studentvisning eller studentassistentvisning-->
<template>
    <div class="StudassPage">
        <!--Headere som brukeren kan trykke på for å bytte mellom 
        studentvisning eller studentassistentvisning.
        Henter inn StudentPage og StudassComponent ettersom hva brukeren ønsker -->
        <div class="header-top">
            <h3 @click="showDetailsStudent()">Student</h3>
            <img src="@/assets/QS.png"/>
            <h3 @click="showDetailsStudass()">Studass</h3>
        </div>
        <div class="Student" v-show="openStudent">
            <student-page/>
        </div>
        <div class="Studass" v-show="openStudass">
            <studass-component/>
        </div>
    </div>
</template>
<script>
//Imports:
import StudentPage from "../Student/StudentPage.vue";
import StudassComponent from "../Studass/StudassComponent.vue"
export default {
    components: {
        StudentPage,
        StudassComponent,
    },
    data() {
        return {
            openStudent: false,
            openStudass: true,
        }
    },
    methods: {
        /**Metode for at studentassistenten skal få studentvisning.
        */
        showDetailsStudent() {
            this.openStudent = true;
            this.openStudass = false;
        },
        /**Metode for å vise brukeren studentassistent siden når de trykker på headeren for studass.
         * Her er studentassistentvisning satt som default verdi så denne siden vil automatisk vises når
         * brukeren logger på.
        */
        showDetailsStudass() {
            this.openStudass = true;
            this.openStudent = false;
        },
    }
}
</script>
<!--Styling for studentassistent siden -->
<style scoped>
.StudassPage {
    justify-items: space-between;
    width: 100%;
}
.header-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    background-color: #424242;
}
.Studass {
    margin-left: 215px;
}
img {
    max-height: 40px;
    max-width: 20%;
    margin-top: 10px;
}
@media screen and (max-width: 575px) {
    img {
        max-height: 30px;
        max-width: 20%;
        margin-top: 10px;
    }
    .header-top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #424242;
    }
    .StudassPage {
        justify-items: center;
    }
}
</style>