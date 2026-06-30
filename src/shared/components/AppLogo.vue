<script setup lang="ts">
import { computed } from 'vue'

import { brandAssets, type LogoVariant } from '@/core/config/assets'

const props = withDefaults(
  defineProps<{
    variant?: LogoVariant
    alt?: string
    height?: number
  }>(),
  {
    variant: 'primary',
    alt: 'Web Blox',
    height: 32,
  },
)

const src = computed(() => brandAssets.logo[props.variant])
</script>

<template>
  <img :src="src" :alt="alt" :style="{ height: `${height}px` }" class="app-logo" />
</template>

<style scoped>
.app-logo {
  width: auto;
}
</style>
