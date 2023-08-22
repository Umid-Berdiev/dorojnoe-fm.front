<template>
  <div class="left-block flex-none">
    <div class="logo w-full text-center">
      <NuxtLink to="/" class="inline-flex">
        <LogoIcon />
      </NuxtLink>
    </div>
    <RadioPlayer />
    <div class="vote">
      <button type="button">Голосовать</button>
    </div>
    <SidebarMenu class="mt-3" />
  </div>
</template>

<style scoped lang="scss">
  .left-block {
    @apply pt-4 pr-4 pl-6 lg:w-[280px];

    .vote {
      background-image: url("/assets/images/zvezdy_dorojnogo_radio.png");
      @apply mt-6 flex w-full max-w-[200px] justify-end bg-no-repeat p-3.5 rounded-lg;

      button {
        @apply p-1 rounded-md bg-white font-inter text-xs;
      }
    }
  }
</style>
