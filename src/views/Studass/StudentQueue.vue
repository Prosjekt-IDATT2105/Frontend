<template>
    <div class="container">
        <div class="log">
            <h2>KØ</h2>
            <ul>
                <li
                v-for="student in this.$store.getters.GET_STUDENTQUEUE.slice().reverse()"
                v-bind:key="student"
                >
                    {{ student }}
                </li>
            </ul>
        </div>
        <button @click="getStudentsInQueue">Oppdater kø</button>
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