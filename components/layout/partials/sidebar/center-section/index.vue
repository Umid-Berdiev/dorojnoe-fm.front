<script setup lang="ts">
  import { newsCategories } from "@/utils/mockdata/news";
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
          class="bg-main-bg-light"
          :id="item"
          name="category"
          :value="item"
        >
          {{ item }}
        </RadioButton>
      </template>
    </div>
    <!-- podcasts -->
    <PodcastBlock class="mt-16" />
    <button
      class="mt-7 rounded-43xl bg-main-bg-light py-2.5 px-4 font-inter text-base font-medium leading-[18px]"
    >
      Все
    </button>
  </div>
</template>

<style scoped lang="scss">
  .center-block {
    @apply flex-auto p-8;
  }
</style>
