<script setup lang="ts">
defineProps(['icon', 'title', 'description']);
</script>

<template>
  <v-card class="position-relative d-flex flex-column align-center justify-center rounded-lg overflow-visible mx-10" width="320px" height="320px">
        <v-card-text class="d-flex flex-column align-center justify-center ga-4">
          <img :src="icon" width="100px" height="100px"></img>
          <div class="text-center mx-10">
            <p class="text-uppercase text-h5 font-weight-medium">
              {{ title }}
            </p>
            <p class="text-h6 font-weight-regular">
              {{ description }}
            </p>
          </div>
        </v-card-text>

        <v-btn icon="mdi-arrow-right" color="primary" class="position-absolute bottom-0" style="transform: translateY(50%);">
          <template #default>
            <v-icon size="20">mdi-arrow-right</v-icon>
          </template>
        </v-btn>
      </v-card>
</template>
