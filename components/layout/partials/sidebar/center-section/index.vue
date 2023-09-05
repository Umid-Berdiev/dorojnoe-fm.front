<script setup lang="ts">
  import { newsCategories } from "@/utils/mockdata/news";

  const selectedCategory = ref("Все");
</script>

<template>
  <div class="center-block">
    <!-- advertising -->
    <div class="advertising-block">
      <img
        srcset="/assets/images/BG5.png 1x, /assets/images/BG5.png 2x"
        alt="Advertising image"
        class="w-full"
      />
    </div>
    <SecondaryHeading class="mt-8">Потоки</SecondaryHeading>
    <StreamBlock />
    <button
      class="mt-7 rounded-43xl bg-main-bg-light py-2.5 px-4 font-inter text-base font-medium leading-[18px]"
    >
      Плейлист
    </button>
    <SecondaryHeading class="mt-16">Подкасты</SecondaryHeading>
    <!-- news categories -->
    <div class="hidden lg:flex lg:flex-wrap lg:gap-3">
      <template v-for="(item, itemIndex) in newsCategories" :key="itemIndex">
        <RadioButton
          v-model="selectedCategory"
          :id="item"
          class="bg-main-bg-light"
          name="category"
          :value="item"
        >
          {{ item }}
        </RadioButton>
      </template>
    </div>
    <!-- podcasts -->
    <PodcastBlock class="mt-16" />
    <div class="mt-[50px]">
      <h2 class="font-roboto-condensed text-xl font-bold uppercase">Видео</h2>
      <div class="mt-8">
        <div class="grid grid-cols-2 gap-6">
          <img
            srcset="/assets/images/sidebar_video1.png"
            alt="sidebar video cover"
            class="w-full"
          />
          <img
            srcset="/assets/images/sidebar_video2.png"
            alt="sidebar video cover"
            class="w-full"
          />
        </div>
        <div class="grid grid-cols-3 gap-6 mt-7">
          <img
            srcset="/assets/images/sidebar_video3.png"
            alt="sidebar video cover"
            class="w-full"
          />
          <img
            srcset="/assets/images/sidebar_video4.png"
            alt="sidebar video cover"
            class="w-full"
          />
          <img
            srcset="/assets/images/sidebar_video5.png"
            alt="sidebar video cover"
            class="w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .center-block {
    @apply flex-auto lg:p-8 h-max;
  }
</style>
