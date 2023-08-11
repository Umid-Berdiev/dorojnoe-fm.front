<script setup lang="ts">
  import { Navigation } from "swiper/modules";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";

  const modules = [Navigation];
</script>

<template>
  <TheMobileBreadcrumb />
  <TheBreadcrumb :path="['Радиостанция', 'Мобильное приложение']" />
  <PrimaryHeading class="max-w-[656px]">
    Скачивайте мобильное приложение «Дорожного радио» для iOS и Android!
  </PrimaryHeading>
  <div class="max-w-[656px] mt-2 lg:mt-0 mb-12">
    <div class="flex mb-8">
      <img
        srcset="
          @/assets/images/mobile_app1.png 1x,
          @/assets/images/mobile_app1.png 2x
        "
        alt="Mobile app first image"
        class="w-full rounded-[20px]"
      />
    </div>
    <div class="text-base text-gray2 leading-6">
      <div>
        Мы очень ценим вас, наши дорогие слушатели! Специально для вас мы
        разработали удобное мобильное приложение!
      </div>
      <br />
      <div>
        Теперь вы сможете не только слушать «Дорожное радио» в любое время и в
        любом месте, но и мгновенно определять названия понравившихся песен,
        следить за свежими новостями, зажигать под программу «Танцы по-русски»,
        быть в курсе всех событий любимой радиостанции, отслеживать самые
        любопытные материалы и шутки в социальных сетях, делиться ими с
        друзьями, а также покупать понравившиеся песни в iTunes Store прямо из
        приложения, и даже ставить будильник, чтобы всегда просыпаться в хорошем
        настроении под добрую и душевную музыку «Дорожного радио»!
      </div>
      <br />
      <div>
        Установите приложение прямо сейчас для iOS или для Android и погрузитесь
        в мир «Дорожного радио»!
      </div>
    </div>
    <div class="flex flex-col lg:flex-row gap-4 lg:gap-8 my-8">
      <PrimaryButtonWhite class="rounded-xl py-1 pr-4 pl-2">
        <PlayStoreIcon />
        <span class="text-lg font-inter font-medium">
          Скачать в Google Play
        </span>
      </PrimaryButtonWhite>
      <PrimaryButtonWhite class="rounded-xl py-1 pr-4 pl-2">
        <AppleStoreIcon />
        <span class="text-lg font-inter font-medium">
          Скачать в App Store
        </span>
      </PrimaryButtonWhite>
    </div>
    <div class="text-base text-gray2 leading-6">
      <div>
        «Дорожное радио» по количеству слушателей в день занимает второе место
        на территории Российской Федерации*. TNS Россия, Radio Index – Россия
        (города с населением 100 000 и более чел.), Апрель – Сентябрь 2016 г.,
        Daily Reach (Пн-Пт, 06ч-24ч) радиостанций среди населения 12 лет и
        старше. Метод измерения – телефонные интервью.
      </div>
    </div>
  </div>
  <Swiper
    id="mobile-app-carousel"
    :spaceBetween="20"
    :slidesPerView="1"
    :breakpoints="{
      '768': {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      '1280': {
        slidesPerView: 2,
        spaceBetween: 48,
      },
    }"
    :navigation="true"
    :modules="modules"
  >
    <SwiperSlide>
      <img
        srcset="
          @/assets/images/mobile_app_slider_1.png 1x,
          @/assets/images/mobile_app_slider_1.png 2x
        "
        alt="Mobile App Image"
        class="w-[400px]"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        srcset="
          @/assets/images/mobile_app_slider_2.png 1x,
          @/assets/images/mobile_app_slider_2.png 2x
        "
        alt="Mobile App Image"
        class="w-[400px]"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        srcset="
          @/assets/images/mobile_app_slider_1.png 1x,
          @/assets/images/mobile_app_slider_1.png 2x
        "
        alt="Mobile App Image"
        class="w-[400px]"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        srcset="
          @/assets/images/mobile_app_slider_2.png 1x,
          @/assets/images/mobile_app_slider_2.png 2x
        "
        alt="Mobile App Image"
        class="w-[400px]"
      />
    </SwiperSlide>
  </Swiper>
</template>
