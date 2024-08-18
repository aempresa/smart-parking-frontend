<script lang="ts" setup></script>

<template>
  <v-sheet class="pt-8 mx-auto d-flex flex-column ga-6" width="90%">
    <v-img
      cover
      max-height="280px"
      rounded="xl"
      src="/home/banner.png"
      style="height: 100%"
    />

    <v-text-field rounded="xl" variant="solo-filled">
      <template #label>
        <p class="text-h5 d-flex">PARA ONDE VOCE VAI?</p>
      </template>
    </v-text-field>
  </v-sheet>
</template>
