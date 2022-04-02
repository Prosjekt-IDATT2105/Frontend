<!--Komponent for å lage en gjennbrukbart inputfelt som er lik
for alle deler av applikasjonen som trenger det. Dette hjelper for å holde det
mer ryddig og ha en standar så alt blir likt gjennom hele -->
<template>
  <div class="container">
    <label v-if="label" :for="uuid">
      {{ label }}
    </label>
    <input
      class="field"
      v-bind="{
        ...$attrs,
        onInput: updateValue,
      }"
      :value="modelValue"
      :placeholder="label"
      :aria-describedby="error ? `${uuid}-error` : null"
      :aria-invalid="error ? true : false"
      :class="{ error }"
    />
    <div v-if="error">
      {{ error }}
    </div>
  </div>
</template>
<script>
//Imports:
import SetupFormComponent from "@/features/SetupFormComponent.js";
import UniqueID from "@/features/UniqueID.js";
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  setup(props, context) {
    const { updateValue } = SetupFormComponent(props, context);
    const uuid = UniqueID().getID();
    return {
      updateValue,
      uuid,
    };
  },
};
</script>
<!--Styling for BaseInput -->
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
label {
  margin: 20px 10px 0 0;
  text-align: left;
  font-size: 120%;
}
input {
  padding: 10px;
  border: none;
  border-radius: 8px;
  width: 340px;
  position: relative;
}
input:invalid {
  border-color: red;
}
</style>