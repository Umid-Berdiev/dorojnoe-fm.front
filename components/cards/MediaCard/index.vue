<script setup lang="ts">
  import { MediaInterface } from "~/utils/interfaces";
  import { formatDate } from "@vueuse/core";

  const props = defineProps<{
    media: MediaInterface;
  }>();

  const coverMobileImage = ref("");
  const coverDesktopImage = ref("");

  watchEffect(() => {
    if (props.media?.mainImage?.disk_path.image) {
      coverDesktopImage.value = props.media?.mainImage?.disk_path.image;
      coverMobileImage.value = props.media?.mainImage?.disk_path.image;
    }
    if (props.media?.mainImage?.disk_path.horizontal?.desktop)
      coverDesktopImage.value =
        props.media?.mainImage?.disk_path.horizontal?.desktop;
    if (props.media?.mainImage?.disk_path.horizontal?.mobile)
      coverMobileImage.value =
        props.media?.mainImage?.disk_path.horizontal?.mobile;
  });
</script>

<template>
  <div class="media-card">
    <img
      :src="coverDesktopImage"
      :alt="media.name"
      class="hidden lg:inline-block rounded-lg w-full"
    />
    <img
      :src="coverMobileImage"
      :alt="media.name"
      class="lg:hidden rounded-lg w-full"
    />
    <p class="text-sm text-main-grey font-semibold font-inter mt-4">
      {{
        formatDate(new Date(media.publishDate), "DD MMMM YYYY", {
          locales: "ru-RU",
        })
      }}
    </p>
    <p
      class="font-roboto-condensed text-base lg:text-lg font-semibold lg:font-bold leading-6"
    >
      {{ media.name }}
    </p>
  </div>
</template>
