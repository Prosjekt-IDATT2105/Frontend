<template>
    <div class="container">
        <div id="studentbox">
            <StudentComponent/>
        </div>
    </div>
</template>
<script>
import StudentComponent from "../Student/StudentComponent.vue"
export default {
    components: {
        StudentComponent,
    }
}
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
}
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 160px 0 160px;
    background-color: antiquewhite;
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