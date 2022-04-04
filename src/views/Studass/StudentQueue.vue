<!-- Siden hvor studentassistenten kan se hvilke studenter som står i kø og hvem
de skal hjelpe. Køen er sortert etter rekkefølgen studentene stilte seg i kø -->
<template>
    <div class="StudentQueue">
        <div class="log">
            <h2>KØ</h2>
            <table v-for="student in this.$store.getters.GET_STUDENTQUEUE.slice()"
            v-bind:key="student">
                {{ student.username }} {{ student.oving }} {{ student.location }} {{ student.Type }}
                <br/>
                <button id="HelpStudent">Hjelp Student</button>
            </table>        
        </div>
        <br/>
        <img src="@/assets/Bordplassering-2.jpg"/>
    </div>
</template>
<script>
//Imports:
import axios from "axios";
export default {
    data() {
        return {
            students: [],
            config: {
                headers: {
                    Authorization: "Bearer " + this.$store.getters.GET_TOKEN,
                },
            },
        };
    },
    methods: {
        /**Metode som  henter ut alle studentene som står i kø i det aktive emnet.
         * Den sender en request til backend for å hente ut alle studentene som står i kø,
         * så får den en response med alle studentene i køen og informasjon om lokasjon, 
         * og hvilken øving de ønsker bistand med. 
        */
        getStudentsInQueue() {
          this.fetchedStudents = true;
          axios
            .get("/queue", this.config)
            .then((response) => {
              if (response.data != this.$store.getters.GET_STUDENTQUEUE) {
                response.data.forEach((element) => {
                  this.$store.commit("ADD_STUDENT", element);
                });
              }
            });
        },
    },
    //For at køen skal lastes inn når studentassistenten går til køen
    mounted: function() {
        this.getStudentsInQueue();
    }
}
</script>
<!--Styling for StudentQueue -->
<style scoped>
.StudentQueue {
    margin: 5px 0 0 50px;
}
.Update {
    background-color: #424242;
    color: #ffffff;
}
.Update:hover {
  background-color: #01579b;
  cursor: pointer;
  color: #ffffff;
  transform: translateY(-1px);
}
#HelpStudent {
    background-color: #424242;
    color: #ffffff;
}
#HelpStudent:hover {
  background-color: #01579b;
  cursor: pointer;
  color: #ffffff;
  transform: translateY(-1px);
}
img {
    margin-top: 20px;
    max-width: 30%;
    max-height: 40%;
}
table {
    border: solid 2px #424242;
    padding: 2px 2px 5px 6px;
    width: 70%;
    margin-bottom: 4px;
}
@media screen and (max-width: 575px){
.StudentQueue {
    margin: 5px 0 0 20px;
}
.Update {
    background-color: #424242;
    color: #ffffff;
}
.Update:hover {
  background-color: #01579b;
  cursor: pointer;
  color: #ffffff;
  transform: translateY(-1px);
}
#HelpStudent {
    background-color: #424242;
    color: #ffffff;
}
#HelpStudent:hover {
  background-color: #01579b;
  cursor: pointer;
  color: #ffffff;
  transform: translateY(-1px);
}
img {
    margin-top: 20px;
    max-width: 30%;
    max-height: 40%;
}
h3 {
    border: solid 2px #424242;
    padding: 2px 2px 5px 6px;
    width: 90%;
}
}
</style>