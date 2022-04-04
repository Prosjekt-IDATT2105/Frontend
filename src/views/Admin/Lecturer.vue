<!--Siden for forelesere/admin har tilgang til for å se hvilke emner som er aktive,
og hvilke som er arkivert. her har de også mulighet til å gå til siden for å legge til nye emner. 
Denne siden vil kreve videre jobbing med å hente opp både arkiverte fag og aktive fag.  -->
<template>
    <div class="conatiner">
        <div class="header-top">
            <h3>Aktive emne</h3>
            <img src="@/assets/QS.png"/>
            <h3>Arkiverte Emner</h3>
        </div>
        <div>
            <add-subject/>
        </div>
    </div>
</template>
<script>
//Imports
import AddSubject from "../Admin/AddSubject.vue";
export default {
    components: {
        AddSubject
    }
}
</script>
<!--Styling for Lecturer -->
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
    background-color: #424242;
}
img {
    max-height: 40px;
    max-width: 20%;
    margin: 15px;
}
</style>