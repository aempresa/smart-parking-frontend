<script lang="ts" setup>
  import { useLayout } from '@/composables/layout'
  const { bannerHome } = useLayout()
</script>

<template>
  <v-main>
    <component :is="bannerHome" />
    <nearby-parking-section />
  </v-main>
</template>
