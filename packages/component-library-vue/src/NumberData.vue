<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtNumberData",
    props: {
      value: { type: [Number, String], required: false, default: undefined },
    },
  });
</script>

<template>
  <data
    :value="typeof value === 'string' || typeof value === 'number' ? String(value) : undefined"
    class="utrecht-number-data"
  >
    <slot />
  </data>
</template>

<style src="@utrecht/components/number-data/css/index.scss"></style>
