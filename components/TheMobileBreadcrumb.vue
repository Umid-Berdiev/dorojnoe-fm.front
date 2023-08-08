<script lang="ts" setup>
  import { ChevronLeftIcon } from "@heroicons/vue/20/solid";
</script>

<template>
  <nav class="flex lg:hidden gap-2 mb-6 items-center">
    <ChevronLeftIcon class="h-6 w-6" aria-hidden="true" />
    <NuxtLink to="/">
      <span class="back-link">Радиостанция</span>
    </NuxtLink>
  </nav>
</template>

<style scoped lang="scss">
  .back-link {
    color: #000;
    // font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
</style>
