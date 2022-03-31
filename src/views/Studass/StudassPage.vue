<template>
    <div class="conatiner">
        <div class="header-top">
            <h3 @click="goHome()">Student</h3>
            <h3>Studentassistent</h3>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        goToHome(){
            this.$router.push('/student'); 
      }
    }
}
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
}
.header-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 160px 0 160px;
    background-color: bisque;
}
</style>