<template>
  <div class="relative">
    <button
      class="cursor-pointer flex items-center justify-center w-8 h-8 transition-colors duration-200"
      @click.stop="toggleDropdown"
    >
      <!-- 浅色模式图标 -->
      <Icon
        v-if="colorMode.value === 'light'"
        :class="{
          'text-yellow-500': colorMode.preference === colorMode.value,
        }"
        name="lucide:sun"
        mode="svg"
        class="w-5 h-5"
      />
      <!-- 深色模式图标 -->
      <Icon
        v-else-if="colorMode.value === 'dark'"
        :class="{
          'text-blue-200': colorMode.preference === colorMode.value,
        }"
        name="lucide:moon-star"
        mode="svg"
        class="w-5 h-5"
      />
      <!-- 系统模式图标 -->
      <Icon v-else name="lucide:airplay" mode="svg" class="w-5 h-5" />
    </button>

    <div
      v-if="isOpen"
      class="theme-dropdown absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-background dark:bg-background-dark border border-gray-200 dark:border-gray-700 z-50"
    >
      <div class="py-1">
        <button
          v-for="theme in themes"
          :key="theme.value"
          class="cursor-pointer w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
          :class="{
            'bg-gray-100 dark:bg-gray-700':
              colorMode.preference === theme.value,
          }"
          @click="selectTheme(theme.value)"
        >
          <!-- 浅色模式图标 -->
          <Icon
            v-if="theme.value === 'light'"
            name="lucide:sun"
            mode="svg"
            class="w-4 h-4"
          />
          <!-- 深色模式图标 -->
          <Icon
            v-else-if="theme.value === 'dark'"
            name="lucide:moon-star"
            mode="svg"
            class="w-4 h-4"
          />
          <!-- 系统模式图标 -->
          <Icon v-else name="lucide:airplay" mode="svg" class="w-4 h-4" />
          <span>{{ theme.label }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

const colorMode = useColorMode();
const isOpen = ref(false);

const themes = [
  { value: "system", label: "跟随系统" },
  { value: "light", label: "明亮" },
  { value: "dark", label: "黑暗" },
];

const getThemeLabel = (value) => {
  return themes.find((theme) => theme.value === value)?.label || "跟随系统";
};

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectTheme = (theme) => {
  colorMode.preference = theme;
  isOpen.value = false;
};

onMounted(() => {
  document.addEventListener("click", (e) => {
    if (isOpen.value) {
      const target = e.target;
      const dropdown = document.querySelector(".theme-dropdown");
      const button = document.querySelector("button");
      if (dropdown && !dropdown.contains(target) && !button.contains(target)) {
        isOpen.value = false;
      }
    }
  });
});

onUnmounted(() => {
  document.removeEventListener("click", () => {});
});
</script>

<style scoped>
.mode-fade-enter-active,
.mode-fade-leave-active {
  transition: opacity 0.2s ease;
}

.mode-fade-enter-from,
.mode-fade-leave-to {
  opacity: 0;
}
</style>
