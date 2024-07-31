<template>
  <VContainer>
    <VRow v-if="!gifStore.notFound" justify="center">
      <VCol col="12" md="6">
        <VRow class="text-center" justify="center">
          <v-skeleton-loader v-if="gifStore.gifLoading" height="300px" type="image" width="100%" />
          <div v-else-if="gifStore.gif">
            <GiphyGif
              :full="true"
              :gif="gifStore.gif"
              height="auto"
              width="100%"
            />
            <div>
              <h1>{{ gifStore.gif.title }}</h1>
              <h3>Author: <a href="#" @click.prevent="onUserLinkClick(gifStore.gif.username)">{{ gifStore.gif.username }}</a></h3>
            </div>
          </div>

        </VRow>
      </VCol>
    </VRow>

    <VRow v-else justify="center">
      <VCol cols="12" md="6">
        <NotFound />
      </VCol>
    </VRow>

    <VRow justify="center">
      <VCol col="12" md="6">
        <VSlideGroup v-if="gifStore.randomGifsLoading">
          <VSlideGroupItem v-for="index in 2" :key="index">
            <v-skeleton-loader class="ma-4" height="100px" type="image" width="200px" />
          </VSlideGroupItem>
        </VSlideGroup>
        <VSlideGroup v-else-if="gifStore.randomGifs">
          <VSlideGroupItem v-for="gif in gifStore.randomGifs" :key="gif.id">
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

  </VContainer>

</template>

<script lang="ts" setup>
  import { useGifStore } from '@/stores/gif.store'
  const router = useRouter()
  const route = useRoute('/gifs/[id]')

  const gifStore = useGifStore()

  const initializeStore = () => {
    const id = route.params.id
    if (id) {
      gifStore.fetchGif(id)
    }
    gifStore.fetchRandomGifs()
  }
  initializeStore()

  watch(() => route.params, () => {
    initializeStore()
  })

  const onUserLinkClick = (username: string) => {
    router.push(`/users/${username}`)
  }

  const onGifClick = (id: string) => {
    router.push(`/gifs/${id}`)
  }
</script>

<route lang="yaml">
meta:
  layout: header
</route>
