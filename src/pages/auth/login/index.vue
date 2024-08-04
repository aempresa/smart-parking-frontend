<script lang="ts" setup></script>

<template>
  <v-main class="h-100 d-flex align-center justify-center bg-grey-lighten-4">
    <v-sheet class="rounded-xl" height="70vh" style="min-width: 330px; min-height: 600px" width="22%">
      <v-form class="w-100 h-100 d-flex flex-column align-center justify-center px-6 ga-6">
        <div class="d-flex flex-column w-100 align-center ga-4">
          <v-img src="/logo.png" width="80" />

          <div class="d-flex flex-column w-100 align-center">
            <p class="text-h4 text-uppercase font-weight-medium">
              Bem vindo novamente!
            </p>
            <p class="text-h6 text-uppercase">
              Complete as informações abaixo.
            </p>
          </div>
        </div>
        <div class="d-flex flex-column w-100 ga-6">
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
            <v-text-field density="compact" rounded="lg" variant="outlined">
              <template #details>
                <p
                  class="text-subtitle-1 text-decoration-underline pa-0 ma-0 cursor-pointer"
                  style="height: 20px"
                >
                  Esqueceu a senha?
                </p>
              </template>
            </v-text-field>
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
            <p class="text-h5 text-uppercase font-weight-bold">Entrar</p>
          </v-btn>
        </div>

        <div
          class="w-100 text-h6 text-uppercase d-flex align-center justify-center"
        >
          Nao possui uma conta?
          <v-btn class="px-2" density="compact" to="/auth/register" variant="text">
            <p
              class="text-h6 text-uppercase text-primary text-decoration-underline cursor-pointer"
            >
              Registre-se
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
