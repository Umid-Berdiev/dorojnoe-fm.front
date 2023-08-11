<script setup lang="ts">
  import { Navigation } from "swiper/modules";
  import { getImageUrl } from "@/utils/helpers";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";

  const modules = [Navigation];
  const newsCategories = ref([
    "Все",
    "Городские",
    "Мировые",
    "Российские",
    "Дорожные",
    "Музыкальные",
    "Дорожная хроника",
    "Музыкальное обозрение",
    "Общественный транспорт",
    "То время",
  ]);

  const data = ref([
    {
      title: "Путешествие с удовольствием",
      body: 'Экскурсионные маршруты в Перми. Перелёты на гидросамолётах в Таиланде. "Сковородоблинные" бегуны в Тюменской области',
      date: "Вчера в 9:00",
      image: "/assets/images/news_cover_photo_1.png",
    },
    {
      title: "Путешествие с удовольствием",
      body: 'Экскурсионные маршруты в Перми. Перелёты на гидросамолётах в Таиланде. "Сковородоблинные" бегуны в Тюменской области',
      date: "Вчера в 9:00",
      image: "/assets/images/news_cover_photo_2.png",
    },
    {
      title: "Путешествие с удовольствием",
      body: 'Экскурсионные маршруты в Перми. Перелёты на гидросамолётах в Таиланде. "Сковородоблинные" бегуны в Тюменской области',
      date: "Вчера в 9:00",
      image: "/assets/images/news_cover_photo_3.png",
    },
    {
      title: "Путешествие с удовольствием",
      body: 'Экскурсионные маршруты в Перми. Перелёты на гидросамолётах в Таиланде. "Сковородоблинные" бегуны в Тюменской области',
      date: "Вчера в 9:00",
      image: "/assets/images/news_cover_photo_2.png",
    },
    {
      title: "Путешествие с удовольствием",
      body: 'Экскурсионные маршруты в Перми. Перелёты на гидросамолётах в Таиланде. "Сковородоблинные" бегуны в Тюменской области',
      date: "Вчера в 9:00",
      image: "/assets/images/news_cover_photo_1.png",
    },
    {
      title: "Путешествие с удовольствием",
      body: 'Экскурсионные маршруты в Перми. Перелёты на гидросамолётах в Таиланде. "Сковородоблинные" бегуны в Тюменской области',
      date: "Вчера в 9:00",
      image: "/assets/images/news_cover_photo_3.png",
    },
  ]);

  const slider1Data = ref([
    {
      title: "Путешествие с удовольствием",
      body: 'Экскурсионные маршруты в Перми. Перелёты на гидросамолётах в Таиланде. "Сковородоблинные" бегуны в Тюменской области',
      date: "Вчера в 9:00",
      image: "/assets/images/news_page_slider1.png",
    },
    {
      title: "Путешествие с удовольствием",
      body: 'Экскурсионные маршруты в Перми. Перелёты на гидросамолётах в Таиланде. "Сковородоблинные" бегуны в Тюменской области',
      date: "Вчера в 9:00",
      image: "/assets/images/news_page_slider2.png",
    },
    {
      title: "Путешествие с удовольствием",
      body: 'Экскурсионные маршруты в Перми. Перелёты на гидросамолётах в Таиланде. "Сковородоблинные" бегуны в Тюменской области',
      date: "Вчера в 9:00",
      image: "/assets/images/news_page_slider3.png",
    },
    {
      title: "Путешествие с удовольствием",
      body: 'Экскурсионные маршруты в Перми. Перелёты на гидросамолётах в Таиланде. "Сковородоблинные" бегуны в Тюменской области',
      date: "Вчера в 9:00",
      image: "/assets/images/news_page_slider2.png",
    },
    {
      title: "Путешествие с удовольствием",
      body: 'Экскурсионные маршруты в Перми. Перелёты на гидросамолётах в Таиланде. "Сковородоблинные" бегуны в Тюменской области',
      date: "Вчера в 9:00",
      image: "/assets/images/news_page_slider1.png",
    },
    {
      title: "Путешествие с удовольствием",
      body: 'Экскурсионные маршруты в Перми. Перелёты на гидросамолётах в Таиланде. "Сковородоблинные" бегуны в Тюменской области',
      date: "Вчера в 9:00",
      image: "/assets/images/news_page_slider3.png",
    },
  ]);
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
    <template v-for="(item, itemIndex) in data">
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
</template>
