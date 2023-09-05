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
  const currentStep = useLocalStorage("order-song-step", "OrderSong");

  async function handleOrder() {
    console.log("ordering completed");
    currentStep.value = "SuccessStep";
  }
</script>

<template>
  <div class="">
    <PrimaryHeading underlined class="mt-8 lg:mt-9">
      Когда исполнить
    </PrimaryHeading>
    <div class="text-base leading-6 max-w-[673px]">
      <p>Выберите день и время</p>
    </div>

    <div class="flex flex-col lg:flex-row mt-8 gap-3">
      <CustomSelect
        :options="options"
        v-model="selectedOption"
        as-value="id"
        as-label="name"
      />
      <VDatePicker />
      <div class="inline-flex justify-between lg:justify-normal lg:gap-3">
        <VTimePicker v-model="selectedTime" prefix="С" />
        <VTimePicker v-model="selectedTime" prefix="До" />
      </div>
    </div>

    <PrimaryButtonRed class="mt-8 lg:mt-12" @click="handleOrder">
      Далее
    </PrimaryButtonRed>
  </div>
</template>

<style lang="scss" scoped></style>
