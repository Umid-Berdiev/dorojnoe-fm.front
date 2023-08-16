<script lang="ts" setup>
  import PlayStoreIcon from "@/components/icons/PlayStoreIcon.vue";
  import AppleStoreIcon from "@/components/icons/AppleStoreIcon.vue";
  import MiStoreIcon from "@/components/icons/MiStoreIcon.vue";
  import VKIcon from "@/components/icons/socials/VKIcon.vue";
  import OKIcon from "@/components/icons/socials/OKIcon.vue";
  import TelegramIcon from "@/components/icons/socials/TelegramIcon.vue";
  import YoutubeIcon from "@/components/icons/socials/YoutubeIcon.vue";
</script>

<template>
  <section class="lg:ml-[280px] w-auto bottom-0 bg-inherit mt-20 lg:mt-28">
    <div class="px-3 py-4 lg:px-8 lg:py-4 bg-[#eaeaef]">
      <Swiper
        id="carousel"
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
        <SwiperSlide>
          <img
            srcset="
              @/assets/images/Group_1780.svg 1x,
              @/assets/images/Group_1780.svg 2x
            "
            alt="Group_1780"
            class="w-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            srcset="
              @/assets/images/Group_1775.svg 1x,
              @/assets/images/Group_1775.svg 2x
            "
            alt="Group_1775"
            class="w-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            srcset="
              @/assets/images/Group_1772.svg 1x,
              @/assets/images/Group_1772.svg 2x
            "
            alt="Group_1772"
            class="w-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            srcset="
              @/assets/images/Group_1779.svg 1x,
              @/assets/images/Group_1779.svg 2x
            "
            alt="Group_1779"
            class="w-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            srcset="
              @/assets/images/Group_1778.svg 1x,
              @/assets/images/Group_1778.svg 2x
            "
            alt="Group_1778"
            class="w-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            srcset="
              @/assets/images/Group_1774.svg 1x,
              @/assets/images/Group_1774.svg 2x
            "
            alt="Group_1774"
            class="w-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            srcset="
              @/assets/images/Group_1773.svg 1x,
              @/assets/images/Group_1773.svg 2x
            "
            alt="Group_1773"
            class="w-auto"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="flex mx-auto px-3 py-5 lg:px-8 lg:py-10">
      <div class="main-links grid grid-cols-2 md:grid-cols-3 lg:w-3/4 gap-y-2">
        <NuxtLink to="/">Артисты</NuxtLink>
        <NuxtLink to="/">Акции и события</NuxtLink>
        <NuxtLink to="/">Заказать песню</NuxtLink>
        <NuxtLink to="/">Радиостанция</NuxtLink>
        <NuxtLink to="/">Плейлист</NuxtLink>
        <NuxtLink to="/">Прямой эфир</NuxtLink>
        <NuxtLink to="/">Новости</NuxtLink>
        <NuxtLink to="/">Итоговый хит-парад 2022</NuxtLink>
        <NuxtLink to="/">Поиск по сайту</NuxtLink>
        <NuxtLink to="/">Программы эфира</NuxtLink>
        <NuxtLink to="/"> Фестиваль «Звезды дорожного радио» </NuxtLink>
      </div>
      <div class="stores">
        <div class="stores-items">
          <NuxtLink to="/">
            <PlayStoreIcon />
          </NuxtLink>
          <NuxtLink to="/">
            <AppleStoreIcon />
          </NuxtLink>
          <NuxtLink to="/">
            <MiStoreIcon />
          </NuxtLink>
        </div>
        <img
          srcset="@/assets/images/qr_code.png, @/assets/images/qr_code.png 2x"
          alt="QR code image"
          width="156"
          height="156"
        />
      </div>
    </div>
    <div class="frame56-wrapper px-3 pt-1 lg:px-8 lg:pt-3">
      <div class="frame56">
        <span>Звёзды «Дорожного радио» с утра пораньше</span>
        <span>Запаска</span>
        <span>Путешествие с удовольствием</span>
        <span>Танцы по-русски</span>
        <span>Музыкальное обозрение</span>
        <span>Посиделки на Дорожном радио</span>
        <span>Новости</span>
        <span>Дорожная хроника</span>
        <span>Общественный транспорт</span>
        <span>Негородская жизнь</span>
        <span>Семейный час</span>
        <span>Добрый вечер</span>
        <span>Вместе за безопасность</span>
        <span>Звёзды Дорожного радио. ТОП 10</span>
        <span>То время</span>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row p-3 lg:px-8 lg:pt-8">
      <div class="lg:basis-3/4">
        <span class="footer-last-text">
          Любое использование материалов допускается только с согласия редакции
          при наличии ссылки на ресурс. Онлайн-трансляция эфирного потока в сети
          интернет без согласования строго запрещена. Свидетельство о
          регистрации Эл № ФС77-61841. Выдано Роскомнадзором 18 мая 2015 года.
        </span>
      </div>
      <div class="stores-mobile mt-8">
        <NuxtLink to="/">
          <PlayStoreIcon />
        </NuxtLink>
        <NuxtLink to="/">
          <AppleStoreIcon />
        </NuxtLink>
        <NuxtLink to="/">
          <MiStoreIcon />
        </NuxtLink>
      </div>
      <div class="inline-flex lg:basis-1/4 mt-6 lg:mt-auto">
        <div class="socials lg:ml-auto">
          <VKIcon />
          <OKIcon />
          <TelegramIcon />
          <YoutubeIcon />
        </div>
      </div>
    </div>
    <div class="px-3 pt-1 pb-3 mt-2">
      <div class="blue-bird">
        <PlayMobile />
        <div class="flex flex-col">
          <span class="singer-fullname">Владимир Пресняков</span>
          <span class="song-title">Синяя птица</span>
        </div>
        <div class="p-3 ml-auto">
          <LinkIcon />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .radios {
    background-color: #eaeaef;
  }

  .main-links {
    @apply text-sm lg:text-base font-semibold lg:font-bold;
  }

  .stores {
    @apply hidden lg:inline-flex lg:gap-5 xl:gap-7 lg:w-1/4 justify-end;

    .stores-items {
      display: flex;
      height: 158px;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      gap: 7px;
    }
  }

  .frame56-wrapper {
    @apply inline-flex flex-col items-start;

    .frame56 {
      @apply flex items-start flex-wrap gap-2 lg:gap-x-6 lg:gap-y-4 text-xs lg:text-sm font-semibold;
      color: var(--main-grey, #a7a7a7);
    }
  }

  .footer-last-text {
    color: var(--main-grey, #a7a7a7);
    @apply text-sm font-medium;
  }

  .socials {
    @apply inline-flex items-start gap-2;
  }

  .stores-mobile {
    @apply inline-flex gap-4 lg:hidden;
  }

  .blue-bird {
    border-radius: 8px;
    background: #fff;
    box-shadow: 4px 4px 16px -4px rgba(0, 0, 0, 0.24);
    @apply lg:hidden flex items-center p-2;

    .singer-fullname {
      color: #9d9d9d;
      // font-family: "Inter";
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .song-title {
      color: #000;
      // font-family: "Inter";
      font-size: 16px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      letter-spacing: 0.4px;
    }
  }
</style>
