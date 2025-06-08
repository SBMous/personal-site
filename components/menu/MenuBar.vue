<script setup lang="ts">
import { links } from '~/utils/data/routes'

const router = useRouter()

const path = computed(() => {
  if (router.currentRoute.value.name == 'index') {
    return { prefix: '', item: 'welcome' }
  }

  if (router.currentRoute.value.name != 'blog-id') {
    return { prefix: '', item: router.currentRoute.value.name }
  }

  return { prefix: 'blog/', item: router.currentRoute.value.path.split('/').slice(-1)[0] }
})

const deviceType = useDevice()
</script>

<template>
  <div class="absolute top-4 flex w-screen justify-center">
    <nav
      class="bg-widget/70 border-brand-gold font-text mx-4 flex w-full max-w-2xl items-center justify-between border-1 px-4 py-2 sm:px-8">
      <h2>
        <span class="text-faded font-text">george/{{ path.prefix }}</span><span class="text-brand-gold font-text">{{
          path.item }}</span>
      </h2>
      <ul v-if="!deviceType.isMobile"
        class="text-faded font-text flex max-w-1/2 flex-wrap justify-end gap-4 sm:max-w-full sm:gap-8">
        <li v-for="link in links">
          <NuxtLink class="hover:text-brand-gold/80 hover:underline" active-class="text-brand-gold"
            :class="path.prefix == 'blog/' && link.target == '/blog' ? 'text-brand-gold' : ''" :to="link.target">
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
