<script setup lang="ts">
import { ref, type Ref } from 'vue'
import TimelineElement from './TimelineElement.vue';
import { events } from '@/model/data/timeline';
</script>

<template>
  <div class="grid grid-cols-[2px_1fr] gap-y-8">
    <!-- Centre Line occupies all rows -->
    <div class="col-start-1 col-span-1 bg-brand-gold mt-4" :style="{ gridRow: `span ${(events.length) * 2}` }">
    </div>

    <!-- All timeline elements now on the right side -->
    <div v-for="(event, index) in events" :key="index" class="row-span-2 col-start-3 col-span-1">
      <TimelineElement :index="index" :title="event.title" :date="event.date" :content="event.content" align="left" />
    </div>
  </div>
  <div class="text-left">
    <h2 class="pt-6 font-bold text-3xl py-1 leading-none">2001</h2>
    <p class="pt-1 text-xl">Hello, World.</p>
  </div>
  <div class="h-24"></div>
</template>