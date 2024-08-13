<script lang="ts" setup>

</script>

<template>
  <v-sheet class="py-8 mx-auto px-2" width="90%">
    <v-row class="d-flex align-center justify-space-between ga-6">
      <v-col class="d-flex flex-column ga-10" sm="6" style="max-width: 720px">
        <p class="text-uppercase font-weight-bold" style="font-size: 3.1vw;">
          Reserve nos melhores estacionamentos aqui!
        </p>

        <v-text-field rounded="xl" variant="solo-filled">
          <template #label>
            <p class="text-h5 d-flex">
              PARA ONDE VOCE VAI?
            </p>
          </template>
        </v-text-field>
      </v-col>
      <v-col sm="5">
        <v-img cover rounded="xl" src="/home/banner.png" style="height: 100%;" />
      </v-col>
    </v-row>
  </v-sheet>
</template>
