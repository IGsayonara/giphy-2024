<template>
  <div>
    <img :alt="gif.title" height="150px" :src="gif.images.original.url" width="100%">
  </div>
</template>

<script setup lang="ts">
  import { GIFObject } from 'giphy-api'

  const props = defineProps<{gif: GIFObject}>()
  const gif = toRef(props, 'gif')
</script>

<style scoped lang="sass">

</style>
