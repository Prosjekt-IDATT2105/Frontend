<!--Komponent for å lage en gjennbrukbar dropdown meny som er lik
for alle deler av applikasjonen som trenger det. Dette hjelper for å holde det
mer ryddig og ha en standar så alt blir likt gjennom hele -->
<template>
  <label :for="uuid" v-if="label">{{ label }}</label>
  <select
    v-bind="$attrs"
    :id="uuid"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    class="field"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
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
        modelValue: {
            type: [String, Number],
            default: "",
        },
        options: {
            type: Array,
            required: true,
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