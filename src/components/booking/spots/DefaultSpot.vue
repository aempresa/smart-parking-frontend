<script setup lang="ts">
const props = defineProps({
  number: Number,
});
const emit = defineEmits(['selected-spot', 'unselected-spot']);

const isSelected = ref(false);
const isOccupied = ref(false);

watch(() => isSelected.value, (value) => {
  if (value) {
    emit('selected-spot', props.number);
  } else {
    emit('unselected-spot', props.number);
  }
})
</script>

<template>
  <span
    v-if="!isOccupied"
    class="d-flex align-center text-h5 border-md border-b-0 border-primary px-4 py-6 rounded-t-lg hover-spots"
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
