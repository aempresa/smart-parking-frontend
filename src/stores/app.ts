import { IAppStore, IAppStoreState } from '@/interfaces/app'
import { defineStore } from 'pinia'

export const useAppStore = defineStore<'app', IAppStore>('app', () => {
  const state: IAppStoreState = {
    navLinks: [
      { name: 'Inicio', path: '/' },
      { name: 'Estacionamentos', path: '/' },
      { name: 'Meus Carros', path: '/' },
    ],
  }

  const stateApp = computed(() => {return {...state}})

  return {
    stateApp,
  }
})
