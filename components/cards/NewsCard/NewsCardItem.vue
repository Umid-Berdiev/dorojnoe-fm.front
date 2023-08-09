<script setup lang="ts">
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
      <img
        srcset="
          @/assets/images/news_cover_photo_1.png 1x,
          @/assets/images/news_cover_photo_1.png 2x
        "
      />
      <button
        class="absolute left-4 bottom-4 bg-black rounded-3xl text-white px-2 py-1.5 text-xs lg:text-sm cursor-pointer"
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
      @apply text-lg font-medium leading-6 font-roboto-condensed;
    }

    img {
      width: -webkit-fill-available;
    }
  }
</style>
