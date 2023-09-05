<script setup lang="ts">
  // import { fetchAllEvents } from "~/utils/api/promotions";

  const isLoading = ref(false);
  // const { data: promotions } = await fetchAllEvents();
  const promotions = ref([
    {
      id: 1,
      mainImage: "/assets/images/mock-images/promotions-card-1.png",
      category: "Конкурс",
      dateTime: "c 17 по 21 апреля 2023",
      title: "«Дорожное радио» приглашает на юбилейное шоу Филиппа Киркорова",
    },
    {
      id: 2,
      mainImage: "/assets/images/mock-images/promotions-card-2.png",
      category: "Событие",
      dateTime: "c 27 по 31 марта 2023 (завершено)",
      title:
        "«Дорожное радио» приглашает на юбилейный концерт Владимира Винокура",
    },
    {
      id: 3,
      mainImage: "/assets/images/mock-images/promotions-card-3.png",
      category: "Конкурс",
      dateTime: "c 13 по 17 марта 2023 (завершено)",
      title: "«Дорожное радио» приглашает на концерт Кубанского казачьего хора",
    },
    {
      id: 4,
      mainImage: "/assets/images/mock-images/promotions-card-4.png",
      category: "Событие",
      dateTime: "c 06 по 10 марта 2023 (завершено)",
      title: "«Дорожное радио» приглашает на концерт SHAMAN",
    },
    {
      id: 5,
      mainImage: "/assets/images/mock-images/promotions-card-5.png",
      category: "Конкурс",
      dateTime: "c 27 февраля по 08 марта 2023 (завершено)",
      title: "За женщин и любовь!",
    },
  ]);
</script>

<template>
  <div class="mt-16">
    <!-- <PrimaryHeading>Новое на Дорожном радио</PrimaryHeading> -->
    <div
      class="grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-x-6 lg:gap-y-12"
    >
      <template v-for="item in promotions">
        <PromotionCardItem :item="item" />
      </template>
    </div>
    <PrimaryButtonRed class="mt-12 lg:mt-16" :loading="isLoading">
      Больше конкурсов
    </PrimaryButtonRed>
  </div>
</template>
