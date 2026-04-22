<script setup lang="ts">
import { useData } from 'vitepress'
import Article from "../.vitepress/theme/components/Article.vue"

const { page } = useData()
</script>

<Article :post="page.post" />
