<template>
  <div class="space-y-1">
    <div v-for="item in links" :key="item.id">
      <NuxtLink
        :to="`#${item.id}`"
        :class="[
          getIndentClass(props.baseIndent),
          'block transition-colors',
          activeAnchor === item.id 
            ? 'text-primary font-medium' 
            : 'hover:text-primary'
        ]"
      >
        {{ item.text }}
      </NuxtLink>
      <TocNav
        v-if="item.children?.length > 0"
        :links="item.children"
        :base-indent="baseIndent + 1"
        :active-anchor="activeAnchor"
        class="mt-2"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  links: {
    type: Array,
    default: () => [],
  },
  baseIndent: {
    type: Number,
    default: 0,
  },
  activeAnchor: {
    type: String,
    default: ''
  }
});

const getIndentClass = (indent) => {
  const classes = {
    0: 'ml-0',
    1: 'ml-4',
    2: 'ml-8',
    3: 'ml-12',
    4: 'ml-16',
    5: 'ml-20'
  };
  return classes[indent] || classes[5];
};
</script>
