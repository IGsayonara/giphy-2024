<template>
  <v-app>
    <v-main>
      <div class="mb-4 cursor-pointer mt-4" @click="$router.push('/')"><GiphyLogo /></div>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  //
</script>
