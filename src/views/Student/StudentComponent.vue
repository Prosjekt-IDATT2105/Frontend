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
  flex-direction: column;
  width: 100%;
  min-height: rem(100);
  border: rem(1) solid white;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
}
.infromation {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
}
.buttons {
    flex-direction: column;
    justify-content: space-between;
}
</style>