<script setup lang="ts">
import type { Project } from '@/model/types';

const { project } = defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="bg-widget border-1 border-brand-gold px-6 py-4 max-w-lg mx-auto">
    <h2 class="font-display font-bold text-xl mb-2">{{ project.name }}</h2>
    <div class="flex justify-between w-full">
      <!-- Project Tags -->
      <div class="flex gap-2 mb-4">
        <span v-for="tag in project.tags" class="bg-brand-gold py-1 px-4 rounded-lg h-min text-black text-xs font-bold">
          <i v-if="tag.icon" :class="tag.icon"></i> {{ tag.content }}
        </span>
      </div>
      <!-- Project Links -->
      <div class="flex gap-3 text-lg">
        <a v-for="link in project.links" :href="link.target"><i :class="link.icon"></i></a>
      </div>
    </div>
    <p class="text-xs">
      {{ project.content }}
    </p>
  </div>
</template>
