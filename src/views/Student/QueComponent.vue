<!--Siden hvor studentene kan se hvilken posisjon de har i køen. 
Denne vil bli automatisk oppdatert når deres posisjon i køen endrer seg.
Når det er deres tur vil de få beskjed i QS at det er brukeren sin tur-->
<template>
        <h3 id="queue">KØ</h3>
    <div class="studentbox-container">
        <div class="information">
            <h3>Emnenavn</h3>
            <h4>Emnekode</h4>
            <h4>Posisjon i køen: {{count}} </h4>
        </div>
        <button class="button" @click="onClick">Slett fra køen</button>
    </div>
</template>
<script>
export default {
    methods: {
       /**Metode for å sende studentene til siden hvor de kan registrere seg for
        * å enten få hjelp eller få godkjent en øving */ 
       async onClick() {
           await this.$router.push("/student");
        }
    }
}
</script>
<!--Styling for StudentComponent -->
<style scoped>
.studentbox-container { 
  display: flex;
  flex-direction: column;
  width: 350px;
  min-height: 20px;
  border: 2px solid #424242;
  align-items: center;
  margin: 15px 0 0 230px;
}
.infromation, h3, h4{
    flex-direction: column;
    justify-content: center;
    color: #ffffff;
}
.button {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    background-color: #424242;
    color: #ffffff;
}
.button:hover {
    cursor: pointer;
    background-color: #01579b;
    transform: translateY(-1px);
}
#queue {
    margin-left: 385px;
}
</style>
