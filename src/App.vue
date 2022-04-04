<!-- Selve applikasjonen som vises for brukeren med link
til de andre sidene-->
<template>
  <div class="User" v-if="this.$store.getters.GET_IsLoggedIn">
    <h2>{{ this.$store.getters.GET_USERNAME }}</h2>
  </div>
  <router-view />
  <div id="footer">
    <footer>
      <p>Kontakt oss:</p>
      <p class="epost"> vildegy@stud.ntnu.no </p>
      <p type="mail" class="epost">iaklaest@stud.ntnu.no</p>
    </footer>
  </div>
</template>
<style>
body {
  background-color: #121212;
  margin: 0;
}
#app {
  font-family: 'Open Sans';
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  justify-content: space-between;
}
.logInStatus {
  color: azure;
}
#footer {
  background-color: #212121;
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 0;
  height: 120px;
}
.LoginPage {
  align-content: center;
}
.epost {
  color: #01579b;
  text-decoration-line: underline;
}
.epost:hover {
  color: #01579b;
  text-decoration-line: underline;
  cursor: pointer;
}
.ContainerQS {
  margin-left: 35%;
}
.studentbox-container {
  justify-self: center;
}
.User {
  height: 50px;
  text-align: center;
  background-color: #212121;
}
.BaseInput {
  align-items: center;
}
.SignInBtn {
  align-self: center;
}
h2 {
  margin-top: 0;
  padding-top: 10px;
}
@media screen and (max-width: 575px){
  .ContainerQS {
    margin-left: 5%;
  }
  .studentbox-container {
    justify-self: center;
  }
  #footer {
    background-color: #212121;
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 0;
    height: 120px;
    justify-content: space-between;
  }
  .User {
    background-color: #212121;
    width: 100%;
    text-align: center;
    bottom: 0;
  }
  .SignInBtn {
    justify-self: center;
  }
}
</style>
