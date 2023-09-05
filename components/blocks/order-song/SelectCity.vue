<script lang="ts" setup>
  const currentStep = useLocalStorage("order-song-step", "OrderSong");
</script>

<template>
  <div class="">
    <PrimaryHeading underlined class="mt-8 lg:mt-9">
      Выбрать город
    </PrimaryHeading>
    <div class="text-base leading-6 max-w-[673px]">
      <p>Укажите город, в эфире которого хотите услышать заявку</p>
    </div>
    <div class="mt-6 lg:mt-8">
      <FrequencySelect class="city-select" />
    </div>
    <PrimaryButtonRed
      class="mt-8 lg:mt-12"
      @click="currentStep = 'WriteDownMessage'"
    >
      Далее
    </PrimaryButtonRed>
  </div>
</template>

<style lang="scss">
  .city-select {
    @apply lg:max-w-[500px];

    button {
      @apply rounded-2xl py-[7px];
    }
  }
</style>
