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
<style scoped>
.container {
  display: block;
  margin: 10rem;
}
</style>