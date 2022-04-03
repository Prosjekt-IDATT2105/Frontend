<template>
  <div class="container">
    <input type="file" @change="uploadFile" ref="file"/>
    <button @click="submitFile">Send inn</button>
  </div>
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
    uploadFile() {
      this.File = this.$refs.file.files[0];
    },
    async submitFile() {
      const formData = new FormData();
      formData.append("file", this.File);
      const headers = { "Content-Type": "multipart/form-data" };
      await axios
        .post(
          "/csv/upload",
          formData,
          {
            params: {
              file: this.File,
              headers
            }
          },
          this.config
        )
        .then((response) => {
          response.data;
        });
    }
  },
}
</script>