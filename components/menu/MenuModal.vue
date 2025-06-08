<script setup lang="tsx">
import { ref } from 'vue';
import { links } from '~/utils/data/routes'

const open = ref(false);
</script>

<template>
  <div v-if="open"
    class="z-8 fixed h-screen w-screen backdrop-blur-sm bg-widget-hover/30 grid items-center justify-center noise transition-opacity duration-300"
    :class="open ? 'opacity-100' : 'opacity-0'">
    <menu class="z-9 bg-black/90 w-full py-8 md:py-16 border-1 border-brand-gold flex flex-col items-center">
      <div class="flex h-12 md:h-20 items-center gap-8">
        <div class="h-full w-2 md:w-4 border-y-1 border-l-1 border-brand-gold"></div>
        <h1 class="text-white text-3xl md:text-6xl font-bold">Navigation</h1>
        <div class="h-full w-2 md:w-4 border-y-1 border-r-1 border-brand-gold"></div>
      </div>
      <nav class="pt-12 md:pt-24 w-full px-12 flex flex-col items-center gap-8">
        <RouterLink v-for="link of links" :to="link.target" :key="link.text"
          class="bg-widget w-full text-center py-2 md:py-6 px-6 md:px-24 border-1 border-brand-gold shadow-[-8px_-8px_0_#372D02,8px_8px_0_#372D02] hover:-translate-1 hover:bg-widget-hover transition-transform duration-50 ease-in-out"
          @click="open = false">
          <h2 class="text-white text-xl md:text-5xl pb-0.5 md:pb-2">
            {{ link.text }}
            <!-- <span class="text-brand-gold">.</span> -->
          </h2>
          <!-- <h3 class="text-faded">({{ link.alias }})</h3> -->
        </RouterLink>
      </nav>
    </menu>
  </div>
  <button
    class="z-10 border-brand-gold border-2 p-6 text-xl aspect-square fixed bottom-1/10 bg-black hover:bg-widget-hover hover:cursor-pointer transition-all duration-300 shadow-brand-gold shadow-button-glow"
    :class="open ? 'right-1/2 -rotate-6' : 'right-1/5 rotate-6'" @click="open = !open">
    <Icon v-if="open" name="ri:close-large-line" />
    <Icon v-else name="ri:menu-line" />
  </button>
</template>

<style scoped>
.noise:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='500'%3E%3Cfilter id='noise' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeBlend mode='screen'/%3E%3C/filter%3E%3Crect width='500' height='500' filter='url(%23noise)' opacity='0.13'/%3E%3C/svg%3E");
  mix-blend-mode: color-burn;
}
</style>