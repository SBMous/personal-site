<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import LoadingOverlay from './components/LoadingOverlay.vue';
import Menu from './components/MenuBar.vue';

const router = useRouter();

</script>

<template>
  <!-- TODO: Maybe take a ref I can trigger the hide from externally? -->
  <!-- This should only activate on the homepage, maybe move it to there -->
  <div :class="router.currentRoute.value.name != 'welcome' ? 'hidden' : ''">
    <LoadingOverlay />
  </div>

  <Menu />
  <!-- Nav / Menu Element - Floating on Mobile, fixed on desktop? -->
  <!-- <Menu /> -->

  <div class="min-h-screen w-screen bg-black">
    <RouterView />
  </div>
</template>
