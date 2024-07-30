<template>
  <VRow>
    <VCol cols="12">
      <VRow v-if="isLoading">
        <VCol
          v-for="index in 16"
          :key="index"
          cols="6"
          md="3"
        >
          <v-skeleton-loader type="image" />
        </VCol>
      </VRow>
      <VRow v-else-if="!searchStore.searchValue" ref="giphy">
        <VCol
          v-for="gif in searchStore.searchResults"
          :key="gif.id"
          cols="6"
          md="3"
        >
          <GiphyGif :full="false" :gif="gif" height="200px" width="100%" />
        </VCol>
      </VRow>
      <VContainer v-else-if="searchStore.notFound">
        <NotFound />
      </VContainer>
      <VInfiniteScroll v-else style="overflow: hidden" @load="loadMore">
        <template #default>
          <VRow ref="giphy">
            <VCol
              v-for="gif in searchStore.searchResults"
              :key="gif.id"
              cols="6"
              md="3"
            >
              <GiphyGif :full="false" :gif="gif" height="200px" width="100%" />
            </VCol>
          </VRow>
        </template>
        <template #loading>
          Loading...
        </template>
      </VInfiniteScroll>

    </VCol>
  </VRow>
</template>

<script setup lang="ts">
  import { InfiniteScrollOnLoad } from '@/helpers/infinitive-scroll.type'
  import { useSearchStore } from '@/stores/search.store'
  const searchStore = useSearchStore()
  searchStore.fetchSearchResults()

  const giphy = ref<HTMLElement | null>(null)
  const isLoading = ref(searchStore.loading)

  watch(() => searchStore.loading, () => {
    if (searchStore.loading) isLoading.value = true
    else {
      setTimeout(() => {
        isLoading.value = false
      }, 500)
    }
  })

  const loadMore: InfiniteScrollOnLoad = ({ done }) => {
    done('loading')
    if (!searchStore.canFetchMore) {
      done('empty')
      return
    }

    searchStore.fetchMore().then(() => {
      done('ok')
    })
  }

</script>

<style scoped lang="sass">

</style>
