<template>
    <div class="conatiner">
        <div class="header-top">
            <h3>Aktive emne</h3>
            <img src="@/assets/QS.png"/>
            <h3>Arkiverte Emner</h3>
        </div>
        <div>
            <add-subject/>
        </div>
    </div>
</template>
<script>
import AddSubject from "../Admin/AddSubject.vue";
export default {
    components: {
        AddSubject
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
    background-color: #424242;
}
img {
    max-height: 40px;
    max-width: 20%;
    margin: 15px;
}
</style>