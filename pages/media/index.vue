<script setup lang="ts">
  import {
    MediaInterface,
    PaginationType,
    MediaType,
  } from "@/utils/interfaces";
  import {
    fetchAllMedia,
    fetchMediaPhotos,
    fetchMediaVideos,
  } from "~/utils/api/media";
  import { monthOptions } from "~/utils/constants";

  const selectedMonth = ref(null);
  const selectedYear = ref(null);
  const thisYear = new Date().getFullYear();
  const isLoading = ref(false);
  const pageErrors = ref<Error | null>(null);
  const selectedMediaType = ref<MediaType | null>(null);
  const mediaList = ref<MediaInterface[]>([]);
  const pagination = ref<PaginationType>({
    limit: 15,
    page: 1,
    pages: 1,
    total: 15,
  });
  const activeApiFunc = ref(fetchAllData);

  watch(
    selectedMediaType,
    async (newVal) => {
      switch (newVal) {
        case "photo":
          activeApiFunc.value = fetchPhotos;
          break;
        case "video":
          activeApiFunc.value = fetchVideos;
          break;
        default:
          activeApiFunc.value = fetchAllData;
      }

      const params = {
        month: selectedMonth.value,
        year: selectedYear.value,
      };
      const data = await activeApiFunc.value(params);
      mediaList.value = data?.data;
      pagination.value = data?.pagination;
    },
    {
      immediate: true,
    }
  );

  watch([selectedMonth, selectedYear], async ([newVal1, newVal2]) => {
    if (newVal1 && newVal2) {
      const params = {
        month: newVal1,
        year: newVal2,
      };
      mediaList.value = [];
      const data = await activeApiFunc.value(params);
      mediaList.value = data?.data;
      pagination.value = data?.pagination;
    }
  });

  async function fetchAllData(params?: Record<string, string | number | null>) {
    try {
      isLoading.value = true;

      const { data } = await fetchAllMedia(params);

      return data.value;
    } catch (error: any) {
      pageErrors.value = error.value;
    } finally {
      isLoading.value = false;
    }
  }

  async function fetchPhotos(params?: Record<string, string | number | null>) {
    try {
      isLoading.value = true;

      const { data } = await fetchMediaPhotos(params);

      return data.value;
    } catch (error: any) {
      pageErrors.value = error.value;
    } finally {
      isLoading.value = false;
    }
  }

  async function fetchVideos(params?: Record<string, string | number | null>) {
    try {
      isLoading.value = true;

      const { data } = await fetchMediaVideos(params);

      return data.value;
    } catch (error: any) {
      pageErrors.value = error.value;
    } finally {
      isLoading.value = false;
    }
  }

  async function loadMore() {
    try {
      isLoading.value = true;

      const params = {
        month: selectedMonth.value,
        year: selectedYear.value,
        page: pagination.value.page + 1,
      };

      const data = await activeApiFunc.value(params);

      mediaList.value.push(...data?.data);
      pagination.value = data?.pagination;
    } catch (error: any) {
      pageErrors.value = error.value;
    } finally {
      isLoading.value = false;
    }
  }
</script>

<template>
  <div class="default-container">
    <TheMobileBreadcrumb />
    <TheBreadcrumb :path="['Фото и видео']" />
    <PrimaryHeading underlined>Фото и видео</PrimaryHeading>
    <div class="content">
      <div class="flex flex-col lg:flex-row gap-y-8 w-full lg:justify-between">
        <div class="inline-flex gap-3">
          <RadioButton
            v-model="selectedMediaType"
            class="bg-white"
            id="all"
            name="media"
            label="Всё вместе"
            :value="null"
          />
          <RadioButton
            v-model="selectedMediaType"
            class="bg-white"
            id="photo"
            name="media"
            label="Фотографии"
            value="photo"
          />
          <RadioButton
            v-model="selectedMediaType"
            class="bg-white"
            id="video"
            name="media"
            label="Видео"
            value="video"
          />
        </div>
        <div class="inline-flex gap-3 w-full lg:w-auto">
          <CustomSelect
            v-model="selectedMonth"
            class="basis-1/2"
            placeholder="Месяц"
            :options="monthOptions"
          >
          </CustomSelect>
          <CustomSelect
            v-model="selectedYear"
            class="basis-1/2"
            placeholder="Год"
          >
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
        <PrimaryButtonRed :loading="isLoading" @click="loadMore">
          Больше фото и видео
        </PrimaryButtonRed>
      </div>

      <!-- news block -->
      <NewsCard />
    </div>
  </div>
</template>
