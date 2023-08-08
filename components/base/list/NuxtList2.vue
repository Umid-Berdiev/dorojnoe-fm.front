<script setup lang="ts">
  defineProps<{
    data: any[];
  }>();
</script>

<template>
  <ul role="list" class="divide-y divide-[#DADBE2] mt-8">
    <template v-for="item in data">
      <NuxtList2Item :item="item" />
    </template>
  </ul>
</template>

<style scoped lang="scss">
  //
</style>
