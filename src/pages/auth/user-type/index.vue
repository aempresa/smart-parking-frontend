<script setup lang="ts">
import { useLayout } from '@/composables/layout';
const { isMobile } = useLayout();
</script>

<template>
  <v-main class="position-relative w-100 h-100 d-flex flex-wrap align-center justify-center py-0" :class="isMobile ? 'bg-white flex-column' : 'bg-grey-lighten-4'">
    <v-icon class="position-absolute left-0 top-0 ma-2 cursor-pointer" size="20">
      mdi-arrow-left
    </v-icon>

    <user-type-card icon="/icons/user-type/client-icon.png" title="Entre como cliente" description="Descubra e alugue os melhores estacionamentos perto de você!"/>
    <user-type-card icon="/icons/user-type/parking-icon.png" title="Cadastre seu estacionamento" description="Controle suas vagas, alugue e encontre os melhores clientes!"/>
  </v-main>
</template>
