<script setup lang="ts">
  import { getImageUrl } from "@/utils/helpers";

  interface NewsItemProps {
    title: string;
    body: string;
    image: string;
    date: string;
  }

  defineProps<{
    item: NewsItemProps;
  }>();
</script>

<template>
  <div class="news-card-item rounded-2xl">
    <NuxtLink to="#" class="relative">
      <img :srcset="`${item.image} 1x, ${item.image} 2x`" class="w-full" />
      <button
        class="absolute left-4 bottom-4 bg-black rounded-3xl text-white px-2 py-1.5 text-xs lg:text-sm cursor-pointer font-inter"
      >
        {{ item.title }}
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
      <NuxtLink to="/">
        <span class="news-body">
          {{ item.body }}
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

    img {
      width: -webkit-fill-available;
    }
  }
</style>
