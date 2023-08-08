<script setup lang="ts">
  const props = defineProps<{
    data: any[];
  }>();
</script>

<template>
  <ul role="list" class="divide-y divide-gray-200 mt-9">
    <template v-for="item in data">
      <NuxtListItem :item="item" />
    </template>
  </ul>
</template>

<style scoped lang="scss">
  //
</style>
