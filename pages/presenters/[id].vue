<script setup lang="ts">
  import { Navigation } from "swiper/modules";

  const modules = [Navigation];

  const presenter = ref({
    id: 790,
    fullname: "Тимофей Гордеев",
    profession: "Павел Потапов",
    main_photo: "/assets/images/presenters_1.png",
    photos: [
      "/assets/images/presenter_id_cover2.png",
      "/assets/images/presenter_id_cover3.png",
    ],
  });
</script>

<template>
  <TheMobileBreadcrumb>Ведущие</TheMobileBreadcrumb>
  <TheBreadcrumb :path="['Ведущие', presenter.fullname]" />
  <div class="content">
    <div class="flex flex-col lg:flex-row gap-x-20 gap-y-6">
      <img
        :srcset="`${presenter.main_photo} 1x, ${presenter.main_photo} 2x`"
        alt="Presenter cover image"
        class="basis-1/2 w-full"
      />
      <div class="basis-1/2 inline-flex flex-col justify-between lg:py-4">
        <div class="flex justify-between items-baseline">
          <PrimaryHeading class="lg:text-3xl" style="margin-bottom: 0">
            {{ presenter.fullname }}
          </PrimaryHeading>
          <ShareIcon class="lg:hidden" />
        </div>
        <div class="font-semibold">
          <div class="flex justify-between">
            <p class="opacity-50">Год рождения:</p>
            <p>1976 год</p>
          </div>
          <div class="border border-firebrick w-full h-0 my-4 lg:my-7" />
          <div class="flex justify-between">
            <p class="opacity-50">Место рождения:</p>
            <p>Набережные Челны</p>
          </div>
        </div>
        <div class="flex">
          <PrimaryButtonWhite
            class="hidden lg:flex rounded-43xl py-2.5 px-4 w-auto"
          >
            <ShareIcon />
            <span>Поделиться</span>
          </PrimaryButtonWhite>
        </div>
      </div>
    </div>
    <div class="my-12">
      <PrimaryButtonWhite
        class="rounded-full p-2.5 justify-normal"
        style="align-items: start"
      >
        <img
          srcset="
            /assets/images/broadcast_details1.png 1x,
            /assets/images/broadcast_details1.png 2x
          "
          alt="Broadcast cover image"
          class="rounded-full w-[90px] h-[90px] lg:w-[116px] lg:h-[116px]"
        />
        <div class="inline-flex flex-col text-start pt-2 lg:pt-4 max-w-[200px]">
          <p class="text-xs uppercase text-main-grey">Ведущий</p>
          <p class="font-roboto-condensed font-bold text-lg lg:text-[18px]">
            Путешествие с удовольствием
          </p>
          <p class="text-sm text-main-grey lg:mt-2.5">14:30-14:45 (Пн-Пт)</p>
        </div>
      </PrimaryButtonWhite>
    </div>
    <div class="border border-firebrick w-full h-0" />
    <PrimaryHeading class="mt-12">Информация о ведущем</PrimaryHeading>
    <div class="text-base font-inter leading-6">
      <p>
        После окончания Камского Политехнического Института Гордеева сразу взяли
        работать на Камский Автомобильный Завод.
      </p>
      <p>
        Однажды друзья предложили поработать на радио в качестве ведущего. С тех
        пор Гордеев не мог представить свою жизнь без радио, хотя он и продолжал
        какое-то время работать инженером на КАМАЗе.
      </p>
      <p>
        Пробовал себя на совершенно разных радиостанциях. На одной из них
        работал генеральным продюсером.
      </p>
      <p>
        Вскоре Гордеева пригласили в Санкт-Петербург. С 2007 года Тимофей
        Гордеев работает на «Дорожном радио». Уже несколько лет радиоведущего
        можно слышать в московском эфире «Дорожки».
      </p>
    </div>
    <PrimaryHeading class="mt-12">Фото</PrimaryHeading>
    <div v-if="presenter.photos.length > 0">
      <!-- news slider#1 -->
      <Swiper
        id="presenter-page-carousel1"
        :spaceBetween="16"
        :slidesPerView="1"
        :breakpoints="{
          '768': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '1280': {
            slidesPerView: 1,
            spaceBetween: 32,
          },
        }"
        :navigation="true"
        :modules="modules"
      >
        <template v-for="photo in presenter.photos">
          <SwiperSlide>
            <img
              :srcset="`${photo} 1x, ${photo} 2x`"
              alt="Presenter next cover image"
            />
          </SwiperSlide>
        </template>
      </Swiper>
    </div>
    <NewsCard />
  </div>
</template>

<style scoped>
  /*  */
</style>
