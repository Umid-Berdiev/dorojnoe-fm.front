<script setup lang="ts">
  import { Navigation } from "swiper/modules";
  import {
    newsCategories,
    newsList,
    slider1Data,
    slider2Data,
  } from "@/utils/mockdata/news";

  const modules = [Navigation];
</script>

<template>
  <TheMobileBreadcrumb />
  <TheBreadcrumb :path="['Новости']" />
  <PrimaryHeading underlined>Новости</PrimaryHeading>
  <!-- news categories -->
  <div class="hidden lg:flex lg:flex-wrap lg:gap-x-3 lg:gap-y-4 lg:mb-12">
    <template v-for="(item, itemIndex) in newsCategories" :key="itemIndex">
      <RadioButton :id="item" name="category" :value="item">
        {{ item }}
      </RadioButton>
    </template>
  </div>
  <div class="mb-12 lg:hidden">
    <Swiper
      id="week-carousel"
      :spaceBetween="20"
      :slidesPerView="3"
      :breakpoints="{
        '768': {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        '1280': {
          slidesPerView: 7,
          spaceBetween: 40,
        },
      }"
    >
      <SwiperSlide v-for="(item, itemIndex) in newsCategories">
        <RadioButton :id="item" name="category" :value="item" />
      </SwiperSlide>
    </Swiper>
  </div>
  <!-- news cards -->
  <div
    class="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-6 gap-y-10 mb-16 lg:mb-28"
  >
    <template v-for="(item, itemIndex) in newsList">
      <NewsCardItem
        :class="[(itemIndex === 0 || itemIndex === 5) && 'lg:col-span-2']"
        :item="item"
      />
    </template>
  </div>
  <!-- news slider#1 -->
  <Swiper
    id="news-page-carousel1"
    :spaceBetween="16"
    :slidesPerView="1"
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
    :navigation="true"
    :modules="modules"
  >
    <template v-for="item in slider1Data">
      <SwiperSlide>
        <NewsCardItem :item="item" />
      </SwiperSlide>
    </template>
  </Swiper>
  <!-- news cards with advertising -->
  <div class="lg:hidden advertising-mobile-block mt-16">
    <img
      srcset="
        /assets/images/news_mobile_advertising.png 1x,
        /assets/images/news_mobile_advertising.png 2x
      "
      alt="Advertising"
      class="w-full"
    />
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 mt-16 lg:mt-28">
    <div class="col-span-2">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-10 mb-10 lg:mb-16"
      >
        <template v-for="(item, itemIndex) in newsList">
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
  <div class="flex flex-col lg:flex-row mt-16 lg:gap-10">
    <PrimaryHeading class="lg:max-w-[404px]"
      >Больше историй в наших социальных сетях</PrimaryHeading
    >
    <div class="flex gap-5 items-center lg:h-16">
      <RouterLink to="/news">
        <YoutubeShortsIcon />
      </RouterLink>
      <RouterLink to="/news">
        <ColoredYoutubeIcon class="w-10" />
      </RouterLink>
      <RouterLink to="/news">
        <VKIcon />
      </RouterLink>
      <RouterLink to="/news">
        <OKIcon />
      </RouterLink>
      <RouterLink to="/news">
        <TelegramIcon />
      </RouterLink>
    </div>
  </div>
  <div class="mt-10 lg:mt-12"></div>
  <!-- news slider#2 -->
  <Swiper
    id="news-page-carousel2"
    :spaceBetween="12"
    :slidesPerView="1"
    :breakpoints="{
      '768': {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      '1280': {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }"
    :navigation="true"
    :modules="modules"
  >
    <template v-for="item in slider2Data">
      <SwiperSlide>
        <img :srcset="`${item} 1x, ${item} 2x`" />
      </SwiperSlide>
    </template>
  </Swiper>
</template>
