<script setup lang="ts">
  //
</script>

<template>
  <div class="news-card-item rounded-2xl">
    <a href="#">
      <img
        srcset="
          @/assets/images/news_cover_photo_1.png 1x,
          @/assets/images/news_cover_photo_1.png 2x
        "
      />
    </a>
    <div class="mt-4">
      <div class="flex flex-row items-start justify-start gap-[0.14rem]">
        <div
          class="relative leading-[0.86rem] text-sm text-main-grey font-semibold"
        >
          Вчера в
        </div>
        <div
          class="relative leading-[0.86rem] text-sm text-main-grey font-semibold"
        >
          9:00
        </div>
      </div>
      <NuxtLink to="/">
        <span class="news-title">
          Экскурсионные маршруты в Перми. Перелёты на гидросамолётах в Таиланде.
          «Сковородоблинные» бегуны в Тюменской области
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .news-card-item {
    .news-title {
      @apply text-lg font-medium leading-6 font-roboto-condensed;
    }

    img {
      width: -webkit-fill-available;
    }
  }
</style>
