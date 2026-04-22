<script setup lang="ts">
import { useData } from 'vitepress'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import NotFound from './components/NotFound.vue'

const { frontmatter, page } = useData()
</script>

<template>
  <div class="antialiased bg-white dark:bg-slate-900 text-neutral-900 dark:text-white min-h-screen overflow-hidden">
    <NotFound v-if="page.isNotFound" />
    <div v-else class="mx-auto px-4 lg:px-8 max-w-2xl">
      <a href="#content" class="sr-only">Skip to content</a>
      <Header />
      <main id="content" class="pt-4">
        <Home v-if="frontmatter.index" />
        <Content v-else />
      </main>
      <Footer />
    </div>
  </div>
</template>
