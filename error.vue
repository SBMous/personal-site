<template>
  <NuxtRouteAnnouncer />
  <main class="flex h-screen w-screen flex-col items-center justify-center gap-2">
    <h1 class="font-display text-6xl font-bold">Whoops...</h1>
    <h2>Looks like I didn't make that page yet.</h2>
    <RouterLink
      class="bg-widget border-brand-gold hover:bg-widget-hover mt-4 border-1 px-4 py-2"
      to="/"
      >Take Me Home
    </RouterLink>
  </main>
</template>
