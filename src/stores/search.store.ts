import {defineStore} from 'pinia';
import {MultiResponse} from "giphy-api";
import {fetchRandomResults, fetchSearchResults} from "../api/giphy/utils.ts";

export const useSearchStore = defineStore('search', {
    state: () => ({
        searchValue: "" as string,
        searchResults: null as null | MultiResponse['data'],
        pagination: null as null | MultiResponse['pagination'],
    }),
    getters: {},
    actions: {
        async changeSearchValue(newSearchValue: string) {
            this.searchValue = newSearchValue;
            await this.fetchSearchResults();
        },
        async fetchSearchResults() {
            if (this.searchValue) {
                this.searchResults = await fetchSearchResults(this.searchValue).then((r) => r.data);
            } else {
                this.searchResults = await fetchRandomResults();
            }
        }
    },
});
