<template>
  <div class="relative flex gap-12">
    <!-- 主内容区域 -->
    <div class="flex-1">
      <template v-if="blog">
        <div class="my-6">
          <h1 class="text-2xl">{{ blog.title }}</h1>
          <time :datetime="blog.date" class="text-sm text-slate-600">{{
            formatDateStr(blog.date)
            }}</time>
        </div>
        <ContentRenderer :value="blog" class="prose dark:prose-invert" />
      </template>
      <template v-else>
        <div class="empty-page">
          <h1>Page Not Found</h1>
          <p>Oops! The content you're looking for doesn't exist.</p>
          <NuxtLink to="/">Go back home</NuxtLink>
        </div>
      </template>
    </div>

    <!-- 右侧导航目录 -->
    <aside v-if="blog && blog.body.toc" class="max-w-48 hidden lg:block mt-10 text-gray-500 hover:text-foreground dark:hover:text-foreground-dark">
      <div class="sticky top-8 max-h-[calc(100vh-2rem)] overflow-y-auto">
        <TocNav :links="blog.body.toc.links" :active-anchor="activeAnchor" />
      </div>
    </aside>
  </div>
</template>

<script setup>
// import processor from '~/utils/mdParse'

const route = useRoute();
const { activeAnchor } = useActiveAnchor();
const { data: blog } = await useAsyncData(route.path, () => {
  console.log(queryCollection("docs").path(route.path).first());
  return queryCollection("docs").path(route.path).first();
});

// const html = ref('')
// if (blog.value && blog.value.rawbody) {
//   console.log(blog.value.rawbody)
//   html.value = await processor.process(blog.value.rawbody).then(result => result.toString())
// }

watchEffect(() => {
  if (blog.value) {
    useHead({
      title: blog.value.title,
      meta: [
        {
          name: "description",
          content: blog.value.description,
        }
      ]
    })
  }
})
</script>
