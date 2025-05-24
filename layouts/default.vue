<template>
  <div :class="['min-h-screen flex flex-col mx-auto transition-all', isPostPage ? 'max-w-screen-lg' : 'max-w-screen-md']">
    <!-- 头部 -->
    <TheHeader />

    <!-- 主要内容 -->
    <main class="container flex-grow mx-auto p-4">
      <slot />
    </main>

    <!-- 底部 -->
    <footer class="p-4">
      <div class="container mx-auto text-center">
        <p>{{ siteConfig.footerText }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const siteConfig = useSiteConfig();
const route = useRoute();

// 判断是否为博客详情页
const isPostPage = computed(() => {
  return route.path.startsWith('/blogs/') && route.path !== '/blogs';
});
</script>

<style scoped></style>
