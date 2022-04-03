<!-- Selve applikasjonen som vises for brukeren med link
til de andre sidene-->
<template>
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
@media screen and (max-width: 640px){
  .ContainerQS {
    margin-left: 35%;
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
}
</style>
