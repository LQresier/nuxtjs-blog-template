<template>
  <div
    class="group border border-gray-200 dark:border-gray-700 rounded-md my-4"
  >
    <div
      v-if="showFileName || (showLanguageLogo && language != 'text')"
      class="flex justify-between items-center py-1 px-2"
    >
      <div class="flex items-center">
        <Icon
          v-if="showLanguageLogo"
          :title="language"
          :name="languageIcon"
          class="mr-1 w-6 h-6"
        />
        <span
          v-if="showFileName"
          class="text-sm text-foreground dark:text-foreground-dark"
          >{{ filename }}</span
        >
      </div>
      <button
        v-if="showCopyBtn"
        @click="copyCode"
        class="opacity-0 group-hover:lg:opacity-100 w-6 h-6 px-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md transition-colors"
        :title="copied ? '已复制' : '复制代码'"
      >
        <Icon
          :name="copied ? 'lucide:copy-check' : 'lucide:copy'"
          class="text-gray-500 dark:text-gray-400"
        />
      </button>
    </div>
    <pre
      :class="[
        $props.class,
        filename ? 'rounded-t-none' : '',
        'bg-gray-100 dark:bg-gray-900 my-0! border-t border-gray-200 dark:border-gray-700',
      ]"
    ><slot /></pre>
  </div>
</template>

<script setup lang="ts">
import { isEmpty } from "@/utils/stringUtil";

const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
});

// 语言图标
const languageIcon = computed(() => {
  return `vscode-icons:file-type-${props.language}`;
});

// 是否展示复制按钮
const showCopyBtn = computed(() => {
  if (isEmpty(props.code)) {
    return false;
  }
  if (!props.meta) {
    return true;
  }
  const metaArr = props.meta.split(",");
  return !metaArr.includes("disableCopyBtn");
});

// 是否展示文件名
const showFileName = computed(() => {
  if (isEmpty(props.filename)) {
    return false;
  }
  if (!props.meta) {
    return true;
  }
  const metaArr = props.meta.split(",");
  return !metaArr.includes("disableFileName");
});

// 是否展示语言图标
const showLanguageLogo = computed(() => {
  if (isEmpty(props.language)) {
    return false;
  }
  if (!props.meta) {
    return true;
  }
  const metaArr = props.meta.split(",");
  return !metaArr.includes("disableLanguageLogo");
});

const copied = ref(false);

const copyCode = async () => {
  if (props.code) {
    try {
      await navigator.clipboard.writeText(props.code || "");
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2000);
    } catch (err) {
      console.error("copy code error:", err);
    }
  }
};
</script>

<style scoped></style>
