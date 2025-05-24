<template>
    <ul class="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-12">
      <li v-for="(article, index) in articles" :key="article._path">
        <NuxtLink :to="article.path" class="block">
          <h2 class="text-2xl font-bold hover:underline">
            {{ article.title }}
          </h2>
        </NuxtLink>
          <div>
            <div class="text-gray-400 py-3">
              {{ article.description }}
            </div>
          </div>
          <div>
            <time :datetime="article.date" class="text-sm text-slate-600">{{
              formatDateStr(article.date)
            }}</time>
          </div>
        </li>
    </ul>
</template>

<script setup>
const props = defineProps({
    articles: {
        type: Array,
        required: true,
    }
});
</script>