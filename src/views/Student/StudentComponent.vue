<!--Informasjonsboksen for emnene en student har.
Den består av informasjon om emnenavn og emnekode.
Det er også laget en knapp for å stille seg i kø og 
en for å vise øvingene man har-->
<template>
    <h2 class="studentbox-container" v-for="subject in this.$store.getters.GET_SUBJECTS.slice().reverse()"
    v-bind:key="subject" v-on:change.prevent="getSubject()">
        {{ subject.subject_name }} {{ subject.subject_code }}
        <div class="buttons">
            <button id="addQueue" @click="onClick">Bli med i køen</button>
            <button id="ovinger">Vis øvinger</button>
        </div>
    </h2>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            subjects: [],
            config: {
                headers: {
                    Authorization: "Bearer " + this.$store.getters.GET_TOKEN,
                },
            },
        };
    },
    methods: {
       /**Metode for å sende studentene til siden hvor de kan registrere seg for
        * å enten få hjelp eller få godkjent en øving */ 
       async onClick() {
           await this.$router.push("/toqueue");
        },
        async getSubject() {
          this.fetchedStudents = true;
          await axios
            .get("/subject", this.config)
            .then((response) => {
                response.data.forEach((element) => {
                  this.$store.commit("ADD_SUBJECT", element);
                });
            });
        },
    },
    mounted: function() {
        this.getSubject();
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
  text-align: center;
  justify-content: center;
  margin: 15px;
  background-color: #212121;
}
.buttons {
    display: flex;
    flex-direction: row;
    margin: 10px 0 5px 0;
    border-radius: 6px;
    text-decoration-color: #ffffff;
    
}
#addQueue {
    margin-right: 50px;
    background-color: #424242;
    color: #ffffff;
}
#ovinger {
    margin-left: 50px;
    background-color: #424242;
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
@media screen and (max-width: 575px) {
    .studentbox-container { 
        display: flex;
        flex-direction: column;
        width: 290px;
        min-height: 20px;
        border: 2px solid #424242;
        align-items: center;
        justify-content: center;
        margin: 10px 5px 10px 5px;
        background-color: #212121;
    }
    .infromation, h3, h4{
        display: inline-block;
        justify-content: center;
        padding-left: 10px;
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
        background-color: #424242;
        color: #ffffff;
    }
    #ovinger {
        margin-left: 50px;
        background-color: #424242;
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
}
</style>