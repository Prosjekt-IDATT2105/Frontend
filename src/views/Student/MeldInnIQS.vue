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
        <div class="Type" @click="set">
            <base-checkbox
            id="Godkjenning"
            label="Godkjenning"
            />
            <base-checkbox
            id="Hjelp"
            label="Hjelp"
            />
        </div>
        <div class="Oving">
            <base-checkbox
            class="Oving"
            label="Øving 1"
            />
            <base-checkbox
            class="Oving"
            label="Øving 2"
            value="to"
            @click="set"
            />
            <base-checkbox
            class="Oving"
            label="Øving 3"
            />
            <base-checkbox
            class="Oving"
            label="Øving 4"
            />
            <base-checkbox
            class="Oving"
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
            type: document.querySelectorAll('.oving:checked').val(),
            username: this.$store.state.username,
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
                            location: this.$store.state.building + this.$store.state.classroom + this.$store.state.table,
                            type: this.$store.state.type,
                            oving: this.oving,
                            username: this.$store.state.username,
                        }  
            
                    },
                    this.config
                )
                .then((response) => {
                    response.data;
                });
            await this.$router.push("/que");    
        },
        set() {
            this.$store.commit("SET_TYPE", this.type)
            this.$store.commit("SET_OVING", this.oving)
        }
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