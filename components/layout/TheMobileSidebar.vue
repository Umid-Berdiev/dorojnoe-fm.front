<script setup lang="ts">
  import { initDrawers } from "flowbite";

  onMounted(() => {
    initDrawers();
  });
</script>

<template>
  <header class="mobile-header-wrapper">
    <LogoIcon class="w-18 h-[60px]" />
    <div class="ml-6 flex items-center gap-2">
      <StarIcon />
      <span class="font-inter text-base font-bold">Москва</span>
    </div>
    <button
      type="button"
      class="ml-auto"
      data-drawer-target="drawer-navigation"
      data-drawer-show="drawer-navigation"
      aria-controls="drawer-navigation"
    >
      <HumburgerIcon class="w-8 h-8" />
    </button>
  </header>
  <div
    id="drawer-navigation"
    class="flex flex-col fixed lg:hidden top-0 left-0 z-50 w-full h-screen py-6 px-3 overflow-y-auto transition-transform -translate-x-full duration-300 bg-white"
    tabindex="-1"
    aria-labelledby="drawer-navigation-label"
  >
    <div class="flex">
      <h5
        id="drawer-navigation-label"
        class="font-roboto-condensed text-lg font-bold uppercase"
      >
        Menu
      </h5>

      <button
        type="button"
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation"
        class="bg-transparent p-0 ml-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12 13.4142L18.2929 19.7071C18.6835 20.0976 19.3166 20.0976 19.7072 19.7071C20.0977 19.3166 20.0977 18.6834 19.7072 18.2929L13.4142 12L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L12 10.5858L5.70716 4.29289C5.31663 3.90237 4.68347 3.90237 4.29294 4.29289C3.90242 4.68342 3.90242 5.31658 4.29294 5.70711L10.5858 12L4.29289 18.2929Z"
            fill="#222222"
          />
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
    </div>

    <div class="vote">
      <button type="button">Голосовать</button>
    </div>

    <div class="flex items-center mt-6">
      <div class="">
        <p class="singer-fullname">Владимир Пресняков</p>
        <p class="song-title">Синяя птица</p>
      </div>
      <LikeIcon class="ml-auto" />
    </div>

    <MobileVerticalMenu />

    <BottomPlayer />
  </div>
</template>

<style scoped lang="scss">
  .mobile-header-wrapper {
    @apply flex items-center lg:hidden w-full h-auto bg-white p-3;
  }

  .vote {
    background-image: url("/assets/images/zvezdy_dorojnogo_radio.png");
    @apply mt-9 flex w-full justify-end bg-no-repeat p-4 rounded-lg bg-cover;

    button {
      @apply p-1.5 rounded-md bg-white font-inter text-xs;
    }
  }

  .singer-fullname {
    color: #9d9d9d;
    font-size: 10px;
  }

  .song-title {
    font-size: 16px;
    font-weight: 900;
  }
</style>
