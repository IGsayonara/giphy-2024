import { fetchById, fetchRandom } from '@/api/giphy/utils'
import { GIFObject } from 'giphy-api'
import { defineStore } from 'pinia'

const RandomLimit = 4

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
    async fetchRandomGifs () {
      this.randomGifs = await Promise.all(new Array(RandomLimit).fill(0).map(async () => {
        return fetchRandom().then(r => r.data)
      }))
    },
  },
})
