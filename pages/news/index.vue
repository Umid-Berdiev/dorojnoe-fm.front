<script setup lang="ts">
  import { fetchNewsCategories, fetchNews } from "@/utils/api/news";
  import { Navigation } from "swiper/modules";

  const modules = [Navigation];
  const selectedNewsCategoryID = ref<number | null>(null);
  const { data: newsCategories } = await fetchNewsCategories();
  const { data: news } = await fetchNews();
</script>

<template>
  <div class="default-container">
    <TheMobileBreadcrumb />
    <TheBreadcrumb :path="['Новости']" />
    <PrimaryHeading underlined>Новости</PrimaryHeading>
    <!-- news categories -->
    <div class="hidden lg:flex lg:flex-wrap lg:gap-x-3 lg:gap-y-4 lg:mb-12">
      <RadioButton
        v-model="selectedNewsCategoryID"
        class="bg-white"
        :id="0"
        name="category"
        :value="null"
      >
        Все
      </RadioButton>
      <template
        v-for="(item, itemIndex) in newsCategories?.data"
        :key="itemIndex"
      >
        <RadioButton
          v-model="selectedNewsCategoryID"
          class="bg-white"
          :id="item.id"
          name="category"
          :value="item.id"
        >
          {{ item.name }}
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
        <SwiperSlide>
          <RadioButton
            v-model="selectedNewsCategoryID"
            class="bg-white"
            :id="0"
            name="category"
            :value="null"
            label="Все"
          />
        </SwiperSlide>
        <SwiperSlide v-for="(item, itemIndex) in newsCategories?.data">
          <RadioButton
            v-model="selectedNewsCategoryID"
            class="bg-white"
            :id="item.id"
            name="category"
            :value="item.id"
            :label="item.name"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    <!-- news cards -->
    <div
      class="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-6 gap-y-10 mb-16 lg:mb-28"
    >
      <template v-for="(item, itemIndex) in news?.data">
        <NewsCardItem
          :class="[
            (itemIndex === 0 || itemIndex === 5 || itemIndex === 6) &&
              'lg:col-span-2',
          ]"
          :item="item"
        />
      </template>
    </div>
    <!-- news slider#1 -->
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
          <template v-for="(item, itemIndex) in news?.data">
            <NewsCardItem :item="item" />
          </template>
        </div>
        <PrimaryButtonWhite
          class="text-[#FE576F] justify-center p-4 border border-[#FE576F] rounded-xl font-bold w-full lg:w-auto"
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
    <InSocialsBlock />
  </div>
</template>
