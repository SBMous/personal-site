<script setup lang="ts">
import { getHumanDate } from '~/utils/dates'

const { data: posts } = await useAsyncData('blog', () =>
  queryCollection('blog').where('publishedAt', 'IS NOT NULL').order('publishedAt', 'DESC').all(),
)
</script>

<template>
  <main>
    <div
      class="flex justify-center bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.0)_40%,rgba(0,0,0,1.0)_100%),url(/bg-tile.png)] bg-center pt-40 pb-12 sm:pb-16">
      <h1 class="font-display text-4xl font-bold sm:text-6xl">My Thoughts</h1>
    </div>
    <section class="mx-auto grid max-w-2xl grid-cols-1 gap-4 px-8">
      <NuxtLink v-for="post in posts" :to="post.path" class="bg-widget border-brand-gold w-full border-1 px-4 py-4">
        <div class="flex justify-between flex-col md:flex-row md:gap-4 pb-2">
          <h2 class="font-display text-xl/tight font-bold flex-wrap">{{ post.title }}</h2>
          <span class="text-faded text-sm w-max whitespace-nowrap">
            {{ getHumanDate(post.publishedAt) }}
          </span>
        </div>
        <p>{{ post.description }}</p>
      </NuxtLink>
    </section>
  </main>
</template>
