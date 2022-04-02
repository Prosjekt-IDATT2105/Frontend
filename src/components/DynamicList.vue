 <!--Komponenten som lager en dynamsisk liste som kan brukes når studentasistenter skal 
 velge hvem de skal hjelpe og listen blir oppdatert automatisk -->
<template>
  <ul :class="$attrs.class">
    <li v-for="(item, i) in listToRender" :key="i">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            required: true,
        },
        reversed: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        listToRender() {
            let list = this.list.slice();
            return this.reversed ? list.reverse() : list;
        },
    },
};
</script>