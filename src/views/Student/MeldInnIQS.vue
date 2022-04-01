<template>
    <div class="container">
        <div class="Location">
            <base-select
            id="Building"
            label="Building"
            :options="building"/>
            <base-select
            id="Classroom"
            label="Classroom"
            :options="classroom"/>
            <base-select
            id="Table"
            label="Table"
            :options="table"/>
        </div>
        <div class="Checkbox">
            <base-checkbox
            id="Godkjenning"
            label="Godkjenning"
            />
            <base-checkbox
            id="Hjelp"
            label="Hjelp"
            />
        </div>
        <div class="Checkbox">
            <base-checkbox
            id="Øving1"
            label="Øving 2"
            />
            <base-checkbox
            id="Øving2"
            label="Øving 2"
            />
            <base-checkbox
            id="Øving3"
            label="Øving 3"
            />
            <base-checkbox
            id="Øving4"
            label="Øving 4"
            />
            <base-checkbox
            id="øving5"
            label="Øving 5"
            />
        </div>
    </div>
</template>
<script>
import BaseCheckbox from "@/components/BaseCheckbox";
import BaseSelect from "@/components/BaseSelect";
export default {
    components: {
        BaseCheckbox,
        BaseSelect
    },
    data() {
        return {
            building: this.$store.state.building,
            classroom: this.$store.state.classroom,
            table: this.$store.state.table,
        }
    }
}
</script>
<style scoped>
.conatiner {
  text-align: center;
  color: #f6f7eb;
  width: 50%;
  margin: auto;
}
.checkbox {
    text-decoration-color: white;
}
</style>