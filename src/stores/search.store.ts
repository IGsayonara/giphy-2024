import { fetchSearchResults, fetchTrendingResults } from '@/api/giphy/utils'
import { defineStore } from 'pinia'
import { MultiResponse } from 'giphy-api'

const PaginationLimit = 36

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchValue: '' as string,
    searchResults: [] as MultiResponse['data'],
    pagination: null as null | MultiResponse['pagination'],
  }),
  getters: {},
  actions: {
    async changeSearchValue (newSearchValue: string) {
      this.searchValue = newSearchValue
      await this.fetchSearchResults()
    },
    async fetchSearchResults () {
      const response =
        this.searchValue
          ? await fetchSearchResults(this.searchValue, PaginationLimit)
          : await fetchTrendingResults(PaginationLimit)
      this.pagination = response.pagination
      this.searchResults = response.data
    },
    async fetchMore () {
      const response =
        this.searchValue
          ? await fetchSearchResults(this.searchValue, PaginationLimit, (this.pagination?.offset || 0) + PaginationLimit)
          : await fetchTrendingResults(PaginationLimit, (this.pagination?.offset || 0) + PaginationLimit)
      this.pagination = response.pagination
      this.searchResults.push(...response.data)
    },
  },
})
