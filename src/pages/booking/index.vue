<script lang="ts" setup>
const gridOfPlaces: { lines: number; columns: number } = {
  lines: 5,
  columns: 5,
};

const bookingSpotTicket = reactive({
  parking: null,
  date: null,
  startTime: null,
  endTime: null,
  spots: [],
  total: 10,
})
</script>

<template>
  <v-main class="d-flex ga-2 pa-4 align-center justify-space-around">
    <booking-spot-form :gridOfPlaces="gridOfPlaces" @update:selected-spots="(spots) => bookingSpotTicket.spots = spots" />

    <v-card width="40%" height="80vh" class="d-flex flex-column ga-10 px-6 py-8" rounded="lg">
      <p class="text-h4 text-uppercase font-weight-medium">Resumo da reserva</p>

      <v-card class="d-flex ga-6 px-6 py-4 align-center w-100 position-relative" variant="text">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.4018146956296!2d-48.848139823845536!3d-26.281070977029373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb029e377bf2f%3A0xe4ae5d4696d0d4a!2sEstacionamento%20ACIJ%20-%20Sagua%C3%A7u%2C%20Joinville%20-%20SC%2C%2089221-008!5e0!3m2!1spt-BR!2sbr!4v1726243502383!5m2!1spt-BR!2sbr"
          width="200"
          height="140"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="rounded-lg"
        ></iframe>

        <div class="d-flex flex-column ga-2">
          <p class="text-h5 font-weight-medium text-uppercase">
            Estacionando ACIJ
          </p>

          <div class="text-subtitle text-grey text-uppercase">
            <p>
              Rua Coronel Procópio Gomes, 911
            </p>
            <p>
              Saguaçu, Joinville - SC
            </p>
          </div>

          <div class="d-flex ga-2">
            <v-icon color="yellow" v-for="_ in 5" size="30">
              mdi-star
            </v-icon>
          </div>
        </div>

        <v-icon class="position-absolute right-0 top-0 ma-4 cursor-pointer" size="20">
          mdi-open-in-new
        </v-icon>
      </v-card>
      <div class="d-flex flex-column ga-4 text-h5">
        <div class="font-weight-medium">
          <p>
            Vagas:
          </p>

          <p>
            {{ bookingSpotTicket.spots.join(', ') }}
          </p>
        </div>
        <div class="font-weight-medium">
          <p>
            Data:
          </p>

          <p>

          </p>
        </div>
        <div class="font-weight-medium">
          <p>
            Horário:
          </p>

          <p>

          </p>
        </div>
        <div class="font-weight-medium">
          <p>
            Total:
          </p>

          <p>

          </p>
        </div>
      </div>

      <v-btn color="primary text-h5 text-uppercase">
        Confirmar reserva
      </v-btn>
    </v-card>
  </v-main>
</template>
