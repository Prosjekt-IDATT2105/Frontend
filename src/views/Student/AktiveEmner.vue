<!--Siden som viser informasjon til brukeren om sine aktive emner. Her kan de se 
i hvilke emner køen er åpen for å levere og oversikt over øvinger. -->
<template>
    <div class="container">
        <!--Henter inn boksen som inneholder informasjon over emnet -->
        <div id="studentbox">
            <StudentComponent/>
        </div>
    </div>
</template>
<script>
import StudentComponent from "../Student/StudentComponent.vue"
export default {
    components: {
        StudentComponent,
    }
}
</script>
<!--Styling or aktiveEmner siden -->
<style scoped>
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 160px 0 160px;
    background-color: #ffffff;
}
#studentbox {
    align-self: center;
}
</style>