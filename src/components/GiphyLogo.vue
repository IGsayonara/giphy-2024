<template>
  <v-img height="50px" src="@/assets/logo.png" />
</template>

<script setup lang="ts">
  import { fetchRandom } from '@/api/giphy/utils'
  import { GIFObject } from 'giphy-api'
  const gif = ref<null | GIFObject>(null)

  fetchRandom('Giphy')
    .then(r => r.data)
    .then(data => {
      gif.value = data
    })

</script>

<style scoped lang="sass">

</style>
