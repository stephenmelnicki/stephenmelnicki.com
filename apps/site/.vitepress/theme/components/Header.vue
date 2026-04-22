<script setup lang="ts">
import { useData } from 'vitepress'
import ThemeToggle from './ThemeToggle.vue'

const { site } = useData()
</script>

<template>
  <header class="border-b border-neutral-200 dark:border-neutral-700 pt-8 pb-6">
    <hgroup>
      <h1 class="text-2xl md:text-4xl font-extrabold">
        <a href="/">{{ site.title }}</a>
      </h1>
      <div class="flex justify-between items-center">
        <p class="mt-1 md:text-lg text-muted">
          {{ site.description }}
        </p>
        <div class="flex items-center gap-4">
          <ThemeToggle />
          <a
            class="icon-button i-carbon-logo-github" aria-label="github"
            href="https://github.com/stephenmelnicki/stephenmelnicki.com" target="_blank"
          >
            <span class="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </hgroup>
  </header>
</template>
