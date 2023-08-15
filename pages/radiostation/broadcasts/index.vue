<script lang="ts" setup>
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
  <TheMobileBreadcrumb>Радиостанция</TheMobileBreadcrumb>
  <TheBreadcrumb :path="['Радиостанция', 'Сетка вещания']" />
  <PrimaryHeading underlined>Сетка вещания</PrimaryHeading>
  <Swiper
    id="week-carousel"
    :spaceBetween="12"
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
      <RadioButton :id="day" name="day" :label="day" :value="day" />
    </SwiperSlide>
  </Swiper>
  <Broadcasts />
  <NewsCard />
</template>

<style scoped lang="scss">
  //
</style>
