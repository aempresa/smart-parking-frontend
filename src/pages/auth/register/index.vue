<script lang="ts" setup></script>

<template>
  <v-main class="h-100 d-flex align-center justify-center bg-grey-lighten-4">
    <v-sheet class="rounded-xl" width="22%">
      <v-form class="w-100 d-flex flex-column align-center px-6 py-16 ga-6">
        <div class="d-flex flex-column w-100 align-center ga-4">
          <v-img src="/logo.png" width="80" />

          <div class="d-flex flex-column w-100 align-center">
            <p class="text-h4 text-uppercase font-weight-medium">Bem vindo!</p>
            <p class="text-h6 text-uppercase">
              Complete as informações abaixo.
            </p>
          </div>
        </div>
        <div class="d-flex flex-column w-100 ga-6">
          <div class="d-flex flex-column">
            <p class="text-h6 text-uppercase mx-1">Nome</p>
            <v-text-field
              density="compact"
              hide-details
              rounded="lg"
              variant="outlined"
            />
          </div>

          <div class="d-flex flex-column">
            <p class="text-h6 text-uppercase mx-1">Email</p>
            <v-text-field
              density="compact"
              hide-details
              rounded="lg"
              variant="outlined"
            />
          </div>

          <div class="d-flex flex-column">
            <p class="text-h6 text-uppercase mx-1">Senha</p>
            <v-text-field
              density="compact"
              hide-details
              rounded="lg"
              variant="outlined"
            />
          </div>
        </div>

        <div class="w-100 position-relative d-flex align-center justify-center">
          <span class="position-absolute bg-white px-4" style="z-index: 1">
            <p class="text-h6 text-weight-regular text-medium-emphasis">ou</p>
          </span>
          <v-divider class="w-100" style="z-index: 0" />
        </div>

        <div class="w-100 d-flex flex-column ga-4">
          <div class="w-100 d-flex justify-space-between">
            <v-btn color="grey-lighten-1" rounded="lg" style="width: 45%" variant="outlined">
              <v-icon color="black" size="25"> mdi-google </v-icon>
            </v-btn>

            <v-btn color="grey-lighten-1" rounded="lg" style="width: 45%" variant="outlined">
              <v-icon color="black" size="25"> mdi-apple </v-icon>
            </v-btn>
          </div>

          <v-btn class="w-100" color="primary" rounded="lg" variant="flat">
            <p class="text-h5 text-uppercase font-weight-bold">Registre-se</p>
          </v-btn>
        </div>

        <div
          class="w-100 text-h6 text-uppercase d-flex align-center justify-center"
        >
          Ja possui uma conta?
          <v-btn class="pa-0" density="compact" to="/auth/login" variant="text">
            <p class="text-h6 text-uppercase text-primary text-decoration-underline cursor-pointer">
              Entre
            </p>
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
  </v-main>
</template>

<route lang="yaml">
meta:
  layout: auth
</route>
