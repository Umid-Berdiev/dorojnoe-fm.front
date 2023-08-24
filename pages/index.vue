<script setup lang="ts">
  import { newsCategories } from "~/utils/mockdata/news";
  import { fetchNews } from "@/utils/api/news";
  import { Navigation } from "swiper/modules";
  import { top10 } from "~/utils/mockdata/homePage";

  const modules = [Navigation];
  const { data: news } = await fetchNews();
  const selectedOfTop10 = ref("Сколько нас таких красивых");
  // const { data: newsCategories } = await fetchNewsCategories();
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-x-6">
    <div class="lg:col-span-2 rounded-[1.25rem]">
      <MainBanner />
    </div>
    <div
      class="secondary-banner rounded-[1.25rem] flex flex-col pb-8 h-[21rem] lg:h-[23.75rem]"
    >
      <div class="flex h-full items-center">
        <SecondaryBanner />
      </div>
      <div class="flex justify-center">
        <button class="vote-top-10">Голосуйте за Топ 10</button>
      </div>
    </div>
  </div>
  <!-- anons -->
  <section class="mt-10">
    <AnonsSlider />
    <!-- <div class="hidden lg:grid grid-cols-3 gap-6">
      <img class="" srcset="/assets/images/anons1_1.png" alt="anons image" />
      <img class="" srcset="/assets/images/anons1_2.png" alt="anons image" />
      <img class="" srcset="/assets/images/anons1_3.png" alt="anons image" />
    </div> -->
  </section>
  <!-- broadcast programs -->
  <section class="mt-20">
    <div class="flex flex-col lg:flex-row">
      <div class="items-center lg:w-[200px] flex-none">
        <PrimaryHeading style="margin-bottom: 0"
          >Программы эфира</PrimaryHeading
        >
      </div>
      <!-- desktop version -->
      <div class="hidden lg:block flex-grow pl-8 border-l-2">
        <div class="flex gap-4 flex-wrap items-center">
          <template v-for="(item, itemIndex) in newsCategories">
            <button
              class="font-montserrat text-sm leading-3"
              :class="{ 'font-semibold': itemIndex === 0 }"
            >
              {{ item }}
            </button>
          </template>
        </div>
      </div>
      <!-- mobile version -->
      <div class="lg:hidden mt-5">
        <Swiper
          :slidesPerView="'auto'"
          :centeredSlides="true"
          :spaceBetween="32"
        >
          <SwiperSlide
            v-for="(item, itemIndex) in newsCategories"
            style="width: auto"
          >
            <button
              class="font-montserrat text-sm leading-3"
              :class="{ 'font-semibold': itemIndex === 0 }"
            >
              {{ item }}
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
  <InSocialsBlock />
  <!-- top10 -->
  <section class="mt-16 lg:mt-28">
    <div class="flex gap-8 lg:gap-12">
      <PrimaryHeading underlined>Новинки эфира</PrimaryHeading>
      <h1 class="font-roboto-condensed text-[1.5rem] uppercase">Топ 10</h1>
    </div>
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2 lg:mt-4">
      <!-- mobile version -->
      <div class="lg:hidden">
        <RadioButtonSlider :data="top10" v-model="selectedOfTop10" />
      </div>
      <div class="lg:flex-none">
        <div class="flex lg:flex-col gap-4 lg:gap-10 items-center">
          <img
            srcset="/assets/images/cover_top10.png"
            alt="cover_top10 image"
            class="cover-top10"
          />
          <div class="">
            <p class="song-title">Сколько нас таких красивых</p>
            <p class="singer-fullname">Ирина Круг, Тамара Кутидзе</p>
          </div>
        </div>
      </div>
      <div class="hidden lg:block flex-grow">
        <div class="flex flex-wrap gap-3">
          <template v-for="(item, itemIndex) in top10">
            <RadioButton
              v-model="selectedOfTop10"
              :value="item"
              class="bg-white"
            >
              {{ item }}
            </RadioButton>
          </template>
        </div>
      </div>
    </div>
  </section>
  <!-- news slider#1 -->
  <section class="mt-20 lg:mt-28">
    <Swiper
      id="news-page-carousel1"
      :spaceBetween="16"
      :slidesPerView="'auto'"
      :breakpoints="{
        '768': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '1280': {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      }"
      :freeMode="true"
      :navigation="true"
      :modules="modules"
    >
      <template v-for="item in news?.data">
        <SwiperSlide>
          <NewsCardItem :item="item" />
        </SwiperSlide>
      </template>
    </Swiper>
  </section>
  <!-- news block -->
  <section class="mt-24">
    <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 mt-16 lg:mt-28">
      <div class="col-span-2">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-10 mb-10 lg:mb-16"
        >
          <template v-for="(item, itemIndex) in news?.data">
            <NewsCardItem :item="item" />
          </template>
        </div>
        <PrimaryButtonWhite
          class="text-base text-[#FE576F] justify-center p-4 border border-[#FE576F] rounded-xl font-inter font-bold w-full lg:w-auto"
        >
          Смотреть ещё
        </PrimaryButtonWhite>
      </div>
      <div class="hidden lg:block advertising-block">
        <img
          srcset="/assets/images/BG.png 1x, /assets/images/BG.png 2x"
          alt="Advertising"
          class="w-full"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .secondary-banner {
    background: linear-gradient(180deg, #fc283f 0%, #fd576f 100%);

    .vote-top-10 {
      @apply inline-flex py-3 px-5 items-start rounded-3xl bg-white font-montserrat text-base font-bold;
    }
  }

  .cover-top10 {
    box-shadow: 0 1.5rem 1px -0.75rem #7686a3, 0 2.6rem 1px -1.25rem #d9ced0;
    @apply rounded-lg w-[8.125rem] lg:w-full;
  }

  .song-title {
    @apply overflow-hidden
    text-main-black
    text-ellipsis
    whitespace-nowrap
    font-roboto-condensed
    text-base
    font-medium
    leading-[1.125rem];
  }

  .singer-fullname {
    @apply overflow-hidden
    text-main-grey
    text-ellipsis
    whitespace-nowrap
    font-inter
    text-sm
    font-semibold
    leading-3;
  }
</style>
