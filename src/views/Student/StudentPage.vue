<template>
    <div class="container"> 
        <div class="buttons-top">
            <button>Aktive emne</button>
            <button>Arkiverte Emner</button>
        </div>
        <div class="header">
            <div class="left-content">
            <h3>Aktive køer</h3>
        </div>
        <div class="right-content">
            <h3>Inaktive køer</h3>
        </div>
        </div>
        <div id="studentbox">
            <StudentComponent/>
        </div>
    </div>
</template>
<script>
import StudentComponent from "../Student/StudentComponent.vue";
export default {
    components: {
        StudentComponent,
    }
}
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: row;
}
#studentbox {
    border: 2px solid white;
    width: 30%;
    flex-direction: row;
}
.header {
    flex-direction: column;
}
.left_content {
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: rem(100);
  height: rem(600);
}
.right_content {
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  height: rem(600);
  margin-bottom: rem(100);
}
</style>