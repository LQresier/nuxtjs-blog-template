<template>
  <div>
    <h1 class="text-lg mt-4 mb-6 inline-block">{{ siteConfig.description }}</h1>
    <TitleSpan>最新文章</TitleSpan>
    <BlogList :articles="articles"></BlogList>
  </div>
</template>

<script setup>
const siteConfig = useSiteConfig();

const { data: articles } = await useAsyncData("articles", () => {
  return queryCollection("docs").order("date", "DESC").limit(6).all();
});
</script>

<style scoped>
/* 页面样式 */
</style>