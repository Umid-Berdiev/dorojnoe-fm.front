<script lang="ts" setup>
  const currentStep = useLocalStorage("order-song-step", "OrderSong");
</script>

<template>
  <div class="">
    <PrimaryHeading underlined class="mt-8 lg:mt-9">
      Заказать песню
    </PrimaryHeading>
    <div class="text-base leading-6 max-w-[673px]">
      <p>
        Начните вводить в поле название песни, отрывок из текста песни или имя
        исполнителя.
      </p>
      <p>А затем нажмите в строке нужной песни кнопку «Заказать».</p>
    </div>
    <div class="flex flex-col lg:flex-row lg:items-center mt-6 lg:mt-8 gap-8">
      <div class="w-full lg:max-w-[550px]">
        <SearchInput
          class=""
          placeholder="Название песни, отрывок из текста песни или имя исполнителя"
        />
      </div>
      <div class="lg:ml-auto">
        <label class="flex gap-3 items-center text-base">
          <input type="radio" name="" id="" />
          <span>На усмотрение редакции</span>
        </label>
      </div>
    </div>
    <hr class="border-gainsboro-200 my-8" />
    <NuxtList3>
      <template v-for="song in 7">
        <NuxtList3Item>
          <template #left>
            <img
              class="w-12 h-12 lg:w-18 lg:h-18"
              src="/assets/images/playlist_item_1.png"
              alt="image"
            />
            <div class="ml-2 lg:ml-4 text-sm lg:text-base uppercase space-y-2">
              <p class="font-roboto-condensed font-bold text-black">
                Я тебя люблю, Россия
              </p>
              <p class="font-inter lg:font-montserrat">SHAMAN</p>
            </div>
          </template>
          <template #right>
            <PrimaryButtonWhite
              class="py-2 px-3 lg:py-2.5 lg:px-4 rounded-43xl text-sm lg:text-base text-black"
            >
              Заказать
            </PrimaryButtonWhite>
          </template>
        </NuxtList3Item>
      </template>
    </NuxtList3>
    <PrimaryButtonRed class="mt-8 lg:mt-12" @click="currentStep = 'SelectCity'">
      Далее
    </PrimaryButtonRed>
  </div>
</template>

<style lang="scss" scoped></style>
