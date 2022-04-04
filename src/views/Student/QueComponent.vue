<!--Siden hvor studentene kan se hvilken posisjon de har i køen. 
Denne vil bli automatisk oppdatert når deres posisjon i køen endrer seg.
Når det er deres tur vil de få beskjed i QS at det er brukeren sin tur-->
<template>
        <h3 id="queue">KØ</h3>
    <h2 class="studentbox-container" v-for="subject in this.$store.getters.GET_SUBJECTS.slice().reverse()"
    v-bind:key="subject" v-on:change.prevent="getSubject()">
        {{ subject.subject_name }} {{ subject.subject_code }}
        <div class="buttons">
            <button class="button" @click="onClick">Slett fra køen</button> 
        </div>
    </h2>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            config: {
                headers: {
                    Authorization: "Bearer " + this.$store.getters.GET_TOKEN,
                },
            },
        }
    },
    methods: {
    /**Metode for der studenten skal ha mulighet til å slette seg fra køen hvis de 
     * ikke ønsker å stå i kø lenger. Fikk ikke denne til å fungere, så dette er noe
     * som må jobbes med på et senere tidspunkt */ 
    async onClick() {
        await axios
            .delete(
                "/queues/" + this.$store.state.username, null, {
                    params: {
                        username: this.$store.state.username,
                    }

                },
                this.config
            )
            .then((response) => {
                response.data;
            });
            if(this.$store.state.rolename === '[ROLE_STUDENT, ROLE_STUDASS]') {
                this.$router.push("/studass");
            } else if (this.$store.state.rolename === '[ROLE_STUDASS, ROLE_STUDENT]') {
                this.$router.push("/studass");
            } else {
                this.$router.push("/student");
            }
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
  text-align: center;
}
.infromation {
    flex-direction: column;
    justify-content: center;
    color: #ffffff;
    text-align: center;
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
@media screen and (max-width: 575px) {
    .studentbox-container { 
        display: flex;
        flex-direction: column;
        width: 350px;
        min-height: 20px;
        border: 2px solid #424242;
        align-items: center;
        margin: 15px 0 0 20px;
    }
    #queue {
        margin-left: 175px;
    }
}
</style>
