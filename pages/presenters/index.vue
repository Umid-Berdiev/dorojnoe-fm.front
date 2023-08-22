<script setup lang="ts">
  const { data: presenters } = await fetchPresenters();
</script>

<template>
  <TheMobileBreadcrumb />
  <TheBreadcrumb :path="['Ведущие']" />
  <PrimaryHeading underlined>Ведущие</PrimaryHeading>
  <div class="content">
    <div
      class="grid grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-10 gap-y-8 lg:gap-y-12"
    >
      <NuxtLink
        v-for="item in presenters.data"
        :key="item.id"
        :to="`/presenters/${item.id}`"
      >
        <PresenterCard :item="item" />
      </NuxtLink>
    </div>
    <!-- <PrimaryHeading class="mt-16 lg:mt-24"
      >Новое на Дорожном радио</PrimaryHeading
    > -->
    <NewsCard />
  </div>
</template>
