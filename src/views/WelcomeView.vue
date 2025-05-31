<script setup lang="ts">
import HeroText from '@/assets/hero_text.svg?component';
import { DateTime } from 'luxon';
import { ref } from 'vue';

const startDate = DateTime.fromISO("2020-09-14")
const careerLength = ref(DateTime.now().diff(startDate).as('years').toFixed(9))

setInterval(() => {
  careerLength.value = DateTime.now().diff(startDate).as('years').toFixed(9)
}, 50);
</script>

<template>
  <main class="h-screen bg-black flex flex-col items-center">
    <!-- Hero Text -->
    <div
      class="w-full flex justify-center pt-[25vh] pb-24 items-end bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.0)_40%,rgba(0,0,0,1.0)_100%),url(/bg-tile.png)] bg-center">
      <div class="w-4/5 max-w-xl">
        <HeroText />
      </div>
    </div>

    <!-- Opening Statement -->
    <div class="w-4/5 max-w-lg">
      <div class="text-white text-base">
        <p class="mb-2">
          23 year old Software Engineer with <span class="font-bold">{{ careerLength }}</span> years of
          professional experience. I'm currently working for <a href="https://www.goldmansachs.com/"
            class="border-b-1 border-white hover:border-brand-gold hover:text-brand-gold">Goldman Sachs</a> in London.
        </p>
      </div>

      <!-- Key Links -->
      <div class="flex justify-center gap-12 pt-6">
        <a href="./resume.pdf" target="_blank" class="bg-widget border-1 border-brand-gold px-6 py-1">Resumé <i
            class="ri-download-2-line"></i></a>
        <ul class="flex gap-4 items-center text-xl">
          <li>
            <a href="https://www.linkedin.com/in/george-y-a2927b15a/">
              <i class="ri-linkedin-line"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/SBMous">
              <i class="ri-github-line"></i>
            </a>
          </li>
          <li>
            <a href="mailto:george@yarnley.com"><i class="ri-mail-send-line"></i></a>
          </li>
        </ul>
      </div>
    </div>



    <!-- Opening Statement
    <div class="w-4/5 max-w-lg">
      <div class="py-8 text-white text-base">
        <p class="mb-2">
          23 year old Software Engineer in London currently working for Goldman Sachs.
        </p>
        <p class="mb-2">
          Welcome to my online home! This is a record of me - who I am, what I want and what I'm
          doing. It's almost definitely outdated (Even if I updated it today).
        </p>
        <p>
          If you've arrived here, you're likely looking for a little more actual content. Go ahead, have a dig!
        </p>
      </div>

      <div class="text-center -top-4 relative">
        <!-- TODO: Switch to button which activates the menu
        <RouterLink to="/"
          class="inline-block px-12 py-4 border border-brand-gold text-white font-bold hover:bg-button-hover text-2xl transition-all bg-black shadow-[-4px_-4px_0_#372D02,4px_4px_0_#372D02] hover:-translate-1 hover:shadow-[-8px_-8px_0_#372D02,8px_8px_0_#372D02]">
          About Me.
        </RouterLink>
      </div>
    </div> -->
  </main>
</template>

<style scoped>
.chamfer-bottom {
  --notchSize: 30px;

  clip-path: polygon(0 0,
      100% 0,
      100% calc(100% - var(--notchSize)),
      calc(100% - var(--notchSize)) 100%,
      var(--notchSize) 100%,
      0 calc(100% - var(--notchSize)));
}
</style>
