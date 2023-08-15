<script setup lang="ts">
  import { mediaList } from "@/utils/mockdata/mediaContent";

  const selectedMonth = ref("Январь");
  const monthOptions = ref([
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ]);
  const thisYear = new Date().getFullYear();
  const selectedYear = ref(thisYear);
</script>

<template>
  <TheMobileBreadcrumb />
  <TheBreadcrumb :path="['Фото и видео']" />
  <PrimaryHeading underlined>Фото и видео</PrimaryHeading>
  <div class="content">
    <div class="flex flex-col lg:flex-row gap-y-8 w-full lg:justify-between">
      <div class="inline-flex gap-3">
        <RadioButton id="all" name="media" label="Всё вместе" value="all" />
        <RadioButton id="photo" name="media" label="Фотографии" value="photo" />
        <RadioButton id="video" name="media" label="Видео" value="video" />
      </div>
      <div class="inline-flex gap-3 w-full lg:w-auto">
        <CustomSelect v-model="selectedMonth" class="basis-1/2">
          <CustomSelectOption v-for="opt in monthOptions" :value="opt">
            {{ opt }}
          </CustomSelectOption>
        </CustomSelect>
        <CustomSelect v-model="selectedYear" class="basis-1/2">
          <CustomSelectOption
            v-for="(n, index) in 10"
            :value="thisYear - index"
          >
            {{ thisYear - index }}
          </CustomSelectOption>
        </CustomSelect>
      </div>
    </div>

    <!-- grid -->
    <div
      class="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 gap-y-10 lg:gap-y-12 mt-12"
    >
      <template v-for="(media, mediaIndex) in mediaList">
        <NuxtLink :to="`/media/${media.id}`">
          <MediaCard :media="media" />
        </NuxtLink>
      </template>
    </div>
    <div class="flex mt-12">
      <PrimaryButtonRed>Больше фото и видео</PrimaryButtonRed>
    </div>

    <!-- news block -->
    <NewsCard />
  </div>
</template>
