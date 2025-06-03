<script setup lang="ts">
import { DateTime } from 'luxon'
import { getHumanDate } from '~/utils/dates'

const route = useRoute()
const { data: post } = await useAsyncData(route.path, () =>
  queryCollection('blog').path(route.path).first(),
)
</script>

<template>
  <main v-if="post">
    <div
      class="flex flex-col items-center justify-center bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.0)_40%,rgba(0,0,0,1.0)_100%),url(/bg-tile.png)] bg-center pt-40 pb-12 sm:pb-16"
    >
      <h1 class="font-display pb-6 text-4xl font-bold sm:text-6xl">{{ post.title }}</h1>
      <h2 class="text-faded text-sm sm:text-lg">Published {{ getHumanDate(post.publishedAt) }}</h2>
    </div>
    <section class="mx-auto max-w-2xl">
      <ContentRenderer :value="post" />
    </section>
  </main>
  <main v-else>
    <div
      class="flex flex-col items-center justify-center bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.0)_40%,rgba(0,0,0,1.0)_100%),url(/bg-tile.png)] bg-center pt-40 pb-12 sm:pb-16"
    >
      <h1 class="font-display pb-4 text-4xl font-bold sm:text-6xl">Post Not Found</h1>
      <h2 class="text-faded text-sm sm:text-lg">Whoops! Didn't write that one yet...</h2>
    </div>
    <div class="flex justify-center">
      <NuxtLink
        to="/blog"
        class="bg-widget border-brand-gold hover:bg-widget-hover border-1 px-6 py-4"
        >Go Back
      </NuxtLink>
    </div>
  </main>
</template>
