<script setup lang="ts">
  import NewsCardItem from "./NewsCardItem.vue";
  import PrimaryHeading from "@/components/headings/PrimaryHeading.vue";
</script>

<template>
  <div class="container mt-16">
    <PrimaryHeading>Новое на Дорожном радио</PrimaryHeading>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4 gap-y-10 lg:gap-x-6 lg:gap-y-16"
    >
      <template v-for="item in 6">
        <NewsCardItem />
      </template>
    </div>
  </div>
</template>
