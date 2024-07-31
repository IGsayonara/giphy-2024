<template>
  <VContainer>
    <VRow v-if="userStore.user" justify="center">
      <VCol col="12" md="6">
        <VRow class="text-center" justify="center">
          <div>
            <div class="flex-column mt-4">
              <div class="d-flex">
                <a :href="userStore.user.profile_url"><VImg height="50" :src="userStore.user.avatar_url" width="50" /></a>
                <h1 class="ml-2">{{ userStore.user.username }}</h1>
              </div>
              <p class="mt-4">Visit
                <a :href="userStore.user.profile_url">{{ userStore.user.username }}</a>
                on <a href="https://giphy.com">GIPHY</a>
              </p>
              <p class="mt-4">
                <a class="cursor-pointer" href="#" @click.prevent="$router.push(`/gifs/${userStore.gifId}`)">Back to gif</a>
              </p>
            </div>
          </div>
        </VRow>
      </VCol>
    </VRow>
    <VRow v-else class="text-center" justify="center">
      <div>
        <h2>User can be reached only from a gif page</h2>
        <a href="#" @click="$router.push('/')">Go home</a>
      </div>
    </VRow>
  </VContainer>
</template>

<script lang="ts" setup>
  import { useUserStore } from '@/stores/user.store'

  const userStore = useUserStore()

  const initializeStore = () => {
    userStore.fetchUser()
  }
  initializeStore()

</script>

<route lang="yaml">
meta:
  layout: header
</route>
