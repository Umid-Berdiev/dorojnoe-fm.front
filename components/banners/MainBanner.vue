<script setup lang="ts">
  import { fetchBanners } from "@/utils/api/general";
  import { Pagination } from "swiper/modules";

  const modules = [Pagination];
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
  const { data } = await fetchBanners();
</script>

<template>
  <div class="w-full">
    <Swiper
      id="main-banner-swiper"
      :pagination="true"
      :modules="modules"
      :slidesPerView="'auto'"
    >
      <SwiperSlide v-for="(banner, bannerIndex) in banners1">
        <img
          :srcset="`${banner} 1x, ${banners2[bannerIndex]} 2x`"
          class="w-auto"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
