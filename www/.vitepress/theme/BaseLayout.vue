<script setup lang="ts">
import { Content, useData } from 'vitepress'
import NotFound from './components/NotFound.vue'
import SiteHome from './components/SiteHome.vue'

const { page, frontmatter, site } = useData()
</script>

<template>
  <div class="antialiased dark:bg-slate-900 min-h-screen">
    <a href="#content" class="sr-only">Skip to content</a>
    <header class="container">
      <nav
        class="py-6 flex justify-between items-center border-b border-gray-200 dark:border-slate-200"
      >
        <hgroup>
          <h1 class="text-4xl leading-9 font-extrabold dark:text-white">
            <a href="/">{{ site.title }}</a>
          </h1>
          <p class="mt-1 text-lg leading-8 text-muted">
            {{ site.description }}
          </p>
        </hgroup>
      </nav>
    </header>
    <main id="content" class="container">
      <SiteHome v-if="frontmatter.index" />
      <NotFound v-else-if="page.isNotFound" />
      <Content v-else />
    </main>
    <footer class="container">
      <p class="text-sm text-muted">
        &copy; {{ new Date().getFullYear() }} Stephen Melnicki. All rights
        reserved.
      </p>
    </footer>
  </div>
</template>
