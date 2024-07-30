<template>
  <GiphyOriginal
    v-if="full"
    :gif="gif"
    :height="height"
    :width="width"
  />
  <GiphyPreview
    v-else
    :gif="gif"
    :height="height"
    :width="width"
  />
</template>

<script setup lang="ts">
  import { GIFObject } from 'giphy-api'

  const props = defineProps<{gif: GIFObject, height: string, width: string, full: boolean}>()
  const gif = toRef(props, 'gif')
</script>

<style scoped lang="sass">

</style>
