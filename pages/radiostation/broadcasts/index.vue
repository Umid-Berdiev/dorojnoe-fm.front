<script lang="ts" setup>
  import PrimaryHeading from "@/components/headings/PrimaryHeading.vue";
  import NewsCard from "@/components/cards/NewsCard/index.vue";

  const week = ref([
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ]);
</script>

<template>
  <TheMobileBreadcrumb />
  <TheBreadcrumb :path="['Радиостанция', 'Сетка вещания']" />
  <div class="flex">
    <PrimaryHeading underlined>Сетка вещания</PrimaryHeading>
  </div>
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
    <SwiperSlide v-for="day in week">
      <RadioButton :id="day" name="day" :value="day" />
    </SwiperSlide>
  </Swiper>
  <Broadcasts />
  <NewsCard />
</template>

<style scoped lang="scss">
  //
</style>
