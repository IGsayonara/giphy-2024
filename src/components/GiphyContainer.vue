<template>
  <VInfiniteScroll @load="loadMore">
    <VRow ref="giphy">
      <VCol v-for="gif in searchStore.searchResults" :key="gif.id" cols="3">
        <GiphyCard :gif="gif" />
      </VCol>
    </VRow>
  </VInfiniteScroll>
</template>

<script setup lang="ts">
  import { useSearchStore } from '@/stores/search.store'

  const giphy = ref<HTMLElement | null>(null)

  const searchStore = useSearchStore()
  searchStore.fetchSearchResults()

  const loadMore = ({ done }) => {
    searchStore.fetchMore().then(() => {
      done('ok')
    })
  }

</script>

<style scoped lang="sass">

</style>
