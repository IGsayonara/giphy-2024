<template>
  <VContainer>
    <template v-if="gifStore.gif">
      <VCard
        :height="originalGif?.height"
        :width="originalGif?.width"
      >
        <template #image>
          <GiphyGif
            :full="true"
            :gif="gifStore.gif"
            height="auto"
            width="auto"
          />
        </template>
      </VCard>
      <h3>Author: <a href="#" @click="onUserLinkClick(gifStore.gif.username)">{{ gifStore.gif.username }}</a></h3>
      <h1>{{ gifStore.gif.title }}</h1>

    </template>
    <NotFound v-else-if="gifStore.notFound" />
  </VContainer>
</template>

<script lang="ts" setup>
  import { useGifStore } from '@/stores/gif.store'
  const router = useRouter()
  // const route = useRoute()

  const gifStore = useGifStore()

  const originalGif = computed(() => {
    return gifStore.gif?.images.original
  })

  const onUserLinkClick = (username: string) => {
    router.push(`/users/${username}`)
  }

  // gifStore.fetchGif(route.params.id)
</script>
