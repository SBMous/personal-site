<script setup lang="ts">
import { ref } from 'vue';
import DoubleSideTimeline from '@/components/DoubleSideTimeline.vue';
import OneSideTimeline from '@/components/OneWayTimeline.vue'

let windowWidth = ref(window.innerWidth)
</script>

<template>
  <main>
    <div
      class="flex justify-center pt-40 pb-12 sm:pb-16 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.0)_40%,rgba(0,0,0,1.0)_100%),url(/bg-tile.png)] bg-center">
      <h1 class="text-4xl sm:text-6xl font-display font-bold">A Brief History</h1>
    </div>
    <section class="max-w-5xl mx-auto px-12">
      <OneSideTimeline v-if="windowWidth < 640" />
      <DoubleSideTimeline v-if="windowWidth >= 640" />
    </section>
  </main>
</template>
