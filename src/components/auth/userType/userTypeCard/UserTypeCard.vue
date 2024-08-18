<script setup lang="ts">
import { useLayout } from '@/composables/layout';

const { isMobile } = useLayout();
const props = defineProps(['icon', 'title', 'description']);
</script>

<template>
  <user-type-card-mobile v-if="isMobile" :icon="props.icon" :title="props.title" :description="props.description"/>
  <user-type-card-desktop v-else :icon="props.icon" :title="props.title" :description="props.description"/>
</template>
