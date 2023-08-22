<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-x-6">
    <div class="lg:col-span-2 rounded-[1.25rem]">
      <MainBanner />
    </div>
    <div
      class="secondary-banner rounded-[1.25rem] flex flex-col pb-8 h-[21rem] lg:h-[23.75rem]"
    >
      <div class="flex h-full items-center">
        <SecondaryBanner />
      </div>
      <div class="flex justify-center">
        <button class="vote-top-10">Голосуйте за Топ 10</button>
      </div>
    </div>
  </div>
  <InSocialsBlock />
</template>

<style scoped lang="scss">
  .secondary-banner {
    background: linear-gradient(180deg, #fc283f 0%, #fd576f 100%);

    .vote-top-10 {
      @apply inline-flex py-3 px-5 items-start rounded-3xl bg-white font-montserrat text-base font-bold;
    }
  }
</style>
