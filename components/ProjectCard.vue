<script setup lang="ts">
import type { Project } from '~/utils/data/types'

const { project } = defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="bg-widget border-brand-gold mx-auto max-w-lg border-1 px-6 py-4">
    <h2 class="font-display mb-2 text-xl font-bold">{{ project.name }}</h2>
    <div class="flex w-full justify-between">
      <!-- Project Tags -->
      <div class="mb-4 flex gap-2">
        <span
          v-for="tag in project.tags"
          class="bg-brand-gold h-min rounded-lg px-4 py-1 text-xs font-bold text-black"
        >
          <i v-if="tag.icon" :class="tag.icon"></i> {{ tag.content }}
        </span>
      </div>
      <!-- Project Links -->
      <div class="flex gap-3 text-lg">
        <a v-for="link in project.links" :href="link.target">
          <Icon :name="link.icon" />
        </a>
      </div>
    </div>
    <p class="text-xs">
      {{ project.content }}
    </p>
  </div>
</template>
