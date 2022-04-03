<template>
    <div class="Studassbox-container">
        <div class="Information">
            <h3>Emnenavn</h3>
            <h4>Emnekode</h4>
        </div>
        <div class="Buttons">
            <button id="Activate">Aktiver køen</button>
            <button id="SeeQueue" @click="onClick">Se kø</button>
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
.Studassbox-container { 
  display: flex;
  flex-direction: column;
  width: 350px;
  min-height: 20px;
  border: 2px solid #424242;
  align-items: center;
  margin: 15px;
}
.Infromation, h3, h4{
    flex-direction: column;
    color: #ffffff;
}
.Buttons {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
}
#Activate {
    margin-right: 50px;
    background-color: #424242;
    color: #ffffff;
}
#SeeQueue {
    margin-left: 50px;
    background-color: #424242;
    color: #ffffff;
}
#Activate:hover {
    cursor: pointer;
    background-color: #01579b;
    transform: translateY(-1px);
}
#SeeQueue:hover {
    cursor: pointer;
    background-color: #01579b;
    transform: translateY(-1px);
}
@media screen and (max-width: 575px) {
    .Studassbox-container { 
        display: flex;
        flex-direction: column;
        width: 200px;
        min-height: 20px;
        border: 2px solid #424242;
        align-items: center;
}
}
</style>