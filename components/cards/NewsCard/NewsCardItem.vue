<script setup lang="ts">
  import { NewsItemProps } from "utils/interfaces";

  defineProps<{
    item: NewsItemProps;
  }>();
</script>

<template>
  <div class="news-card-item">
    <NuxtLink :to="`/news/${item.id}`" class="relative">
      <img
        :srcset="`${item.image} 1x, ${item.image} 2x`"
        class="w-full rounded-2xl"
      />
      <button
        class="absolute left-4 bottom-4 bg-black rounded-3xl text-white px-2 py-1.5 text-xs lg:text-sm cursor-pointer font-inter"
      >
        {{ item.category }}
      </button>
    </NuxtLink>
    <div class="mt-4">
      <div class="flex flex-row items-start justify-start gap-[0.14rem]">
        <div
          class="relative leading-[0.86rem] text-sm text-main-grey font-semibold"
        >
          {{ item.date }}
        </div>
      </div>
      <NuxtLink :to="`/news/${item.id}`">
        <span class="news-body">
          {{ item.title }}
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .news-card-item {
    .news-body {
      @apply text-base lg:text-lg font-medium leading-6 font-roboto-condensed;
    }
  }
</style>
