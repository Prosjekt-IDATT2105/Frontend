<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/student">Student</router-link> |
    <router-link to="/studass">Studass</router-link> |
    <router-link to="/lecturer">Lecturer</router-link> |
    <router-link to="/toque">ToQS</router-link>
  </div>
  <router-view />
</template>

<style>
body {
  background-color: #26292c;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  display: flex;
  flex-direction: row-reverse;
  margin-top: 50px;
  gap: 30px;
  margin-right: 200px;
  color: #f6f7eb;
}
#nav a {
  font-weight: bold;
  color: #a9a9a9;
  font-style: none;
}
#nav a.router-link-exact-active {
  color: #f6f7eb;
}
#nav a.router-link-exact-active a {
  color: #f6f7eb;
}
#nav a.router-link-exact-active a {
  color: #f6f7eb;
}
.logInStatus {
  color: azure;
}
</style>
