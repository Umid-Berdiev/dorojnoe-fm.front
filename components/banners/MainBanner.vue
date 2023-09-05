<script setup lang="ts">
  // import { fetchBanners } from "@/utils/api/general";
  import { EffectCreative, Pagination } from "swiper/modules";

  const modules = [EffectCreative, Pagination];
  const banners1 = [
    "/assets/images/banners/Property1Variant1.png",
    "/assets/images/banners/Property1Variant2.png",
    "/assets/images/banners/Property1Variant3.png",
    "/assets/images/banners/Property1Variant4.png",
  ];
  const banners2 = [
    "/assets/images/banners/2x/Property1Variant1.png",
    "/assets/images/banners/2x/Property1Variant2.png",
    "/assets/images/banners/2x/Property1Variant3.png",
    "/assets/images/banners/2x/Property1Variant4.png",
  ];
  // const { data } = await fetchBanners();
</script>

<template>
  <div class="w-full">
    <Swiper
      id="main-banner-swiper"
      :pagination="true"
      :modules="modules"
      :slidesPerView="1"
      :loop="true"
      :effect="'creative'"
      :creativeEffect="{
        prev: {
          // shadow: true,
          translate: ['0%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide
        v-for="(banner, bannerIndex) in banners1"
        class="cursor-pointer"
      >
        <img :src="banner" class="rounded-3xl" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
