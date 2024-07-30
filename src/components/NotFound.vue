<template>
  <GiphyGif
    v-if="gif"
    :full="true"
    :gif="gif"
    height="auto"
    width="100%"
  />
</template>

<script setup lang="ts">
  import { fetchRandom } from '@/api/giphy/utils'
  import { GIFObject } from 'giphy-api'
  const gif = ref<null | GIFObject>(null)

  onMounted(() => {
    fetchRandom('Not found')
      .then(r => r.data)
      .then(data => {
        gif.value = data
      })
  })
</script>

<style scoped lang="sass">

</style>
