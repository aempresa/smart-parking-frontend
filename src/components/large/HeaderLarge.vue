<script lang="ts" setup>
  import { IAppStore } from '@/interfaces/app'
  import { useAppStore } from '@/stores/app'

  const appStore: IAppStore = useAppStore()
</script>

<template>
  <header
    class="w-100 position-relative d-flex align-center justify-center border-b-sm"
    style="height: 60px"
  >
    <v-avatar class="position-absolute left-0 mx-4" size="50">
      <v-img src="/logo.png" style="width: 40px; height: 40px" />
    </v-avatar>

    <v-list class="d-flex align-center ga-4">
      <v-list-item
        v-for="link in appStore.state.navLinks"
        :key="link.name"
        class="py-0 text-h5 text-uppercase rounded"
        density="compact"
        :value="link.name"
      >
        {{ link.name }}
      </v-list-item>
    </v-list>

    <v-btn class="position-absolute right-0 mx-4 text-h5 text-uppercase px-10" color="primary"> Entrar </v-btn>
  </header>
</template>
