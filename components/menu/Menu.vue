<script setup lang="ts">
import MenuBar from './MenuBar.vue'
import MenuModal from './MenuModal.vue'

const deviceType = useDevice()
</script>

<template>
  <MenuModal v-if="!deviceType.isMobile" />
  <MenuBar v-else />
</template>
