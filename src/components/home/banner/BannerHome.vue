<script setup lang="ts">
import { useLayout } from '@/composables/layout';

const { isMobile } = useLayout()
</script>

<template>
  <banner-home-mobile v-if="isMobile" />
  <banner-home-desktop v-else />
</template>
