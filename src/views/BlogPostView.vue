<script setup lang="ts">
import { getPostBySlug, getHumanDate } from '@/model/data/blog';
import { MDXProvider } from '@mdx-js/vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const slug = router.currentRoute.value.path.split('/').slice(-1)[0]
const post = getPostBySlug(slug)

const Content = post?.component({})
</script>

<template>
  <main>
    <div
      class="flex flex-col items-center justify-center pt-40 pb-12 sm:pb-16 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.0)_40%,rgba(0,0,0,1.0)_100%),url(/bg-tile.png)] bg-center">
      <h1 class="text-4xl sm:text-6xl font-display font-bold pb-6">{{ post?.title }}</h1>
      <h2 class="text-faded text-sm sm:text-lg">Published {{ getHumanDate(post?.publishedAt) }}</h2>
    </div>
    <section>
      <MDXProvider>
        <Content />
      </MDXProvider>
    </section>
  </main>
</template>
