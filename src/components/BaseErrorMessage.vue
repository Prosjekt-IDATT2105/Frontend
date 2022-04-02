<!--Komponeten for å lage en standard feilmelding til brukeren om det er nødvendig -->
<template>
  <p
    aria-live="assertive"
    class="errorMessage"
    :id="id"
  >
    <slot />
  </p>
</template>
<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  }
}
</script>