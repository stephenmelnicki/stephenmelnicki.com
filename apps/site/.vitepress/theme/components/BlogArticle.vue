<script setup lang="ts">
import type { Post } from '../support/sanity'
import { useRoute } from 'vitepress'

interface Props {
  post: Post
}

const props = defineProps<Props>()

const path = useRoute().path
const isActivePage = path === `/archive/${props.post.slug}`
</script>

<template>
  <article class="py-4 mb-4 border-b border-neutral-200 dark:border-neutral-700 prose prose-neutral dark:prose-invert">
    <header>
      <hgroup class="not-prose">
        <h2 v-if="isActivePage" class="text-3xl font-bold dark:text-white not-prose">
          {{ post.title }}
        </h2>
        <h2 v-else class="text-3xl font-bold">
          <a :href="`/archive/${post.slug}`" class="hover:underline text-sky-700 dark:text-sky-500">{{ post.title }}</a>
        </h2>
        <div>
          <time :datetime="post.datetime" class="text-muted">{{ post.date }}</time>
        </div>
      </hgroup>
    </header>
    <section class="prose-a:no-underline prose-pre:bg-slate-50 dark:prose-pre:bg-slate-800" v-html="post.content" />
  </article>
</template>
