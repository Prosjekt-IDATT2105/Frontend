<template>
  <div class="container" @submit.prevent="handleClickSignin">
    <h2 id="title">LOGIN</h2>
    <BaseInput
      id="inpUsername"
      v-model="event.username"
      label="Username"
      type="text"
    />
    <BaseInput
      id="inpPassword"
      v-model="event.password"
      label="Password"
      type="password"
    />
    <button id="btnSubmit" class="button" @click="handleClickSignin">
      Login
    </button>
  </div>
</template>
<script>
import BaseInput from "@/components/BaseInput.vue";
import { doLogin } from "@/utils/apiutil";

export default {
  name: "LoginPage",
  components: {
    BaseInput,
  },
  data() {
    return {
      event: {
        username: "",
        password: "",
        message: "Looks like you need to be registered!",
      },
      loginFailed: false,
      loginStatus: "",
    };
  },
  methods: {
    async handleClickSignin() {
      const loginRequest = { username: this.username, password: this.password };

      alert("hei")
      const loginResponse = await doLogin(loginRequest);
      if (loginResponse.data === "Wrong password") {
        alert(loginResponse);
        alert("funnet");
      } else if (loginResponse.data === "User not found") {
        alert("ikke funnet");
        this.showSignUpButton = true;
        document.getElementById("logInHeader").innerHTML = loginResponse.data;
      } else {
        this.$store.commit("SET_TOKEN", loginResponse);
        this.$store.commit("SET_USERNAME", this.username);
        alert("siste else-setning");
      }
    },
  },
};
</script>
<style scoped>
.container {
  display: grid;
  justify-content: center;
  margin: 40px;
}
#title {
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 20px;
}

#inpUsername,
#inpPassword {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
}
</style>
