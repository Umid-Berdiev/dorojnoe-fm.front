<script setup lang="ts">
  import { formatDate } from "@vueuse/core";

  defineProps<{
    item: any;
  }>();
</script>

<template>
  <div class="promotion-card-item">
    <NuxtLink :to="`/promotions/${item.id}`" class="">
      <div class="relative">
        <img
          :srcset="`${item.mainImage} 1x, ${item.mainImage} 2x`"
          class="w-full rounded-2xl"
        />
        <button
          class="absolute left-4 bottom-4 bg-main-black rounded-3xl text-white p-2 text-xs lg:text-sm font-inter"
        >
          {{ item.category }}
        </button>
      </div>
    </NuxtLink>
    <div class="mt-4">
      <p class="relative leading-3 text-sm text-main-grey font-semibold">
        {{ item.dateTime }}
      </p>
      <NuxtLink :to="`/promotions/${item.id}`">
        <h5 class="promotion-title">
          {{ item.title }}
        </h5>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .promotion-card-item {
    .promotion-title {
      @apply text-base lg:text-lg font-bold leading-6 font-roboto-condensed;
    }
  }
</style>
