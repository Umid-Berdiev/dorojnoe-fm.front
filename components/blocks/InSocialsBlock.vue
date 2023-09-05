<script setup lang="ts">
  import { slider2Data } from "@/utils/mockdata/news";
  import { Navigation } from "swiper/modules";

  const modules = [Navigation];
</script>

<template>
  <!-- news slider#2 -->
  <div class="flex flex-col lg:flex-row mt-16 lg:gap-10">
    <PrimaryHeading class="lg:max-w-[404px]">
      Больше историй в наших социальных сетях
    </PrimaryHeading>
    <div class="flex gap-5 items-center lg:h-16">
      <NuxtLink to="/news">
        <YoutubeShortsIcon />
      </NuxtLink>
      <NuxtLink to="/news">
        <ColoredYoutubeIcon class="w-10" />
      </NuxtLink>
      <NuxtLink to="/news" class="border rounded-lg">
        <VKIcon />
      </NuxtLink>
      <NuxtLink to="/news" class="border rounded-lg">
        <OKIcon />
      </NuxtLink>
      <NuxtLink to="/news" class="border rounded-lg">
        <TelegramIcon />
      </NuxtLink>
    </div>
  </div>
  <div class="mt-10 lg:mt-4">
    <Swiper
      id="socials-carousel"
      :spaceBetween="16"
      :slidesPerView="1.75"
      :breakpoints="{
        '768': {
          slidesPerView: 2.5,
          spaceBetween: 16,
        },
        '1280': {
          slidesPerView: 4.5,
          spaceBetween: 20,
        },
      }"
      :navigation="true"
      :modules="modules"
    >
      <template v-for="item in slider2Data">
        <SwiperSlide>
          <img :src="item" />
        </SwiperSlide>
      </template>
    </Swiper>
  </div>
</template>
