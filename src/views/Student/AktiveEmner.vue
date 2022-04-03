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
.container {
    display: flex;
    flex-direction: column;
}
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 160px 0 160px;
    background-color: antiquewhite;
}
.left_content {
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: rem(100);
  height: rem(600);
}
.right_content {
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  height: rem(600);
  margin-bottom: rem(100);
}
#studentbox {
    align-self: center;
}
</style>