<script setup lang="ts">
import { useData } from 'vitepress'

const { isDark } = useData()

function toggleAppearance() {
  isDark.value = !isDark.value
}
</script>

<template>
  <button aria-label="Color Mode" class="inline-block icon-button" @click="toggleAppearance">
    <template v-if="isDark">
      <div name="moon" class="w-5 h-5 i-carbon-moon" />
      <span class="sr-only">Dark Mode</span>
    </template>
    <template v-else>
      <div name="sun" class="w-5 h-5 i-carbon-sun" />
      <span class="sr-only">Light Mode</span>
    </template>
  </button>
</template>
