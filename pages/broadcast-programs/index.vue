<script setup lang="ts">
  import { fetchBroadcastPrograms } from "@/utils/api/broadcastPrograms";
  import { categories } from "@/utils/mockdata/broadcastPrograms";

  const selectedCategoryID = ref<number | null>(null);
  const { data: broadcastPrograms } = await fetchBroadcastPrograms();
</script>

<template>
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
  <section></section>
</template>
