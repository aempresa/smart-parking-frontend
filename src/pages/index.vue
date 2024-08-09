<script lang="ts" setup>
  import { useLayout } from '@/composables/layout'
  const { bannerHome } = useLayout()
</script>

<template>
  <v-main class="d-flex flex-column ga-5">
    <component :is="bannerHome" />
    <nearby-parking-section />
  </v-main>
</template>
