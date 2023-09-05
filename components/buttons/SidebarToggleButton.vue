<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      isOpen: boolean;
    }>(),
    {
      isOpen: false,
    }
  );
</script>

<template>
  <ChevronDoubleLeftIcon v-if="isOpen" />
  <ChevronDoubleLeftIcon v-else />
</template>
