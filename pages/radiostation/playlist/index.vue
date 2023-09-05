<script lang="ts" setup>
  const options = ref([
    { id: 1, name: "Основной эфир" },
    { id: 2, name: "Танцы по-русски" },
    { id: 3, name: "Рок-клуб" },
    { id: 4, name: "Ностальгия" },
    { id: 5, name: "Кекс. Привет, 90-е!" },
  ]);
  const selectedOption = ref(1);
  const selectedTime = ref("08:00");
</script>

<template>
  <div class="default-container">
    <TheMobileBreadcrumb>Радиостанция</TheMobileBreadcrumb>
    <TheBreadcrumb :path="['Радиостанция', 'Плейлист']" />
    <div class="flex">
      <PrimaryHeading underlined>Плейлист</PrimaryHeading>
      <SearchMIcon class="lg:hidden ml-auto mt-1" />
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-3 mb-6">
      <CustomSelect
        :options="options"
        v-model="selectedOption"
        as-value="id"
        as-label="name"
      />
      <VDatePicker />
      <div class="flex justify-between lg:justify-normal lg:gap-3">
        <VTimePicker v-model="selectedTime" prefix="С" />
        <VTimePicker v-model="selectedTime" prefix="До" />
      </div>
      <SearchInput class="ml-auto hidden lg:block" />
    </div>
    <hr class="text-[#DBDBDB]" />
    <Playlist />
    <NewsCard />
  </div>
</template>

<style scoped lang="scss">
  //
</style>
