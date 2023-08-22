<script setup lang="ts">
  import { slider2Data } from "@/utils/mockdata/news";
  import { Navigation } from "swiper/modules";

  const modules = [Navigation];
</script>

<template>
  <!-- news slider#2 -->
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
      <RouterLink to="/news" class="border rounded-lg">
        <VKIcon />
      </RouterLink>
      <RouterLink to="/news" class="border rounded-lg">
        <OKIcon />
      </RouterLink>
      <RouterLink to="/news" class="border rounded-lg">
        <TelegramIcon />
      </RouterLink>
    </div>
  </div>
  <div class="mt-10 lg:mt-4">
    <Swiper
      id="news-page-carousel2"
      :spaceBetween="12"
      :slidesPerView="'auto'"
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
  </div>
</template>
