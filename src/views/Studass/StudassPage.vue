<template>
    <div class="conatiner">
        <div class="header-top">
            <h3 @click="showDetailsStudent()">Student</h3>
            <h3 @click="showDetailsStudass()">Studass</h3>
        </div>
        <div class="Student" v-show="openStudent">
            <student-page/>
        </div>
        <div class="Studass" v-show="openStudass">
            <studass-component/>
        </div>
    </div>
</template>
<script>
import StudentPage from "../Student/StudentPage.vue";
import StudassComponent from "../Studass/StudassComponent.vue"
export default {
    components: {
        StudentPage,
        StudassComponent,
    },
    data() {
        return {
            openStudent: false,
            openStudass: true,
        }
    },
    methods: {
        showDetailsStudent() {
            this.openStudent = true;
            this.openStudass = false;
        },
        showDetailsStudass() {
            this.openStudass = true;
            this.openStudent = false;
        },
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