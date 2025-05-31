<script setup lang="tsx">
import { ref } from 'vue';

const hidden = ref(true);

interface Link {
  text: string,
  alias: string
}

const links: Link[] = [
  {
    text: "Who I Am",
    alias: "Home"
  },
  {
    text: "How I Got Here",
    alias: "History"
  },
  {
    text: "What I'm Doing",
    alias: "Projects"
  },
  {
    text: "Thinking",
    alias: "Blog"
  },
]
</script>

<template>
  <div class="z-8 fixed h-screen w-screen backdrop-blur-sm bg-brand-gold/10 grid items-center justify-center"
    :class="hidden ? 'hidden' : 'block'">
    <menu class="bg-black/90 w-full py-8 md:py-16 border-1 border-brand-gold flex flex-col items-center">
      <div class="flex h-12 md:h-20 items-center gap-8">
        <div class="h-full w-2 md:w-4 border-y-1 border-l-1 border-brand-gold"></div>
        <h1 class="text-white text-3xl md:text-6xl font-bold">Navigation</h1>
        <div class="h-full w-2 md:w-4 border-y-1 border-r-1 border-brand-gold"></div>
      </div>
      <nav class="pt-12 md:pt-24 w-full px-12 flex flex-col items-center gap-8">
        <RouterLink to="/" v-for="link of links" :key="link.alias"
          class="bg-widget w-full text-center py-2 md:py-6 px-6 md:px-24 border-1 border-brand-gold shadow-[-8px_-8px_0_#372D02,8px_8px_0_#372D02] hover:-translate-1 hover:bg-widget-hover transition-transform duration-50 ease-in-out">
          <h2 class="text-white text-xl md:text-5xl pb-0.5 md:pb-2">{{ link.text }}<span
              class="text-brand-gold">.</span></h2>
          <h3 class="text-faded">({{ link.alias }})</h3>
        </RouterLink>
      </nav>
      <button>
        x
      </button>
    </menu>
  </div>
</template>