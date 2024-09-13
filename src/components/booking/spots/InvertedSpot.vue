<script setup lang="ts">
const props = defineProps({
  number: Number,
});

const isSelected = ref(false);
const isOccupied = ref(false);
</script>

<template>
  <span
    v-if="!isOccupied"
    class="d-flex align-center text-h5 border-md border-t-0 border-primary px-4 py-6 rounded-b-lg hover-spots"
    @click="isSelected = !isSelected"
    :class="{
      'bg-primary text-white': isSelected,
    }"
  >
    <p>
      {{ props.number }}
    </p>
  </span>

  <span
    v-else
    class="d-flex align-center text-h5 border-md border-t-0 border-primary px-2 py-4 rounded-b-lg"
  >
    <v-img src="/icons/car-above.png" width="25px" />
  </span>
</template>
