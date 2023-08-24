<template>
  <Swiper
    class="anons-swiper"
    :slidesPerView="1.5"
    :spaceBetween="12"
    :breakpoints="{
      '1280': {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    }"
  >
    <SwiperSlide>
      <img
        class="w-60 lg:w-auto"
        srcset="/assets/images/anons1_1.png"
        alt="anons image"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        class="w-60 lg:w-auto"
        srcset="/assets/images/anons1_2.png"
        alt="anons image"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        class="w-60 lg:w-auto"
        srcset="/assets/images/anons1_3.png"
        alt="anons image"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts"></script>

<style lang="scss">
  .anons-swiper {
    .swiper-slide {
      width: auto;
    }
  }
</style>
