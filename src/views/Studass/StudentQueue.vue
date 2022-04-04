<template>
    <div class="StudentQueue">
        <div class="log">
            <h2>KØ</h2>
            <h3 v-for="student in this.$store.getters.GET_STUDENTQUEUE.slice()"
            v-bind:key="student">
                {{ student.username }} {{ student.oving }} {{ student.location }} {{ student.Type }}
                <br/>
                <button id="HelpStudent">Hjelp Student</button>
            </h3>        
        </div>
        <button class="Update" @click="getStudentsInQueue">Oppdater kø</button>
        <br/>
        <img src="@/assets/Bordplassering-2.jpg"/>
    </div>
</template>
<script>
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
    }
}
</script>
<style scoped>
.StudentQueue {
    margin: 5px 0 0 10px;
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
    width: 70%;
}
@media screen and (max-width: 575px){
    .StudentQueue {
    margin: 5px 0 0 10px;
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