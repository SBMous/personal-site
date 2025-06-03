<script setup lang="ts">
import DoubleSideTimeline from '~/components/DoubleSidedTimeline.vue'
import OneSideTimeline from '~/components/OneSidedTimeline.vue'

const deviceType = useDevice()
</script>

<template>
  <main>
    <div
      class="flex justify-center bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.0)_40%,rgba(0,0,0,1.0)_100%),url(/bg-tile.png)] bg-center pt-40 pb-12 sm:pb-16"
    >
      <h1 class="font-display text-4xl font-bold sm:text-6xl">A Brief History</h1>
    </div>
    <section class="mx-auto max-w-5xl px-12">
      <OneSideTimeline v-if="deviceType.isMobile" />
      <DoubleSideTimeline v-else />
    </section>
  </main>
</template>
