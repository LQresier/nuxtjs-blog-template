<template>
  <div class="flex items-center justify-center">
    <div class="text-center p-8">
      <h1 class="text-8xl font-bold py-10">404</h1>
      <p class="mb-8">
        <Icon name="ri:arrow-left-down-fill" mode="svg" class="inline-block w-6 h-6" />
        <Icon name="ri:arrow-up-fill" mode="svg" class="inline-block w-6 h-6" />
        <Icon name="ri:arrow-right-down-fill" mode="svg" class="inline-block w-6 h-6" />
        <Icon name="ri:arrow-right-fill" mode="svg" class="inline-block w-6 h-6" />
        <span>这里本没有路，走的人多了，也不会有路。</span>
    </p>
      <NuxtLink 
        to="/" 
        class="inline-block px-8 py-4 bg-background-dark text-foreground-dark dark:text-foreground dark:bg-background rounded-md transition-all duration-300 ease-in-out shadow-md hover:-translate-y-0.5 hover:shadow-lg"
      >
        返回首页
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>

<style>
</style>