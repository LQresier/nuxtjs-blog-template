<template>
  <header class="p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center h-full justify-center flex-1 sm:flex-none sm:justify-start">
        <NuxtLink v-if="siteConfig.logo" to="/" class="hover:no-underline">
          <img
            :src="siteConfig.logo"
            alt="Logo"
            class="w-14 h-14 rounded-full mr-1 shadow-sm hover:shadow-md transition-shadow duration-100"
          >
        </NuxtLink>

        <NuxtLink to="/" class="hover:no-underline">
          <h1 class="text-2xl font-bold transition-colors duration-100">
            {{ siteConfig.title }}
          </h1>
        </NuxtLink>
      </div>
      
      <!-- 汉堡菜单按钮 -->
      <button @click="toggleMenu" class="sm:hidden cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- 导航菜单 - 大屏幕 -->
      <nav class="hidden sm:flex space-x-4 items-center">
        <NuxtLink
          v-for="item in siteConfig.navItems"
          :key="item.path"
          :to="item.path"
          :class="['', isSelected(item.path) ? 'font-bold' : '']"
        >
          {{ item.name }}
        </NuxtLink>
        <div v-if="siteConfig.navItems?.length" class="h-4 w-[1px] bg-gray-300 dark:bg-gray-700"></div>
        <ThemeSwitch/>
      </nav>
    </div>

    <!-- 移动端下拉菜单 -->
    <div 
      class="sm:hidden absolute z-10 left-0 bg-background dark:bg-background-dark w-full pb-10 transform transition-all duration-300 ease-in-out origin-top"
      :class="[
        isMenuOpen 
          ? 'opacity-100 translate-y-0 scale-y-100' 
          : 'opacity-0 -translate-y-4 scale-y-0'
      ]"
    >
      <nav class="flex flex-col space-y-2 mt-4">
        <NuxtLink
          v-for="item in siteConfig.navItems"
          :key="item.path"
          :to="item.path"
          :class="['px-4 py-2 rounded hover:bg-primary hover:text-foreground', isSelected(item.path) ? 'font-bold bg-primary text-foreground' : '']"
          @click="isMenuOpen = false"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
const siteConfig = useSiteConfig();
const route = useRoute();

const isSelected = (path) => {
  if (path === "/") {
    return route.path === path;
  }
  return route.path.startsWith(path);
};

// 菜单状态
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// 监听路由变化，关闭菜单
watch(route, () => {
  isMenuOpen.value = false;
});
</script>