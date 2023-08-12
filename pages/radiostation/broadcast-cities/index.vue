<script lang="ts" setup>
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const broadcastCities = ref([
    {
      title: "Абакан",
      frequency: "101,3 FM",
    },
    {
      title: "Адамовка (Оренбургская обл.)",
      frequency: "91,8 FM",
    },
    {
      title: "Акбулак",
      frequency: "101,3 FM",
    },
    {
      title: "Алатырь (Чувашия)",
      frequency: "101,3 FM",
    },
    {
      title: "Алейск",
      frequency: "101,3 FM",
    },
    {
      title: "Абакан",
      frequency: "101,3 FM",
    },
  ]);
</script>

<template>
  <TheMobileBreadcrumb>Радиостанция</TheMobileBreadcrumb>
  <TheBreadcrumb :path="['Радиостанция', 'Города вещания']" />
  <div class="flex flex-col lg:flex-row mb-8 lg:mb-0">
    <PrimaryHeading underlined>Города вещания</PrimaryHeading>
    <!-- <SearchMIcon class="lg:hidden ml-auto mt-1" /> -->
    <SearchInput class="lg:ml-auto" placeholder="Название города" />
  </div>
  <div class="grid lg:grid-cols-2 gap-4 lg:gap-18">
    <div v-for="letter in alphabet">
      <PrimaryHeading>{{ letter }}</PrimaryHeading>
      <NuxtList3>
        <NuxtList3Item v-for="item in broadcastCities">
          <template #left>
            <span>
              <MarkerIcon class="mr-2" />
            </span>
            <span>{{ item.title }}</span>
          </template>
          <template #right>
            <span>{{ item.frequency }}</span>
          </template>
        </NuxtList3Item>
      </NuxtList3>
    </div>
  </div>
</template>

<style scoped lang="scss">
  //
</style>
