<script setup lang="ts">
const { index = 0, title, content, align = 'left' } = defineProps<{
  index: number,
  title: string,
  date?: string,
  content: string,
  align: 'left' | 'right',
}>();

const offset = `motion-delay-[${200 * index}ms]`
</script>

<template>
  <!-- Left Aligned Variant -->
  <div v-if="align === 'left'"
    class="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-2 motion-opacity-in-0 motion-duration-[2s]" :class="[offset]">
    <div class="col-start-1 col-span-1 flex items-center">
      <div class="bg-brand-gold h-[2px] w-10"></div>
      <div class="border-brand-gold border-2 size-3 rotate-45"></div>
    </div>
    <h1 class="font-nexa font-bold text-2xl col-start-2 col-span-1">{{ title }}</h1>
    <p class="col-start-2">{{ content }}</p>
  </div>

  <!-- Right Aligned Variant -->
  <div v-else
    class="grid grid-cols-[1fr_max-content] text-right gap-x-4 gap-y-2 motion-opacity-in-0 motion-duration-[2s]"
    :class="[offset]">
    <div class="col-start-2 col-span-1 row-start-1 row-span-1 flex items-center">
      <div class="border-brand-gold border-2 size-3 rotate-45"></div>
      <div class="bg-brand-gold h-[2px] w-10"></div>
    </div>
    <h1 class="font-nexa font-bold text-2xl col-start-1 col-span-1">{{ title }}</h1>
    <p class="col-start-1">{{ content }}</p>
  </div>
</template>