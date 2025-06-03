<script setup lang="ts">
const {
  index = 0,
  title,
  content,
  align = 'left',
} = defineProps<{
  index: number
  title: string
  date?: string
  content: string
  align: 'left' | 'right'
}>()

const offset = `motion-delay-[${200 * index}ms]`
</script>

<template>
  <!-- Left Aligned Variant -->
  <div
    v-if="align === 'left'"
    class="motion-opacity-in-0 motion-duration-[2s] grid grid-cols-[max-content_1fr] gap-x-4 gap-y-2"
    :class="[offset]"
  >
    <div class="col-span-1 col-start-1 flex items-center">
      <div class="bg-brand-gold h-[2px] w-10"></div>
      <div class="border-brand-gold size-3 rotate-45 border-2"></div>
    </div>
    <h1 class="font-nexa col-span-1 col-start-2 text-2xl font-bold">{{ title }}</h1>
    <p class="col-start-2">{{ content }}</p>
  </div>

  <!-- Right Aligned Variant -->
  <div
    v-else
    class="motion-opacity-in-0 motion-duration-[2s] grid grid-cols-[1fr_max-content] gap-x-4 gap-y-2 text-right"
    :class="[offset]"
  >
    <div class="col-span-1 col-start-2 row-span-1 row-start-1 flex items-center">
      <div class="border-brand-gold size-3 rotate-45 border-2"></div>
      <div class="bg-brand-gold h-[2px] w-10"></div>
    </div>
    <h1 class="font-nexa col-span-1 col-start-1 text-2xl font-bold">{{ title }}</h1>
    <p class="col-start-1">{{ content }}</p>
  </div>
</template>
