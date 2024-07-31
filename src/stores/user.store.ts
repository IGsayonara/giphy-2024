import { useGifStore } from '@/stores/gif.store'
import { GIFObject } from 'giphy-api'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as null | GIFObject['user'],
    gifId: null as null | string,
  }),
  getters: {},
  actions: {
    fetchUser () {
      const gifStore = useGifStore()

      if (gifStore.gif) {
        this.user = gifStore.gif.user
        this.gifId = gifStore.gif.id
        localStorage.setItem('user', JSON.stringify(this.user))
        localStorage.setItem('gifId', this.gifId)
      } else {
        this.user = JSON.parse(localStorage.getItem('user') || '')
        this.gifId = localStorage.getItem('gifId')
      }
    },
  },
})
