<script lang="ts" setup>
  import { useParkingStore } from '@/stores/parking'

  const parkingStore = useParkingStore()
</script>

<template>
  <v-sheet class="d-flex flex-column mx-auto ga-4 bg-grey-lighten-4 pa-4 rounded-lg" width="90%">
    <p class="text-h4 text-uppercase">
      Estacionamentos perto de voce
    </p>

    <div class="w-100 d-flex ga-4 py-2 overflow-x-auto style-scroll">
      <NearbyParking v-for="parking in parkingStore.nearbyParkings" :key="parking.name" :item="parking" />
    </div>
  </v-sheet>
</template>
