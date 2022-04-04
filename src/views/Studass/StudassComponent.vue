<!--Komponenten for å liste alle fagene en student er studentassistent i.
Her hentes emnenavn og emnekoden fra databasen i backend. 
For hvert emne vil studentassistenten ha mulighet til å aktivere køen for studenter
og gå inn for å se hvem som står i kø.-->
<template>
    <h2 class="Studassbox-container" v-for="subject in this.$store.getters.GET_SUBJECTS.slice().reverse()"
    v-bind:key="subject" v-on:change.prevent="getSubject()">
        {{ subject.subject_name }} {{ subject.subject_code }}
        <div class="Buttons">
            <button id="Activate">Aktiver køen</button>
            <button id="SeeQueue" @click="onClick">Se kø</button>
        </div>
    </h2>
</template>
<script>
export default {
    methods: {
       /**Metode for å sende studentassistenten til få opp hvem som står i kø. */ 
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
  background-color: #212121;
  text-align: center;
}
.Infromation, h3, h4{
    flex-direction: column;
    color: #ffffff;
}
.Buttons {
    display: flex;
    flex-direction: row;
    margin: 10px 0 5px 0;
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
        width: 300px;
        min-height: 20px;
        border: 2px solid #424242;
        align-items: center;
        background-color: #212121;
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
}
</style>