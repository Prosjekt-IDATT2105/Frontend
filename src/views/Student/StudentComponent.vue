<!--Inoformasjonsboksen for emnene en student har.
Den består av informasjon om emnenavn og emnekode.
Det er også laget en knapp for å stille seg i kø og 
en for å vise øvingene man har -->
<template>
    <div class="studentbox-container">
        <div class="information">
            <h3>Emnenavn</h3>
            <h4>Emnekode</h4>
        </div>
        <div class="buttons">
            <button id="addQueue" @click="onClick">Bli med i køen</button>
            <button id="ovinger">Vis øvinger</button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
       /**Metode for å sende studentene til siden hvor de kan registrere seg for
        * å enten få hjelp eller få godkjent en øving */ 
       async onClick() {
           await this.$router.push("/toque");
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
  justify-content: center;
  margin: 15px;
}
.infromation, h3, h4{
    flex-direction: column;
    justify-content: center;
    color: #ffffff;
}
.buttons {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    border-radius: 6px;
    text-decoration-color: #ffffff;
    
}
#addQueue {
    margin-right: 50px;
    background-color: #212121;
    color: #ffffff;
}
#ovinger {
    margin-left: 50px;
    background-color: #212121;
    color: #ffffff;
}
#ovinger:hover {
    cursor: pointer;
    transform: translateY(-1px);
    background-color: #01579b;
}
#addQueue:hover {
    cursor: pointer;
    transform: translateY(-1px);
    background-color: #01579b;
}
</style>