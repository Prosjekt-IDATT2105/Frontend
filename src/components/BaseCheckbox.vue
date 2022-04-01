<template>
  <input
    v-bind="$attrs"
    :checked="modelValue"
    type="checkbox"
    :id="uuid"
    @change="$emit('update:modelValue', $event.target.checked)"
    class="field"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : null"
  />
  <label :for="uuid" v-if="label">
    {{ label }}
  </label>
  <p
    v-if="error"
    class="error-message"
    aria-live="assertive"
  >
    {{ error }}
  </p>
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
        modelValue: {
            type: Boolean,
        },
        error: {
            type: String,
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