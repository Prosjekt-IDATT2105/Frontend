<template>
    <div class="container">
        <input type="file" @change="uploadFile" ref="file"/> 
        <button @click="submitFile">Send inn</button>
    </div>
</template>
<script>
import axios from "axios";
export default {
    
    methods: {
        uploadFile() {
        this.File = this.$refs.file.files[0];
        },
        submitFile() {
            const formData = new FormData();
            formData.append('file', this.File);
            const headers = { 'Content-Type': 'multipart/form-data' };
            axios.post("/csv/upload", formData, { headers }).then((res) => {
                res.data.files; // binary representation of the file
                res.status; // HTTP status
            });
        },
    }
}    
</script>