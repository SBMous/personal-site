<script setup lang="ts">
import { ref, type Ref } from 'vue'
import TimelineElement from './TimelineElement.vue'
import { events } from '~/utils/data/timeline'
// import RightTimelineElement from './RightTimelineElement.vue';
</script>

<template>
  <div class="grid grid-cols-[1fr_2px_1fr] gap-y-24">
    <!-- Spacer Element for first row. TODO: Adjust height to set first line offset -->
    <div class="col-span-1 col-start-1"></div>
    <!-- Centre Line occupies all remaining space -->
    <div
      class="bg-brand-gold col-span-1 col-start-2 mt-4"
      :style="{ gridRow: `span ${events.length + 1}` }"
    ></div>

    <!-- TODO: By switching to a row span of 3, and placing the title element
         and content crossing lines, it should be possible to have the 1st line
         align perfectly rather than overflowing -->
    <div v-for="(event, index) in events" :key="index" class="col-span-1 row-span-2">
      <TimelineElement
        :index="index"
        :title="event.title"
        :date="event.date"
        :content="event.content"
        :align="index % 2 === 1 ? 'right' : 'left'"
      />
    </div>
  </div>
  <div class="text-center">
    <!-- <div class="border-brand-gold border-2 size-3 inline-block"></div> -->
    <h2 class="py-1 pt-3 text-3xl leading-none font-bold">2001</h2>
    <p class="pt-1 text-xl">Hello, World.</p>
  </div>
  <div class="h-24"></div>
</template>
