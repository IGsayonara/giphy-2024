import { fetchRandom, fetchSearchResults } from '@/api/giphy/utils'
import { defineStore } from 'pinia'
import { MultiResponse } from 'giphy-api'

const PaginationLimit = 36
const RandomLimit = 4

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchValue: '',
    searchResults: [] as MultiResponse['data'],
    pagination: null as null | MultiResponse['pagination'],
    notFound: false,
    loading: false,
  }),
  getters: {
    canFetchMore (): boolean {
      if (!this.pagination) return false
      return this.pagination.offset + this.pagination.count < this.pagination.total_count
    },
  },
  actions: {
    async fetchSearchResults () {
      this.loading = true
      if (!this.searchValue) {
        const randomResults = await Promise.all(new Array(RandomLimit).fill(0).map(() => {
          return fetchRandom()
        }))
        this.searchResults = randomResults.map(r => r.data)
        this.notFound = false
        this.pagination = null
        this.loading = false
        return
      }

      const response = await fetchSearchResults(this.searchValue, PaginationLimit)
      this.pagination = response.pagination
      this.searchResults = response.data
      this.notFound = !response.data.length
      this.loading = false
    },

    async fetchMore () {
      const response = await fetchSearchResults(this.searchValue, PaginationLimit, (this.pagination?.offset || 0) + PaginationLimit)

      this.pagination = response.pagination
      this.searchResults.push(...response.data)
    },
  },
})
