<script setup lang="tsx">
import { ref } from 'vue'

const textOpen = ref(false)
const dropping = ref(false)

onMounted(() => {
  setTimeout(() => (textOpen.value = true), 500)
  setTimeout(() => (textOpen.value = false), 3500)

  // Note - For opacity set duration 500, timeout 4000
  setTimeout(() => (dropping.value = true), 4200)
})
</script>

<template>
  <!-- TODO: If we rescale the window as it loads, the overlay doesn't keep up because of the transition... -->
  <div
    class="fixed z-10 flex w-screen flex-col items-center justify-center gap-12 bg-black transition-all duration-800 ease-in-out will-change-transform"
    :class="dropping ? 'top-full h-0' : 'top-0 h-screen'"
  >
    <div class="flex h-14 items-center md:h-24">
      <!-- Left Bracket -->
      <div
        class="border-brand-gold transition-all duration-500 ease-in-out"
        :class="
          textOpen
            ? 'h-full w-2 border-y-1 border-l-1 md:w-6'
            : 'h-0 w-0 border-y-0 border-l-0 delay-400'
        "
      ></div>
      <!-- Content Animation -->
      <h1
        class="font-display overflow-hidden text-center text-3xl/tight whitespace-nowrap text-white transition-all duration-500 ease-in-out md:text-5xl/tight"
        :class="textOpen ? 'w-60 opacity-100 delay-800 md:w-90' : 'w-0 opacity-0'"
      >
        <span>Hi,</span> <span>I'm</span> George<span class="text-amber-300">.</span>
      </h1>
      <!-- Right Bracket -->
      <div
        class="border-brand-gold transition-all duration-500 ease-in-out"
        :class="
          textOpen
            ? 'h-full w-2 border-y-1 border-r-1 md:w-6'
            : 'h-0 w-0 border-y-0 border-l-0 delay-400'
        "
      ></div>
      <!-- :class="open ? 'bracket-grow' : 'border-y-0 border-l-0 delay-1000'"></div> -->
    </div>

    <!-- TODO: Fix Stuttery Animate out -->
    <p :class="textOpen ? 'animate-pulse delay-1500' : 'opacity-0'">Welcome...</p>
  </div>
</template>

<!-- TODO: Refine bracket anim to do height then width -->
<style lang="css" scoped>
.bracket-grow {
  animation: bracket-grow 500ms;
}

@keyframes bracket-grow {
  0% {
    height: 0;
    width: 0;
  }

  50% {
    height: 100%;
    border-block-style: var(--tw-border-style);
    border-block-width: 1px;
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }

  100% {
    width: calc(var(--spacing) * 8);
  }
}
</style>
