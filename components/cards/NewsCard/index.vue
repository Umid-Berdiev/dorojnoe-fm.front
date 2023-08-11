<script setup lang="ts">
  import NewsCardItem from "./NewsCardItem.vue";

  const data = ref([
    {
      title: "Путешествие с удовольствием",
      body: 'Экскурсионные маршруты в Перми. Перелёты на гидросамолётах в Таиланде. "Сковородоблинные" бегуны в Тюменской области',
      date: "Вчера в 9:00",
      image: "/assets/images/news_cover_photo_1.png",
    },
    {
      title: "Путешествие с удовольствием",
      body: 'Экскурсионные маршруты в Перми. Перелёты на гидросамолётах в Таиланде. "Сковородоблинные" бегуны в Тюменской области',
      date: "Вчера в 9:00",
      image: "/assets/images/news_cover_photo_2.png",
    },
    {
      title: "Путешествие с удовольствием",
      body: 'Экскурсионные маршруты в Перми. Перелёты на гидросамолётах в Таиланде. "Сковородоблинные" бегуны в Тюменской области',
      date: "Вчера в 9:00",
      image: "/assets/images/news_cover_photo_3.png",
    },
    {
      title: "Путешествие с удовольствием",
      body: 'Экскурсионные маршруты в Перми. Перелёты на гидросамолётах в Таиланде. "Сковородоблинные" бегуны в Тюменской области',
      date: "Вчера в 9:00",
      image: "/assets/images/news_cover_photo_2.png",
    },
    {
      title: "Путешествие с удовольствием",
      body: 'Экскурсионные маршруты в Перми. Перелёты на гидросамолётах в Таиланде. "Сковородоблинные" бегуны в Тюменской области',
      date: "Вчера в 9:00",
      image: "/assets/images/news_cover_photo_1.png",
    },
    {
      title: "Путешествие с удовольствием",
      body: 'Экскурсионные маршруты в Перми. Перелёты на гидросамолётах в Таиланде. "Сковородоблинные" бегуны в Тюменской области',
      date: "Вчера в 9:00",
      image: "/assets/images/news_cover_photo_3.png",
    },
  ]);
</script>

<template>
  <div class="mt-16">
    <PrimaryHeading>Новое на Дорожном радио</PrimaryHeading>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4 gap-y-10 lg:gap-x-6 lg:gap-y-16"
    >
      <template v-for="item in data">
        <NewsCardItem :item="item" />
      </template>
    </div>
  </div>
</template>
