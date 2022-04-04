<!-- Denne siden er for at studenter skal kunne stelle seg i kø for det aktuelle emnet. 
For å kunne stille seg i kø må studenten oppgi sin lokasjon og krysse av om de trenger hjelp eller godkjenning.
Studenten må også krysse av hvilken øving det gjelder -->
<template>
  <div class="ContainerQS">
    <!-- Tar inn komponenten BaseSelect slik at studentene kan oppgi lokasjonen sin 
        Den første er for å velge bygning, neste er for å oppgi hvilket rom og siste for å oppgi hvilket 
        bord man befinner seg på-->
      <h3>Lokasjon:</h3>
    <div class="Location">
      <base-select
      id="Building"
      label="Bygning"
      :options="building"/>
      <base-select
      id="Classroom"
      label="Klasserom"
      :options="classroom"/>
      <base-select
      id="Table"
      label="Bord"
      :options="table"
      />
    </div>
    <img class="Table" src="@/assets/Bordplassering-2.jpg"/>
    <!-- Tar inn komponeten BaseCheckobox slik at studenten skal kunne oppgi om de trenger 
        hjelp eller godkjenning av studentassisten -->
      <h3>Hjelp/Godkjenning:</h3>
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
      <h3>Øvinger:</h3>
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
      abel="Øving 4"
      value="4"
      />
      <base-checkbox
      class="Oving"
      label="Øving 5"
      value="5"
      />
    </div>
    <!-- Submit-knapp for å legge studenten inn i køen-->
    <button class="ToQueue" @click="toQueue">Send til kø</button>
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
    async toQueue() {
      await axios
          .post(
              "/queue", null, {
                params: {
                  location: document.querySelectorAll(".Location option:checked").value,
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
.Location {
  display: flex;
  flex-direction: row;
}
.Type {
  display: flex;
  flex-direction: row;
  margin-left: 8px;
}
.Oving{
  display: flex;
  flex-direction: row;
  margin-left: 8px;
}
.ToQueue {
  background-color: #424242;
  color: #ffffff;
  margin-left: 140px;
  margin-top: 30px;
}
.ToQueue:hover {
  background-color: #01579b;
  cursor: pointer;
  color: #ffffff;
  transform: translateY(-1px);
}
h3 {
  margin-left: 20px;
}
img {
 max-width: 200px;
 max-height: 300px;
 margin-left: 20px;
}
@media  screen and (max-width: 640px) {
  .Location {
    display: flex;
    flex-direction: column;
    margin-left: 0;
    vertical-align:middle;
  }
  .Type {
    display: flex;
    flex-direction: row;
    margin-left: 8px;
    vertical-align: -webkit-baseline-middle;
  }
  .Oving {
    display: inline-block;
    margin-left: 8px;
  }
  h3 {
    margin-left: 10px;
  }
  img {
    max-width: 100px;
    max-height: 200px;
    margin-left: 20px;
  }
  .ToQueue {
    margin-left: 17px;
  }
  .ToQueue:hover {
    background-color: #01579b;
    cursor: pointer;
    color: #ffffff;
    transform: translateY(-1px);
}
}
</style>