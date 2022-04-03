<!-- Siden hvor brukeren kan logge inn på systemet. Når brukeren har fylt ut brukernavn og passord
og det er sjekket opp mot databasen mottar brukeren en token som blir lagret til senere bruk.-->
<template>
  <div class="container">
    <img class="logo" src="@/assets/QS.png">
    <h2 class="logInStatus" id="logInHeader"></h2>
    <!-- Tar inn komponenten BaseInput hvor første er fletet hvor brukeren skriver brukernavn 
    og det andre fletet for at brukeren skal kunne skrive inn passord-->
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
    <!-- Submit-knapp hvor brukernavnet og passordet til bruekeren blir sendt til backend. Om brukernavn og passord er gyldig
    vil brukeren bli dirigert til riktig side ut fra hvilken rolle de har-->
    <button id="btnSubmit" class="button" @click="handleClickSignin">
      Login
    </button>
  </div>
</template>
<script>
//Imports:
import BaseInput from "@/components/BaseInput.vue";
import { doLogin } from "@/utils/apiutil";
import jwt_decode from "jwt-decode";

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
    /**Metoden som håndeterer innloggingen til brukeren. 
     * Først vil brukernavnet og passordet bli sendt til databasen og jskket opp mot databasen.
     * Om brukernavnet er feil vil brukeren få tilbakemelding om at det ikke stemmer med noen i databasen, 
     * hvis passordet ikke er riktig vil brukeren bli varslet om det. Om brukernavn og passordet stemmer 
     * vil det bli sendt en token som blir lagret til senere bruk. Tokenen blir dekryptert for å hente ut
     * og lagret hvilken rolle brukeren har. Ut fra hvilken rolle brukeren har vil de bli dirigert til siden
     * de har rettigheter til å være på. 
     */
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
        let token = this.$store.state.token;
        let decoded = jwt_decode(token);
        console.log(decoded)
        this.$store.commit("SET_ROLENAME", decoded.rolename);
        if('[ROLE_FORELESER]' === this.$store.state.rolename) {
          await this.$router.push("/lecturer");
        }else if (this.$store.state.rolename === '[ROLE_STUDENT, ROLE_STUDASS]') {
          await this.$router.push("/studass");
        } else if (this.$store.state.rolename === '[ROLE_STUDASS, ROLE_STUDENT]') {
          await this.$router.push("/studass");
        } else {
          await this.$router.push("/student");
        }
      }
    },
  },
};
</script>
<!-- Styling for Login-siden-->
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
.button:hover {
  cursor: pointer;
  transform: translateY(-1px);
  background-color: #01579b;
  color: #FFFFFF;
}
.button:active {
  transform: translateY(-2px);
}
img {
  max-width: 20%;
  max-height: 30%;
  margin-top: 150px;
}
</style>
