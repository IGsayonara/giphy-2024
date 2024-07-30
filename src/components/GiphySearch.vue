<template>
  <v-text-field
    v-model="searchStore.searchValue"
    label="Search"
    @input="onInput"
  />
</template>

<script setup lang="ts">
  import { useSearchStore } from '@/stores/search.store'

  const searchStore = useSearchStore()

  const onInput = () => {
    searchStore.fetchSearchResults()
  }
</script>

<style scoped lang="sass">

</style>
