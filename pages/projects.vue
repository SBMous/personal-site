<script setup lang="ts">
import ProjectCard from '~/components/ProjectCard.vue'
import { projects } from '~/utils/data/projects'
</script>

<template>
  <main>
    <div
      class="flex w-screen justify-center bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.0)_40%,rgba(0,0,0,1.0)_100%),url(/bg-tile.png)] bg-center pt-40 pb-6 sm:pb-12"
    >
      <h1 class="font-display w-max text-4xl font-bold sm:text-6xl">My Projects.</h1>
    </div>
    <section class="mx-auto grid w-4/5 max-w-2xl grid-cols-1 gap-6 pb-12 sm:grid-cols-2">
      <ProjectCard v-for="project in projects" :project="project" />
    </section>
  </main>
</template>
