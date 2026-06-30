<script setup lang="ts">
import { RouterView } from 'vue-router'

import MarketingHeader from '@/features/marketing/components/MarketingHeader.vue'
</script>

<template>
  <div class="marketing-layout">
    <MarketingHeader />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.marketing-layout {
  min-height: 100vh;
}
</style>
