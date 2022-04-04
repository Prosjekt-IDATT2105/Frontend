<!--Side hvor en foreleser/admin kan legge til nye emner og hvilke studenter 
emnet skal være tilgjengelig for. Her skal foreleseren ha mulighet til å opp 
en csv fil med alle studentene som skal legges til. Videre jobb med siden vil bli 
å kunne sende informasjonen som blir fylt ut til backend for å lagre det i databasen. -->
<template>
  <div class="container">
    <input type="file" @change="uploadFile" ref="file" id="File"/>
    <base-input type="text" label="Emnenavn"/>
    <base-input type="text" label="Emnekode"/>
    <button class="button" @click="submitFile">Send inn</button>
  </div>
</template>
<script>
//Imports:
import axios from "axios";
import BaseInput from "@/components/BaseInput.vue";

export default {
  components: {
    BaseInput,
  },
  data() {
    return {
      config: {
        headers: {
          Authorization: "Bearer " + this.$store.getters.GET_TOKEN,
        },
      },
    };
  },

  methods: {
    //Metode for å laste opp csv-filen med studenter som skal legges til i det aktuelle emnet
    uploadFile() {
      this.File = this.$refs.file.files[0];
    },
    /**Metoden for å sende inn csv-filen og annen informasjon om emnet til databasen.
     * Videre arbeid vil være å få metoden til kunne sende inn onfo med riktig autorisasjon
     * til backend så det kan blir lagret i databasen
     */
    async submitFile() {
      const formData = new FormData();
      formData.append("file", this.File, this.File.name); //la til den ssite
      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + this.$store.getters.GET_TOKEN,
      };
      await axios
        .post(
          "/csv/upload",
          formData,
          {
            params: {
              file: this.file,
              headers,
            },
          },
          this.config
        )
        .then((response) => {
          response.data;
        });
      alert("funket");
    },
  },
};
</script>
<!--Styling for AddSubject -->
<style scoped>
.button {
  background-color: #424242;
  color: #ffffff;
  width: 100px;
  margin-top: 15px;
  align-self: center;
}
.button:hover {
  background-color: #01579b;
  cursor: pointer;
  transform: translateY(-1px);
}
#File {
  align-self: center;
  margin-top: 20px;
}
</style>
