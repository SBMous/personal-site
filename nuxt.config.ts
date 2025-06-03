// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
    '@nuxtjs/device',
    '@nuxt/content',
  ],

  fonts: {
    providers: {
      // Disable Adobe & fontshare for mediocre licensing
      adobe: false,
      fontshare: false,
    },
  },

  app: {
    head: {
      title: 'George Yarnley',
      htmlAttrs: {
        lang: 'en',
      },
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
    // pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['~/assets/main.css'],
})
