<script setup lang="ts">
const props = defineProps(['gridOfPlaces']);
const emit = defineEmits(['update:selected-spots']);

const selectedSpots = ref<string[]>([]);

function addSpot(spot: string) {
  selectedSpots.value.push(spot);
  emit('update:selected-spots', selectedSpots.value);
}

function removeSpot(spot: string) {
  selectedSpots.value = selectedSpots.value.filter((s) => s !== spot);
  emit('update:selected-spots', selectedSpots.value);
}
</script>

<template>
  <v-sheet width="35%" class="pa-4">
      <v-form class="w-100 d-flex flex-column ga-8 align-center pa-4">
        <div class="d-flex flex-column ga-2 w-100">
          <p class="text-h3 text-uppercase font-weight-medium">
            Reserve sua vaga
          </p>

          <p class="text-h5 text-uppercase font-weight-light">
            Escolha a data, horário e vaga desejada para sua reserva.
          </p>
        </div>

        <div class="d-flex ga-2 align-center w-100">
          <v-card class="d-flex w-50 align-center border-sm border-grey py-1 px-4 text-grey rounded-lg" variant="outlined" color="grey" >
            <v-date-input
              placeholder="dd/mm/aaaa"
              variant="plain"
              prepend-icon=""
              prepend-inner-icon="mdi-calendar-blank"
              color="grey"
              density="compact"
              hide-details="auto"
              rounded="lg"
              class="mb-2"
            />
          </v-card>

          <v-card class="d-flex w-50 ga-2 align-center justify-center border-sm border-grey px-4 text-grey rounded-lg" variant="outlined">
            <template #prepend>
              <v-icon size="22">mdi-clock-outline</v-icon>
            </template>
            <input
              placeholder="Horário"
              variant="solo"
              prepend-icon=""
              color="grey"
              density="comfortable"
              type="time"
              class="input-time"
            ></input>
            <p>
              -
            </p>
            <input
              placeholder="Horário"
              variant="solo"
              prepend-icon=""
              color="grey"
              density="comfortable"
              type="time"
              class="input-time"
            ></input>
          </v-card>
        </div>

        <div class="d-flex flex-column align-center ga-10">
          <span v-for="line in props.gridOfPlaces.lines" class="d-flex ga-6">
            <span v-for="column in props.gridOfPlaces.columns">
              <default-spot v-if="line % 2 != 0" :number="column" @selected-spot="addSpot" @unselected-spot="removeSpot" />
              <inverted-spot v-else :number="column" @selected-spot="addSpot" @unselected-spot="removeSpot" />
            </span>
          </span>
        </div>
      </v-form>
    </v-sheet>
</template>


<style lang="scss" scoped>
.input-time {
  all: unset;
  height: 48px;
  border: none;
  font-size: 16px;
  text-align: center;
}
</style>
