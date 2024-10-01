import { defineStore } from 'pinia'

export const useParkingStore = defineStore('parking', () => {
  const state = {
    nearbyParkings: [{
      name: 'Park A',
      address: '123 Main St',
      distance: 120,
      price: 10,
      spaces: 50,
    },
    {
      name: 'Park B',
      address: '456 Elm St',
      distance: 200,
      price: 15,
      spaces: 30,
    },
    {
      name: 'Park C',
      address: '789 Oak St',
      distance: 300,
      price: 20,
      spaces: 40,
    },
    {
      name: 'Park D',
      address: '101 Pine St',
      distance: 150,
      price: 12,
      spaces: 60,
    },
    {
      name: 'Park E',
      address: '202 Maple St',
      distance: 250,
      price: 18,
      spaces: 35,
    },
    {
      name: 'Park F',
      address: '303 Birch St',
      distance: 100,
      price: 8,
      spaces: 55,
    },
    // {
    //   name: 'Park G',
    //   address: '404 Cedar St',
    //   distance: 400,
    //   price: 25,
    //   spaces: 20,
    // },
    // {
    //   name: 'Park H',
    //   address: '505 Walnut St',
    //   distance: 350,
    //   price: 22,
    //   spaces: 45,
    // },
    // {
    //   name: 'Park I',
    //   address: '606 Chestnut St',
    //   distance: 500,
    //   price: 30,
    //   spaces: 25,
    // },
    // {
    //   name: 'Park J',
    //   address: '707 Spruce St',
    //   distance: 600,
    //   price: 35,
    //   spaces: 15,
    // }
    ],
  }

  const nearbyParkings = computed(() => state.nearbyParkings)

  return {
    nearbyParkings,
  }
})
