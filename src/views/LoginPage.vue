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
        this.$store.commit("SET_TOKEN", loginResponse);
        this.$store.commit("SET_USERNAME", this.event.username);
        this.$store.commit("SET_ROLENAME", loginResponse);
        console.log(loginResponse);
        /**if(this.rolename === loginResponse.data["ROLE_FORELESER"]) {
          await this.$router.push("/lecturer");
        }else if (this.$store.rolename == "ROLE_STUDASS") {
          await this.$router.push("/studass");
        } else {
          await this.$router.push("/student");
        }*/
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

.button {
  background-color: #FFFFFF;
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 10px;
  margin-top: 30px;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;
  user-select: none;
  -webkit-user-select: none;
  width: 350px;
}



button:hover .button {
  cursor: pointer;
  transform: translateY(-6px);
}

button:active .button{
  transform: translateY(-2px);
}

</style>
