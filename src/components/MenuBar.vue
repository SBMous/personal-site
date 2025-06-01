<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

interface Link {
  target: string,
  text: string
}

const links: Link[] = [
  {
    target: "/",
    text: "home"
  },
  {
    target: "/history",
    text: "history"
  },
  {
    target: "/projects",
    text: "projects"
  },
  // {
  //   target: "/blog",
  //   text: "blog"
  // }
]

const path = computed(() => {
  if (router.currentRoute.value.name != "blogpost") {
    return { prefix: '', item: router.currentRoute.value.name }
  }

  return { prefix: 'blog/', item: router.currentRoute.value.path.split('/').slice(-1)[0] }
})
</script>

<template>
  <div class="absolute top-4 w-screen flex justify-center">
    <nav
      class="flex justify-between max-w-2xl w-full mx-4 bg-widget/70 px-4 sm:px-8 py-2 border-1 border-brand-gold font-text items-center">
      <h2>
        <span class="text-faded font-text">george/{{ path.prefix }}</span><span class="text-brand-gold font-text">{{
          path.item }}</span>
      </h2>
      <ul class="flex gap-4 sm:gap-8 text-faded font-text max-w-1/2 sm:max-w-full flex-wrap justify-end">
        <li v-for="link in links">
          <RouterLink class="hover:underline hover:text-brand-gold/80" active-class="text-brand-gold" :to="link.target">
            {{ link.text }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
