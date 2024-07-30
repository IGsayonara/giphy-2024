<template>
  <v-text-field
    v-model="searchStore.searchValue"
    label="Search"
    @input="onInput"
  />
</template>

<script setup lang="ts">
  import { useSearchStore } from '@/stores/search.store'
  import debounce from 'lodash.debounce'

  const searchStore = useSearchStore()

  const onInput = debounce(() => {
    searchStore.fetchSearchResults()
  }, 300)

</script>

<style scoped lang="sass">

</style>
