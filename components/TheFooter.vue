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
  <footer class="sm:ml-64 bottom-0 bg-inherit">
    <div class="radios flex w-full p-8 md:py-8 justify-between">
      <img src="@/assets/images/Group_1780.svg" alt="Group_1780" />
      <img src="@/assets/images/Group_1775.svg" alt="Group_1775" />
      <img src="@/assets/images/Group_1772.svg" alt="Group_1772" />
      <img src="@/assets/images/Group_1779.svg" alt="Group_1779" />
      <img src="@/assets/images/Group_1778.svg" alt="Group_1778" />
      <img src="@/assets/images/Group_1774.svg" alt="Group_1774" />
      <img src="@/assets/images/Group_1773.svg" alt="Group_1773" />
    </div>
    <div class="mx-auto p-8 md:py-8">
      <div class="flex flex-row">
        <div class="basis-1/4">
          <div class="main-links">
            <a class="text-base" href="">Артисты</a>
            <a class="text-base" href="">Радиостанция</a>
            <a class="text-base" href="">Новости</a>
            <a class="text-base" href="">Программы эфира</a>
          </div>
        </div>
        <div class="basis-1/4">
          <div class="main-links">
            <a class="text-base" href="">Акции и события</a>
            <a class="text-base" href="">Плейлист</a>
            <a class="text-base" href="">Итоговый хит-парад 2022</a>
            <a class="text-base" href="">
              Фестиваль «Звезды дорожного радио»
            </a>
          </div>
        </div>
        <div class="basis-1/4">
          <div class="main-links">
            <a href="" class="text-base">Заказать песню</a>
            <a href="" class="text-base">Прямой эфир</a>
            <a href="" class="text-base">Поиск по сайту</a>
          </div>
        </div>
        <div class="ml-auto">
          <div class="stores">
            <div class="stores-items">
              <a href="">
                <PlayStoreIcon />
              </a>
              <a href="">
                <AppleStoreIcon />
              </a>
              <a href="">
                <MiStoreIcon />
              </a>
            </div>
            <img src="@/assets/images/qr_code.png" alt="QR code image" />
          </div>
        </div>
      </div>
    </div>
    <div class="frame56-wrapper p-8">
      <div class="frame56">
        <span class="frame56-item"
          >Звёзды «Дорожного радио» с утра пораньше</span
        >
        <span class="frame56-item">Запаска</span>
        <span class="frame56-item">Путешествие с удовольствием</span>
        <span class="frame56-item">Танцы по-русски</span>
        <span class="frame56-item">Музыкальное обозрение</span>
        <span class="frame56-item">Посиделки на Дорожном радио</span>
        <span class="frame56-item">Новости</span>
        <span class="frame56-item">Дорожная хроника</span>
        <span class="frame56-item">Общественный транспорт</span>
        <span class="frame56-item">Негородская жизнь</span>
        <span class="frame56-item">Семейный час</span>
        <span class="frame56-item">Добрый вечер</span>
        <span class="frame56-item">Вместе за безопасность</span>
        <span class="frame56-item">Звёзды Дорожного радио. ТОП 10</span>
        <span class="frame56-item">То время</span>
      </div>
    </div>
    <div class="flex flex-row p-8">
      <div class="basis-3/4">
        <span class="footer-last-text">
          Любое использование материалов допускается только с согласия редакции
          при наличии ссылки на ресурс. Онлайн-трансляция эфирного потока в сети
          интернет без согласования строго запрещена. Свидетельство о
          регистрации Эл № ФС77-61841. Выдано Роскомнадзором 18 мая 2015 года.
        </span>
      </div>
      <div class="ml-auto">
        <div class="socials">
          <VKIcon />
          <OKIcon />
          <TelegramIcon />
          <YoutubeIcon />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.radios {
  background-color: #eaeaef;

  .main-links {
    display: flex;
    width: 160px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}

.stores {
  display: inline-flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 28px;

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
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;

  .frame56 {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1.5rem;

    .frame56-item {
      color: var(--main-grey, #a7a7a7);

      // /* Title/Very small */
      // font-family: Inter;
      // font-size: 12px;
      // font-style: normal;
      // font-weight: 600;
      // line-height: 12px; /* 100% */
    }
  }
}

.footer-last-text {
  color: var(--main-grey, #a7a7a7);

  /* Legal/Text */
  // font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
}
.socials {
  display: inline-flex;
  align-items: flex-start;
  gap: 0.5rem;
}
</style>
