<script setup lang="ts">
  const media = ref({
    id: 1,
    title: "Активное долголетие в Ленинградской области",
    date: "31 декабря 2022",
    video: "/assets/images/media_page_grid1_1.png",
    photos: [
      "/assets/images/mediaid_page_grid1_1.png",
      "/assets/images/mediaid_page_grid1_2.png",
      "/assets/images/mediaid_page_grid1_3.png",
      "/assets/images/mediaid_page_grid1_4.png",
      "/assets/images/mediaid_page_grid1_5.png",
      "/assets/images/mediaid_page_grid1_6.png",
      "/assets/images/mediaid_page_grid1_7.png",
    ],
  });

  const isGalleryModalOpen = ref(false);
  const activePhotoIndex = ref(1);

  function openGalleryModal(index: number) {
    activePhotoIndex.value = index;
    isGalleryModalOpen.value = true;
  }
</script>

<template>
  <TheMobileBreadcrumb>Фото и видео</TheMobileBreadcrumb>
  <TheBreadcrumb :path="['Фото и видео', media.title]" />
  <div class="content">
    <div class="flex">
      <p class="py-1.5 px-2.5 bg-white rounded-43xl text-sm leading-[18px]">
        {{ media.date }}
      </p>
    </div>
    <PrimaryHeading class="mt-4">{{ media.title }}</PrimaryHeading>
    <div
      v-if="media.video"
      class="relative mt-2 mb-8 grid grid-cols-1 lg:grid-cols-4 gap-10"
    >
      <div class="col-span-3">
        <ColoredYoutubeIcon
          class="absolute left-[45%] top-[45%] lg:left-[35%] lg:top-[40%] w-8 lg:w-20"
        />
        <img
          :srcset="media.video"
          alt="Media cover image"
          class="w-full rounded-[20px]"
        />
      </div>
      <div class="hidden lg:block lg:basis-1/4">
        <div class="inline-flex flex-col gap-12 w-full">
          <img
            srcset="/assets/images/BG.png 1x, /assets/images/BG.png 2x"
            alt="Advertising"
            class="w-full"
          />
        </div>
      </div>
    </div>
    <div class="hidden lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10">
      <template v-for="(photo, photoIndex) in media.photos">
        <img
          :srcset="`${photo} 1x, ${photo} 2x`"
          alt="Media photo"
          class="w-full rounded-lg"
          @click="openGalleryModal(photoIndex)"
        />
      </template>
    </div>
    <!-- advertising -->
    <div class="lg:hidden advertising-mobile-block mt-8">
      <img
        srcset="
          /assets/images/news_mobile_advertising.png 1x,
          /assets/images/news_mobile_advertising.png 2x
        "
        alt="Advertising"
        class="w-full"
      />
    </div>
  </div>
  <MediaGalleryModal
    v-model:is-open="isGalleryModalOpen"
    :gallery="media.photos"
    :active-index="activePhotoIndex"
  />
</template>
