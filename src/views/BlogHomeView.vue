<script setup lang="ts">
import { getPostMetas, getHumanDate } from '@/model/data/blog';




const posts = getPostMetas();
</script>

<template>
  <RouterView>
    <main>
      <div
        class="flex justify-center pt-40 pb-12 sm:pb-16 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.0)_40%,rgba(0,0,0,1.0)_100%),url(/bg-tile.png)] bg-center">
        <h1 class="text-4xl sm:text-6xl font-display font-bold">My Thoughts</h1>
      </div>
      <section class="grid grid-cols-1 max-w-2xl mx-auto gap-4">
        <RouterLink v-for="post in posts" :to="'/blog/' + post.slug"
          class="bg-widget px-8 py-4 border-brand-gold border-1 w-full">
          <div class="flex justify-between">
            <h2 class="font-display font-bold text-xl">{{ post.title }}</h2>
            <span class="text-faded text-sm">{{ getHumanDate(post.publishedAt) }}</span>
          </div>
          <p>{{ post.summary }}</p>
        </RouterLink>
      </section>
    </main>
  </RouterView>
</template>