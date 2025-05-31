<script setup lang="tsx">
import { ref } from 'vue'

const open = ref(false);
const hidden = ref(false);
setTimeout(() => open.value = true, 500)
setTimeout(() => open.value = false, 3500)

// Note - For opacity set duration 500, timeout 4000
setTimeout(() => hidden.value = true, 4200)

// TODO: Run once and then wipe out on finish
// setInterval(() => open.value = !open.value, 5000)
</script>


<template>
  <!-- TODO: Scaling is a little large on mobile, add a breakpoint to keep the text and brackets smaller at full expansion -->
  <!-- TODO: If we rescale the window as it loads, the overlay doesn't keep up because of the transition... -->
  <div
    class="z-10 bg-black fixed w-screen flex items-center justify-center flex-col gap-12 transition-all duration-800 ease-in-out will-change-transform"
    :class="hidden ? 'h-0 top-full' : 'h-screen top-0'">
    <div class="flex h-14 md:h-24 items-center">
      <!-- Left Bracket -->
      <div class="border-brand-gold transition-all duration-500 ease-in-out"
        :class="open ? 'h-full w-2 md:w-6 border-y-1 border-l-1' : 'h-0 border-y-0 border-l-0 w-0 delay-400'"></div>
      <!-- Content Animation -->
      <h1
        class="text-3xl/tight md:text-5xl/tight text-white overflow-hidden transition-all duration-500 ease-in-out whitespace-nowrap text-center font-display"
        :class="open ? 'opacity-100 delay-800 w-60 md:w-90' : 'opacity-0 w-0'">
        <span>Hi,</span> <span>I'm</span> George<span class="text-amber-300">.</span>
      </h1>
      <!-- Right Bracket -->
      <div class="border-brand-gold transition-all duration-500 ease-in-out"
        :class="open ? 'h-full w-2 md:w-6 border-y-1 border-r-1' : 'h-0 border-y-0 border-l-0 w-0 delay-400'"></div>
      <!-- :class="open ? 'bracket-grow' : 'border-y-0 border-l-0 delay-1000'"></div> -->
    </div>

    <!-- TODO: Fix Stuttery Animate out -->
    <p :class="open ? 'delay-1500 animate-pulse' : 'opacity-0'">
      Welcome...</p>
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