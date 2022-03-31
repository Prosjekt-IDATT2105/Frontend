<template>
    <div class="studentbox-container">
        <div class="information">
            <h4>Emnenavn</h4>
            <h5>Emnekode</h5>
        </div>
        <div class="buttons">
            <button id="add-que">Bli med i køen</button>
            <button id="ovinger">Vis øvinger</button>
        </div>
    </div>
</template>
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
.infromation {
    flex-direction: column;
    justify-content: center;
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