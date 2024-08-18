<script setup lang="ts">
defineProps(["icon", "title", "description"]);
</script>

<template>
  <v-hover>
    <template #default="{isHovering, props}">
      <v-card v-bind="props" class="d-flex align-center ga-6 rounded-lg cursor-pointer px-6 my-6" :elevation="isHovering ? 4 : 2" width="90%" height="140px" max-width="380px">
        <v-card-text class="d-flex align-center ga-6">
          <v-img :src="icon" width="75px" />

          <div class="text-center">
            <p class="text-uppercase text-h5 font-weight-medium">
              {{ title }}
            </p>
            <p class="text-h6 font-weight-regular">
              {{ description }}
            </p>
          </div>
        </v-card-text>
      </v-card>
    </template>
  </v-hover>
</template>
