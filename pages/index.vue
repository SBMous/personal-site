<script setup lang="ts">
import HeroText from '~/assets/herotext.svg'
import { DateTime } from 'luxon'
import { ref } from 'vue'

// Age Ticker
const careerStartDate = DateTime.fromISO('2020-09-14')
const careerLength = ref(DateTime.now().diff(careerStartDate).as('years').toFixed(9))

onMounted(() => {
  setInterval(() => {
    careerLength.value = DateTime.now().diff(careerStartDate).as('years').toFixed(9)
  }, 50)
})
</script>

<template>
  <main class="flex h-screen flex-col items-center bg-black">
    <!-- Hero Text -->
    <div
      class="flex w-full items-end justify-center bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.0)_40%,rgba(0,0,0,1.0)_100%),url(/bg-tile.png)] bg-center pt-[25vh] pb-24"
    >
      <div class="w-4/5 max-w-xl">
        <HeroText :fontControlled="false" />
      </div>
    </div>

    <!-- Opening Statement -->
    <div class="w-4/5 max-w-lg">
      <div class="text-base text-white">
        <p class="mb-2">
          23 year old Software Engineer with <span class="font-bold">{{ careerLength }}</span> years
          of professional experience. I'm currently working for
          <a
            href="https://www.goldmansachs.com/"
            class="hover:border-brand-gold hover:text-brand-gold border-b-1 border-white"
            >Goldman Sachs</a
          >
          in London.
        </p>
      </div>

      <!-- Key Links -->
      <div class="flex justify-center gap-12 pt-6">
        <a
          href="./resume.pdf"
          target="_blank"
          class="bg-widget border-brand-gold border-1 px-6 py-1"
          >Resumé <i class="ri-download-2-line"></i
        ></a>
        <ul class="flex items-center gap-4 text-xl">
          <li>
            <a href="https://www.linkedin.com/in/george-y-a2927b15a/">
              <Icon name="ri:linkedin-line" />
            </a>
          </li>
          <li>
            <a href="https://github.com/SBMous">
              <Icon name="ri:github-line" />
            </a>
          </li>
          <li>
            <a href="mailto:george@yarnley.com">
              <Icon name="ri:mail-send-line" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
