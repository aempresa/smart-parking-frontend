<script lang="ts" setup>
  import { INearbyParking } from '@/entities/parking'
  defineProps<{
    item: INearbyParking;
  }>()
</script>

<template>
  <v-card
    class="d-flex flex-column justify-space-between pa-2 border-sm rounded-lg"
    min-height="180px"
    min-width="280px"
  >
    <v-card-title class="w-100 d-flex ga-2 align-center">
      <v-icon color="primary" size="30">mdi-map-marker</v-icon>
      <v-col class="text-h5">
        <v-row class="font-weight-medium">
          {{ item.name }}
        </v-row>
        <v-row class="font-weight-light">
          {{ item.address }}
        </v-row>
      </v-col>
    </v-card-title>

    <v-card-text class="d-flex">
      <v-row class="d-flex align-center justify-space-between" no-gutters>
        <v-col cols="4">
          <p class="text-h6 text-uppercase">Disponiveis</p>

          <p class="text-h4">
            {{ item.spaces }}
          </p>
        </v-col>

        <v-col cols="3">
          <p class="text-h6 text-uppercase">Preco</p>

          <p class="text-h4">{{ item.price }}/hr</p>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-action>
      <v-btn class="w-100" color="primary">
        <p class="text-h5 text-uppercase font-weight-medium">
          Ver no mapa
        </p>
      </v-btn>
    </v-card-action>
  </v-card>
</template>
