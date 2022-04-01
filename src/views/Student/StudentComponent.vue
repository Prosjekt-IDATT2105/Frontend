<template>
    <div class="studentbox-container">
        <div class="information">
            <h3>Emnenavn</h3>
            <h4>Emnekode</h4>
        </div>
        <div class="buttons">
            <button @click="onClick()">Bli med i køen</button>
            <button id="ovinger">Vis øvinger</button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
       async onclick() {
            await this.$router.push("/toque")
        }
    }
}
</script>
<style scoped>
.studentbox-container { 
  display: flex;
  flex-direction: column;
  width: 350px;
  min-height: 20px;
  border: 2px solid white;
  align-items: center;
  justify-content: center;
  margin: 15px;
}
.infromation, h3, h4{
    flex-direction: column;
    justify-content: center;
    color: white;
}
.buttons {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
}
#add-que {
    margin-right: 50px;
}
#ovinger {
    margin-left: 50px;
}
</style>