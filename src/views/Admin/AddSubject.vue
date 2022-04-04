<template>
  <div class="container">
    <input type="file" @change="uploadFile" ref="file" id="File"/>
    <base-input type="text" label="Emnenavn"/>
    <base-input type="text" label="Emnekode"/>
    <button class="button" @click="submitFile">Send inn</button>
  </div>
</template>
<script>
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
    uploadFile() {
      this.File = this.$refs.file.files[0];
    },
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
