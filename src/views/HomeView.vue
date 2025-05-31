<script setup lang="ts">
import HeroText from '@/assets/hero_text.svg?component';

</script>

<template>
  <main class="min-h-screen">
    <section
      class="pt-12 bg-[linear-gradient(to_top,rgba(0,0,0,1.0),rgba(0,0,0,0.0)),url(/bg-tile.png)] bg-center px-4">
      <img src="/logo_glow.png" class="mx-auto max-w-2/3 w-sm aspect-square">
      <div class="w-full flex justify-center items-center">
        <HeroText class="w-3/5 max-h-80" />
      </div>
      <h2 class="text-white text-2xl/normal md:text-5xl/normal px-8 pt-12 font-bold">
        Software Engineer.<br>
        Future Architect.<br>
        <span class="text-brand-gold font-bold">Optimist</span>.<br>
      </h2>
      <!-- <h2 class="text-white text-3xl/normal md:text-6xl/normal px-8 text-center pt-12">
        The Future Belongs to the Bold.
      </h2> -->
    </section>
    <div class="mt-18 relative hidden">
      <!-- TODO: Upgrade to fat divider -->
      <hr class="text-amber-300">
      <div class="z-5 absolute size-3 rotate-45 bg-black border-1 border-brand-gold -translate-1.5"></div>
      <div class="z-5 absolute size-3 rotate-45 bg-black border-1 border-brand-gold -translate-y-1.5 right-[-6px]">
      </div>
    </div>
    <section class="bg-[linear-gradient(to_bottom,rgba(0,0,0,1.0),rgba(0,0,0,0.0)),url(/bg-tile.png)] bg-center">
      <!-- TODO: Better copy wording - this is kinda meh. Also, hello to the person who has found my todo in the source code :) -->
      <!-- TODO: Also switch drop-shadow for a before-after pseudo style with border highlights -->
      <div class="w-4/5 bg-brand-gold/10 mx-auto border-x-1 border-brand-gold relative mt-48">
        <div class="z-5 absolute size-3 rotate-45 bg-black border-1 border-brand-gold -translate-1.5"></div>
        <div class="z-5 absolute size-3 rotate-45 bg-black border-1 border-brand-gold -translate-y-1.5 right-[-6px]">
        </div>
        <div class="py-24">
          <div class="border-brand-gold border-y-1 w-max py-5 mx-auto mb-16">
            <h1 class="text-4xl px-4 font-display font-bold">Dreams of a Modern <span
                class="text-brand-gold font-bold">Utopia</span>.</h1>
          </div>
          <div>
            <p>

            </p>
          </div>
          <div
            class="p-8 text-xl text-white max-w-1/2 mx-auto bg-widget border-amber-300 border-1 shadow-[-10px_-10px_0_#372D02,10px_10px_0_#372D02]">
            <p>Hello there! You've arrived in the online haven of George Yarnley.</p>
            <p>I try to keep this as a useful record of who I am, where I've been, what I'm up to, and how I'm doing it.
            </p>
            <p>Speaking of... Why not have an explore?</p>
          </div>
        </div>
      </div>
      <div>
        <p>
          I don't care for meaningless B2B SAAS or building another generic LLM Wrapper. I know that we've
          barely begun harnessing the potential of so much of the technology available to us and that there
          is so much deeply human value to be realised in exploiting that. There is a future available to
          us which prioritises the human, if we are only bold enough to build the tools to take it.
        </p>
      </div>
      <div>
        <h2>Why Me?</h2>
        <ul>
          <li>
            See Further - One of the most consistent pieces of positive feedback I recieve is on my perceptiveness.
            People notice that I consider problems in excrutiating detail, planning solutions for problems before they
            materialise rather than after.
          </li>
          <li>
            Always Ask Why - The most important word in the english language is why and I make sure to use it
            judiciously.
            A huge amount of effort can be wasted because we fail to examine our assumptions in enough detail. Instead,
            I aim to always ask why, establishing clear reasoning behind my decisionmaking.
          </li>
          <li>
            Sweat the Small Stuff - I took the writings of
            <a href="https://www.goodreads.com/book/show/18170143-an-astronaut-s-guide-to-life-on-earth">Chris
              Hadfield</a>
            to heart. Obsessing over small details allows me to catch things others don't, prevent issues others
            wouldn't and find advantages others miss.
          </li>
        </ul>
      </div>
      <div>
        <h2>Creative Inspirations</h2>
        <p>Books, Media, Articles and People who inspire me</p>
      </div>
      <div>
        <h2>Worldly Interests / Inspirations</h2>
        <p>Highlighting some of the projects in the world I think are deeply interesting</p>
        <ul>
          <li>Esmerelda</li>
        </ul>
      </div>
    </section>
  </main>
</template>
