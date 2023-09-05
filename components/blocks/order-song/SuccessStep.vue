<script lang="ts" setup>
  const currentStep = useLocalStorage("order-song-step", "OrderSong");
</script>

<template>
  <div
    class="flex flex-col items-center lg:max-w-[664px] mx-auto mt-20 lg:mt-32"
  >
    <PrimaryHeading> Успех! </PrimaryHeading>
    <p class="text-center leading-6">
      Мы внимательно послушаем ваше обращение и, если оно проходит по всем
      критериям, поставим в выбранное время на радиостанции
    </p>
    <PrimaryButtonRed class="mt-8 lg:mt-12" @click="currentStep = 'OrderSong'">
      На главную
    </PrimaryButtonRed>
  </div>
</template>
