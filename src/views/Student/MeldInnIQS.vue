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
            label="Øving 1"
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
        <div class="button">
            <button @click="toQue">Meld inn i kø</button>
        </div>
    </div>
</template>
<script>
import BaseCheckbox from "@/components/BaseCheckbox";
import BaseSelect from "@/components/BaseSelect";
import axios from "axios";

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
            type: "hei",
            oving: "hei",
            username: "hei",
            config: {
                headers: {
                Authorization: "Bearer " + this.$store.getters.GET_TOKEN,
                },
            },
        }
    },
    methods: {
        async toQue() {
            await axios
                .post(
                    "/queue", null, {
                        params: {
                            location: "hei",
                            type: this.type,
                            oving: this.oving,
                            username: this.username,
                        }  
            
                    },
                    this.config
                )
                .then((response) => {
                    response.data;
                });
            await this.$router.push("/");    
        },
    }
}
</script>
<style scoped>
.conatiner {
  color: #f6f7eb;
  width: 100%;
  margin: auto;
  justify-content: center;
}
.checkbox{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    text-decoration-color: white;
    padding: 20px;
    align-content: center;
}
.location {
    padding: 20px;
}
</style>