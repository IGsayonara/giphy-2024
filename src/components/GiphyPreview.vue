<template>
  <div>
    <img :alt="gif.title" :height="height" :src="gif.images.preview_gif.url" :width="width"></div>
</template>

<script setup lang="ts">
  import { GIFObject } from 'giphy-api'

  const props = defineProps<{gif: GIFObject, height: string, width: string}>()
  const gif = toRef(props, 'gif')
</script>

<style scoped lang="sass">

</style>
