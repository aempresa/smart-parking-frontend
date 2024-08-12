<script setup lang="ts">
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();

const showMenu = ref(false);
</script>

<template>
  <v-app-bar
    class="w-100 position-sticky top-0 d-flex align-center ga-4 px-4"
    style="z-index: 999"
  >
    <v-icon class="cursor-pointer" size="25" @click.stop="showMenu = !showMenu">
      mdi-menu
    </v-icon>
    <v-avatar class="mx-4" size="40">
      <v-img src="/logo.png" style="width: 30px; height: 30px" />
    </v-avatar>

    <v-btn
      class="cursor-pointer position-absolute right-0 text-h6 text-uppercase px-7 bg-primary text-white"
      color="white"
      density="compact"
    >
      Entrar
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer class="position-fixed" v-model="showMenu" style="height: calc(100vh - 64px);">
    <v-list>
      <v-list-item
        v-for="link in appStore.stateApp.navLinks"
        :key="link.name"
        :value="link.name"
        class="py-0 text-h5 text-uppercase rounded"
        density="compact"
      >
        {{ link.name }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
