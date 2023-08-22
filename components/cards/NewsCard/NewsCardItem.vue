<script setup lang="ts">
  import { NewsType } from "utils/interfaces";
  import { formatDate } from "@vueuse/core";

  defineProps<{
    item: NewsType;
  }>();
</script>

<template>
  <div class="news-card-item">
    <NuxtLink :to="`/news/${item.id}`" class="">
      <div class="relative">
        <img
          :srcset="`${item.mainImage?.disk_path?.image} 1x, ${item.mainImage?.disk_path?.image} 2x`"
          class="w-full rounded-2xl"
        />
        <button
          class="absolute left-4 bottom-4 bg-black rounded-3xl text-white px-2 py-1.5 text-xs lg:text-sm cursor-pointer font-inter"
        >
          {{ item.category?.name }}
        </button>
      </div>
    </NuxtLink>
    <div class="mt-4">
      <div class="flex flex-row items-start justify-start gap-[0.14rem]">
        <div
          class="relative leading-[0.86rem] text-sm text-main-grey font-semibold"
        >
          {{ formatDate(new Date(item.publishDate), "YYYY-MM-DD H:mm") }}
        </div>
      </div>
      <NuxtLink :to="`/news/${item.id}`">
        <span class="news-body">
          {{ item.name }}
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
