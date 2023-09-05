<script setup lang="ts">
  import { fetchBroadcastPrograms } from "@/utils/api/broadcastPrograms";
  import { categories } from "@/utils/mockdata/broadcastPrograms";

  const selectedCategoryID = ref<number | null>(null);
  const broadcastPrograms = ref([
    {
      previewImage: "/assets/images/mock-images/broadcast-programs1.png",
      name: "Посиделки на Дорожном радио",
      dateTime: "10:00-11:00 (Сб)",
      digest:
        "Каждую субботу в 10:00 в эфире «Дорожного радио» Никита Леонов будет встречаться со звёздами отечественной эстрады, кино, спорта и другими знаменитостями, чтобы узнать у них последние новости и поговорить по душам.",
    },
    {
      previewImage: "/assets/images/mock-images/broadcast-programs2.png",
      name: "Запаска",
      dateTime: "10:00-11:00 (Сб)",
      digest:
        "Каждую субботу в 10:00 в эфире «Дорожного радио» Никита Леонов будет встречаться со звёздами отечественной эстрады, кино, спорта и другими знаменитостями, чтобы узнать у них последние новости и поговорить по душам.",
    },
  ]);

  const { data } = await fetchBroadcastPrograms();
</script>

<template>
  <div class="default-container">
    <TheMobileBreadcrumb />
    <TheBreadcrumb :path="['Программы эфира']" />
    <PrimaryHeading underlined>Программы эфира</PrimaryHeading>
    <section>
      <!-- mobile version -->
      <div class="lg:hidden">
        <RadioButtonSlider
          :data="categories"
          v-model="selectedCategoryID"
          as-label="name"
          as-value="id"
        />
      </div>
      <!-- desktop version -->
      <div class="hidden lg:flex lg:flex-wrap lg:gap-x-3 lg:gap-y-4">
        <RadioButton
          v-model="selectedCategoryID"
          class="bg-white"
          :id="0"
          name="category"
          :value="null"
        >
          Все
        </RadioButton>
        <template v-for="(item, itemIndex) in categories" :key="itemIndex">
          <RadioButton
            v-model="selectedCategoryID"
            class="bg-white"
            :id="item.id"
            name="category"
            :value="item.id"
          >
            {{ item.name }}
          </RadioButton>
        </template>
      </div>
    </section>
    <section class="mt-16">
      <div class="flex flex-col gap-12 lg:gap-28">
        <template v-for="item in broadcastPrograms">
          <BroadcastProgramDetails :data="item" />
        </template>
      </div>
    </section>
  </div>
</template>
