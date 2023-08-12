<script lang="ts" setup>
  import { ChevronLeftIcon } from "@heroicons/vue/20/solid";
</script>

<template>
  <nav class="flex lg:hidden gap-2 mb-6 items-center">
    <ChevronLeftIcon class="h-6 w-6" aria-hidden="true" />
    <NuxtLink to="/">
      <span class="back-link">
        <slot>Главная</slot>
      </span>
    </NuxtLink>
  </nav>
</template>

<style scoped lang="scss">
  .back-link {
    @apply text-black text-base;
  }
</style>
