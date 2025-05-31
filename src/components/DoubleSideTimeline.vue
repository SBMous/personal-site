<script setup lang="ts">
import { ref, type Ref } from 'vue'
import TimelineElement from './TimelineElement.vue';
import { events } from '@/model/data/timeline';
// import RightTimelineElement from './RightTimelineElement.vue';
</script>

<template>
  <div class="grid grid-cols-[1fr_2px_1fr] gap-y-24">
    <!-- Spacer Element for first row. TODO: Adjust height to set first line offset -->
    <div class="col-start-1 col-span-1"></div>
    <!-- Centre Line occupies all remaining space -->
    <div class="col-start-2 col-span-1 bg-brand-gold mt-4" :style="{ gridRow: `span ${events.length + 1}` }"></div>

    <!-- TODO: By switching to a row span of 3, and placing the title element
         and content crossing lines, it should be possible to have the 1st line
         align perfectly rather than overflowing -->
    <div v-for="(event, index) in events" :key="index" class="row-span-2 col-span-1">
      <TimelineElement :index="index" :title="event.title" :date="event.date" :content="event.content"
        :align="index % 2 === 1 ? 'right' : 'left'" />
    </div>
  </div>
  <div class="text-center">
    <!-- <div class="border-brand-gold border-2 size-3 inline-block"></div> -->
    <h2 class="pt-3 font-bold text-3xl py-1 leading-none">2001</h2>
    <p class="pt-1 text-xl">Hello, World.</p>
  </div>
  <div class="h-24"></div>
</template>
