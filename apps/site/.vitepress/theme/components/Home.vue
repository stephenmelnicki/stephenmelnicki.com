<script setup lang="ts">
import { data } from '../posts.data'
import Article from './Article.vue'
</script>

<template>
  <Article v-for="post in data.posts" :key="post.slug" :post="post" />
</template>
