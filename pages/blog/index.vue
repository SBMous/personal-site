<script setup lang="ts">
import { DateTime } from 'luxon'
import { getHumanDate } from '~/utils/dates'

const { data: posts } = await useAsyncData('blog', () =>
  queryCollection('blog').order('publishedAt', 'DESC').all(),
)
</script>

<template>
  <main>
    <div
      class="flex justify-center bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.0)_40%,rgba(0,0,0,1.0)_100%),url(/bg-tile.png)] bg-center pt-40 pb-12 sm:pb-16"
    >
      <h1 class="font-display text-4xl font-bold sm:text-6xl">My Thoughts</h1>
    </div>
    <section class="mx-auto grid max-w-2xl grid-cols-1 gap-4">
      <NuxtLink
        v-for="post in posts"
        :to="post.path"
        class="bg-widget border-brand-gold w-full border-1 px-8 py-4"
      >
        <div class="flex justify-between">
          <h2 class="font-display text-xl font-bold">{{ post.title }}</h2>
          <span class="text-faded text-sm">{{ getHumanDate(post.publishedAt) }}</span>
        </div>
        <p>{{ post.description }}</p>
      </NuxtLink>
    </section>
  </main>
</template>
