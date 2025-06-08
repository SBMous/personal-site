<script setup lang="ts">
import { ref, type Ref } from 'vue'
import TimelineElement from './TimelineElement.vue'
import { events } from '~/utils/data/timeline'
</script>

<template>
  <div class="grid grid-cols-[2px_1fr] gap-y-8">
    <!-- Centre Line occupies all rows -->
    <div
      class="bg-brand-gold col-span-1 col-start-1 mt-4"
      :style="{ gridRow: `span ${events.length * 2}` }"
    ></div>

    <!-- All timeline elements now on the right side -->
    <div v-for="(event, index) in events" :key="index" class="col-span-1 col-start-3 row-span-2">
      <TimelineElement
        :index="index"
        :title="event.title"
        :date="event.date"
        :content="event.content"
        align="left"
      />
    </div>
  </div>
  <div class="text-left">
    <h2 class="py-1 pt-6 text-3xl leading-none font-bold">2001</h2>
    <p class="pt-1 text-xl">Hello, World.</p>
  </div>
  <div class="h-24"></div>
</template>
