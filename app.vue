<script setup lang="ts">
import Menu from '~/components/MenuBar.vue'

const router = useRouter()

const overlay = ref(router.currentRoute.value.name == 'index')
onMounted(() => {
  setTimeout(() => {
    overlay.value = false
  }, 5000)
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <div v-if="overlay" :class="router.currentRoute.value.path != '/' ? 'hidden' : ''">
    <LoadingOverlay />
  </div>
  <Menu />
  <NuxtPage />
</template>
