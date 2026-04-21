<script setup lang="ts">
import { useData } from 'vitepress'
import BlogFooter from './components/BlogFooter.vue'
import BlogHeader from './components/BlogHeader.vue'
import BlogHome from './components/BlogHome.vue'
import NotFound from './components/NotFound.vue'

const { frontmatter, page } = useData()
</script>

<template>
  <div class="antialiased bg-white dark:bg-slate-900 text-neutral-900 dark:text-white min-h-screen overflow-hidden">
    <NotFound v-if="page.isNotFound" />
    <div v-else class="mx-auto px-4 lg:px-8 max-w-3xl">
      <a href="#content" class="sr-only">Skip to content</a>
      <BlogHeader />
      <main id="content" class="pt-4">
        <BlogHome v-if="frontmatter.index" />
        <Content v-else />
      </main>
      <BlogFooter />
    </div>
  </div>
</template>
