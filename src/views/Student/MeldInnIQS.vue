<!-- Denne siden er for at studenter skal kunne stelle seg i kø for det aktuelle emnet. 
For å kunne stille seg i kø må studenten oppgi sin lokasjon og krysse av om de trenger hjelp eller godkjenning.
Studenten må også krysse av hvilken øving det gjelder -->
<template>
  <div class="container">
    <!-- Tar inn komponenten BaseSelect slik at studentene kan oppgi lokasjonen sin 
        Den første er for å velge bygning, neste er for å oppgi hvilket rom og siste for å oppgi hvilket 
        bord man befinner seg på-->
    <div class="Location">
      <base-select
          id="Building"
          label="Building"
          :options="building"/>
      <base-select
          id="Classroom"
          label="Classroom"
          :options="classroom"/>
      <base-select
          id="Table"
          label="Table"
          :options="table"/>
    </div>
    <!-- Tar inn komponeten BaseCheckobox slik at studenten skal kunne oppgi om de trenger 
        hjelp eller godkjenning av studentassisten -->
    <div class="Type">
      <base-checkbox
          class="Type"
          id="Godkjenning"
          label="Godkjenning"
          value="godkjenning"
      />
      <base-checkbox
          class="Type"
          id="Hjelp"
          label="Hjelp"
          value="hjelp"
      />

    </div>
    <!-- Tar inn komponeten BaseCheckobox slik at studenten skal kunne oppgi 
    hvilken øving det gjelder-->
    <div class="Oving" >
      <base-checkbox
          class="Oving"
          label="Øving 1"
          value="1"
      />
      <base-checkbox
          class="Oving"
          label="Øving 2"
          value="2"
      />
      <base-checkbox
          class="Oving"
          label="Øving 3"
          value="3"
      />
      <base-checkbox
          class="Oving"
          label="Øving 4"
          value="4"
      />
      <base-checkbox
          class="Oving"
          label="Øving 5"
          value="5"
      />
    </div>
    <!-- Submit-knapp for å legge studenten inn i køen-->
    <div class="button">
      <button @click="toQue">Send til kø</button>
    </div>
  </div>
</template>
<script>
//Imports:
import BaseCheckbox from "@/components/BaseCheckbox";
import BaseSelect from "@/components/BaseSelect";
import axios from "axios";

export default {
  components: {
    BaseCheckbox,
    BaseSelect
  },
  data() {
    return {
      building: this.$store.state.building,
      classroom: this.$store.state.classroom,
      table: this.$store.state.table,
      username: this.$store.state.username,
      config: {
        headers: {
          Authorization: "Bearer " + this.$store.getters.GET_TOKEN,
        },
      },
    }
  },
  methods: {
    //Metode for at studenten enten kan be om hjelp eller godkjenning når de stiller seg i kø
    cbChange(obj) {
      const cbs = document.getElementsByClassName("Type");
      for (let i = 0; i < cbs.length-1; i++) {
        cbs[i].checked = false;
      }
      obj.checked = true;
    },

    // Metode for å sende infrmasjonen studenten fyller ut til backend
    // Når informasjonen er sendt vil studenten bli sendt til siden for køen. 
    async toQue() {
      await axios
          .post(
              "/queue", null, {
                params: {
                  location: this.$store.state.building + this.$store.state.classroom + this.$store.state.table,
                  type: document.querySelector('.Type:checked').value,
                  oving: document.querySelector('.Oving:checked').value,
                  username: this.$store.state.username,
                }

              },
              this.config
          )
          .then((response) => {
            response.data;
          });
      await this.$router.push("/queue");
    },
  }
}
</script>
<!-- Styling for siden--> 
<style scoped>
.conatiner {
  color: #f6f7eb;
  width: 100%;
  margin: auto;
  justify-content: center;
}

.checkbox {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  text-decoration-color: white;
  padding: 20px;
  align-content: center;
}

.location {
  padding: 20px;
}
</style>