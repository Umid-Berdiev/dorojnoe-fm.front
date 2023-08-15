<script setup lang="ts">
  defineProps<{
    media: any;
  }>();
</script>

<template>
  <div class="media-card">
    <img
      :srcset="`${media.photo} 1x, ${media.photo} 2x`"
      alt="Media cover image"
      class="rounded-lg w-full"
    />
    <p class="text-sm text-main-grey font-semibold font-inter mt-4">
      {{ media.date }}
    </p>
    <p
      class="font-roboto-condensed text-base lg:text-lg font-semibold lg:font-bold leading-6"
    >
      {{ media.title }}
    </p>
  </div>
</template>
