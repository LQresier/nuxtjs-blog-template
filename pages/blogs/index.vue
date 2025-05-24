<template>
  <div class="container mx-auto py-8">
    <TitleSpan>博客文章</TitleSpan>
    <BlogList :articles="articles" />
  </div>
</template>

<script setup>
const siteConfig = useSiteConfig();

const { data: articles } = await useAsyncData("articles", () => {
  return queryCollection("docs").order("date", "DESC").all();
});

useHead({
  title: "博客｜" + siteConfig.title,
  meta: [
    {
      name: "description",
      content: "博客文章列表",
    }
  ]
});
</script>
