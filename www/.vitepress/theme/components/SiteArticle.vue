<script setup lang="ts">
interface Props {
  title: string
  date: string
  datetime: string
  content: string
  slug: string | undefined
};

defineProps<Props>()
</script>

<template>
  <article class="mb-4 py-8 border-b border-gray-200 dark:border-slate-200">
    <header>
      <hgroup>
        <h2 class="text-3xl font-bold dark:text-white">
          <a v-if="slug" :href="`/archive/${slug}`">{{ title }}</a>
          <span v-else>{{ title }}</span>
        </h2>
        <div>
          <time :datetime="datetime" class="text-muted">{{
            date
          }}</time>
        </div>
      </hgroup>
    </header>
    <section
      class="prose prose-slate dark:prose-invert"
      v-html="content"
    />
  </article>
</template>
