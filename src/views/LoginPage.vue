<template>
  <div class="container">
    <h2 id="title">LOGIN</h2>
    <h2 class="logInStatus" id="logInHeader">Please log in:)</h2>
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

    async handleClickSignin () {
      const loginRequest = {
        username: this.event.username,
        password: this.event.password,
      };
      const loginResponse = await doLogin(loginRequest);
      if (loginResponse === "Wrong password") {
        document.getElementById("logInHeader").innerHTML = loginResponse;
      } else if (loginResponse === "User not found") {
        document.getElementById("logInHeader").innerHTML = loginResponse;
      } else {
        this.$store.commit("SET_TOKEN", loginResponse.data);
        this.$store.commit("SET_USERNAME", this.event.username);
        await this.$router.push("/")
      }
    },
  },
};
</script>
<style scoped>

.container {
  text-align: center;
  color: #f6f7eb;
  width: 50%;
  margin: auto;

}
.logInStatus {
  color: #f6f7eb;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

button {
  background: #d8dca7;
  border-radius: 10px;
  border: none;
  padding: 0;
  outline-offset: 4px;
}

.button {
  display: block;
  padding: 15px 42px;
  border-radius: 10px;
  font-size: 1.5rem;
  background: #f6f7eb;
  color: black;
  transform: translateY(-4px);
  font-weight: bolder;
  will-change: transform;
  transition: transform 150ms;
}

button:hover .button {
  cursor: pointer;
  transform: translateY(-6px);
}

button:active .button{
  transform: translateY(-2px);
}

</style>
