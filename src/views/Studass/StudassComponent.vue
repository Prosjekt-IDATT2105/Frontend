<template>
    <div class="container">
        <div class="information">
            <h3>Emnenavn</h3>
            <h4>Emnekode</h4>
        </div>
        <div class="buttons">
            <button>Aktiver køen</button>
            <button id="ovinger" @click="onClick">Se kø</button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
       /**Metode for å sende studentene til siden hvor de kan registrere seg for
        * å enten få hjelp eller få godkjent en øving */ 
       async onClick() {
           await this.$router.push("/studentqueue");
        }
    }
}
</script>
<!--Styling for StudentComponent -->
<style scoped>
.container { 
  display: flex;
  flex-direction: column;
  width: 350px;
  min-height: 20px;
  border: 2px solid white;
  align-items: center;
  justify-content: center;
  margin: 15px;
}
.infromation, h3, h4{
    flex-direction: column;
    justify-content: center;
    color: white;
}
.buttons {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
}
#add-que {
    margin-right: 50px;
}
#ovinger {
    margin-left: 50px;
}
</style>