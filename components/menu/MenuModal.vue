<script setup lang="tsx">
import { ref } from 'vue'
import { links } from '~/utils/data/routes'
import YLogo from '~/assets/y-logo.svg'

const open = ref(false)
</script>

<template>
  <div v-if="open"
    class="bg-widget-hover/30 noise fixed z-8 grid h-full w-full items-center justify-center backdrop-blur-sm transition-opacity duration-300"
    :class="open ? 'opacity-100' : 'opacity-0'">
    <menu
      class="border-brand-gold z-9 flex w-xs max-h-4/5 mx-auto flex-col items-center border-1 bg-black/70 pt-8 pb-16 md:py-16">
      <div class="flex items-center w-full gap-6">
        <div class="border-brand-gold grow border-t-1"></div>
        <YLogo class="w-16 h-16 grow-0" :fontControlled="false" />
        <div class="border-brand-gold grow border-t-1"></div>
      </div>
      <nav class="flex flex-col items-center gap-8 px-12 pt-12 md:pt-24">
        <RouterLink v-for="link of links" :to="link.target" :key="link.text"
          class="bg-widget border-brand-gold hover:bg-widget-hover w-full border-1 px-6 py-2 text-center shadow-[-8px_-8px_0_#372D02,8px_8px_0_#372D02] transition-transform duration-50 ease-in-out hover:-translate-1 md:px-24 md:py-6"
          @click="open = false">
          <h2 class="pb-0.5 text-xl text-white/80 md:pb-2 md:text-5xl">
            {{ link.text }}
            <!-- <span class="text-brand-gold">.</span> -->
          </h2>
          <!-- <h3 class="text-faded">({{ link.alias }})</h3> -->
        </RouterLink>
      </nav>
    </menu>
  </div>
  <button
    class="border-brand-gold hover:bg-widget-hover shadow-brand-gold shadow-button-glow fixed z-10 aspect-square border-2 bg-black p-4 text-xl transition-all duration-300 hover:cursor-pointer"
    :class="open ? 'right-1/2 -rotate-6 translate-1/2 bottom-1/10' : 'right-0 translate-x-2 -translate-y-2 rotate-6 bottom-0'"
    @click="open = !open">
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
