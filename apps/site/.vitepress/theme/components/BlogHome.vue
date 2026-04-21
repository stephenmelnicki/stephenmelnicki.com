<script setup lang="ts">
import { data } from '../posts.data'
import BlogArticle from './BlogArticle.vue'
</script>

<template>
  <BlogArticle v-for="post in data.posts" :key="post.slug" :post="post" />
</template>
