<script setup lang="ts">
import { useData } from 'vitepress'
import BlogArticle from "../.vitepress/theme/components/BlogArticle.vue"

const { page } = useData()
</script>

<BlogArticle :post="page.post" />
