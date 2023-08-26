<script setup lang="ts">
  import { Pagination } from "swiper/modules";

  const modules = [Pagination];
  const slides = [
    {
      mainImage: "/assets/images/banners/Cover2.png",
      title: "Жёлтое такси",
      singer: "Юля Савичева",
    },
    {
      mainImage: "/assets/images/banners/Cover1.png",
      title: "Дочка-мама",
      singer: "Слава",
    },
    {
      mainImage: "/assets/images/banners/Cover3.png",
      title: "Белый снег",
      singer: "Стас Пьеха",
    },
  ];
</script>

<template>
  <div class="w-full">
    <Swiper
      id="secondary-banner-swiper"
      class="my-auto"
      :slidesPerView="'auto'"
      :centeredSlides="true"
      :spaceBetween="32"
      :slideToClickedSlide="true"
    >
      <SwiperSlide v-for="slide in slides" class="cursor-pointer">
        <img :srcset="`${slide.mainImage}`" alt="slide image" />
        <p class="slide-title">{{ slide.title }}</p>
        <p class="slide-singer">{{ slide.singer }}</p>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="scss">
  .slide-title {
    @apply mt-3 overflow-hidden text-white text-ellipsis whitespace-nowrap font-montserrat text-base font-bold leading-5;
  }

  .slide-singer {
    @apply overflow-hidden text-white text-ellipsis whitespace-nowrap font-inter text-sm font-semibold;
  }
</style>
