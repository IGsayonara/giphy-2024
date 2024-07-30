import { fetchById } from '@/api/giphy/utils'
import { GIFObject } from 'giphy-api'
import { defineStore } from 'pinia'

export const useGifStore = defineStore('gif', {
  state: () => ({
    gif: null as null | GIFObject,
    notFound: false,
    randomGifs: [] as GIFObject[],
  }),
  getters: {},
  actions: {
    async fetchGif (id: string) {
      this.gif = await fetchById(id).then(r => r.data)
        .catch(() => {
          this.notFound = true
          return null
        })
    },
  },
})
