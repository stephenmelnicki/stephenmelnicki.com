<script setup lang="ts">
import { data } from '../home.data'
import SiteArticle from './SiteArticle.vue'
</script>

<template>
  <SiteArticle
    v-for="{ title, date, datetime, content, slug } in data.posts"
    :key="slug"
    :title="title"
    :date="date"
    :datetime="datetime"
    :content="content"
    :slug="slug"
  />
</template>
