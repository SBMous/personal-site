<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import { projects } from '@/model/data/projects';

</script>

<template>
  <main>
    <div
      class="w-screen flex justify-center pt-40 pb-6 sm:pb-12 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.0)_40%,rgba(0,0,0,1.0)_100%),url(/bg-tile.png)] bg-center">
      <h1 class="w-max text-4xl sm:text-6xl font-display font-bold">My Projects.</h1>
    </div>
    <section class="max-w-2xl w-4/5 grid grid-cols-1 sm:grid-cols-2 mx-auto gap-6 pb-12">
      <ProjectCard v-for="project in projects" :project="project" />
    </section>
  </main>
</template>
