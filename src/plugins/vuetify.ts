import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import { VDateInput } from 'vuetify/labs/VDateInput'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#3541E8',
          grey: '#888888',
        },
      },
    },
  },
  components: {
    VDateInput,
  },
})
