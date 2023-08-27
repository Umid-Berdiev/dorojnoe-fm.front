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
  const selectedWeekDay = ref("Понедельник");
</script>

<template>
  <div class="default-container">
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
          slidesPerView: 'auto',
          spaceBetween: 40,
        },
      }"
    >
      <SwiperSlide v-for="day in week">
        <RadioButton
          v-model="selectedWeekDay"
          :id="day"
          class="bg-white"
          name="day"
          :label="day"
          :value="day"
        />
      </SwiperSlide>
    </Swiper>
    <Broadcasts />
    <NewsCard />
  </div>
</template>

<style scoped lang="scss">
  //
</style>
