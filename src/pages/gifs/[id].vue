<template>
  <VContainer>
    <VRow v-if="gifStore.gif" justify="center">
      <VCol col="12" md="6">
        <VRow class="text-center" justify="center">
          <VCard
            :height="originalGif?.height"
            :width="originalGif?.width"
          >
            <template #image>
              <GiphyGif
                :full="true"
                :gif="gifStore.gif"
                height="auto"
                width="100%"
              />
            </template>
          </VCard>
          <div>
            <h1>{{ gifStore.gif.title }}</h1>
            <h3>Author: <a href="#" @click="onUserLinkClick(gifStore.gif.username)">{{ gifStore.gif.username }}</a></h3>
          </div>
        </VRow>
      </VCol>
    </VRow>

    <VRow v-if="gifStore.randomGifs" justify="center">
      <VCol col="12" md="6">
        <VSlideGroup>
          <VSlideGroupItem v-for="gif in gifStore.randomGifs">
            <GiphyGif
              class="ma-4 cursor-pointer"
              :full="false"
              :gif="gif"
              height="100px"
              width="200px"
              @click="onGifClick(gif.id)"
            />
          </VSlideGroupItem>
        </VSlideGroup>
      </VCol>
    </VRow>

    <VRow v-else-if="gifStore.notFound" justify="center">
      <VCol cols="12" md="6">
        <NotFound />
      </VCol>
    </VRow>

  </VContainer>

</template>

<script lang="ts" setup>
  import { useGifStore } from '@/stores/gif.store'
  const router = useRouter()
  const route = useRoute()

  const gifStore = useGifStore()

  const originalGif = computed(() => {
    return gifStore.gif?.images.original
  })

  const initializeStore = () => {
    gifStore.fetchGif(route.params.id)
    gifStore.fetchRandomGifs()
  }
  initializeStore()

  watch(() => route.params.id, () => {
    initializeStore()
  })

  const onUserLinkClick = (username: string) => {
    router.push(`/users/${username}`)
  }

  const onGifClick = (id: string) => {
    router.push(`/gifs/${id}`)
  }
</script>
