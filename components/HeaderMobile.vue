<script setup lang="ts">
  import { Bars3Icon, XMarkIcon } from "@heroicons/vue/20/solid";

  const burgerMenu = ref(false);
  const toggleBurger = () => {
    burgerMenu.value = !burgerMenu.value;
  };
</script>
<template>
  <header
    class="md:hidden fixed top-0 z-10 p-3 border bg-[#fff] flex items-center justify-between w-full"
  >
    <div class="flex items-center gap-5">
      <NuxtLink to="/">
        <LogoIcon />
      </NuxtLink>
      <div class="flex items-center">
        <StarIcon />
        <div
          class="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-black font-inter text-base"
        >
          Москва
        </div>
      </div>
    </div>
    <div class="header__burger">
      <button type="button" @click="toggleBurger">
        <Bars3Icon />
      </button>
    </div>
  </header>
  <nav
    v-if="burgerMenu"
    class="px-3 py-7 w-full h-screen bg-white fixed top-0 bottom-0 left-0 right-0 z-20 transform transition-transform translate-x-0"
    :class="{ '-translate-x-full': !burgerMenu }"
  >
    <div
      class="flex justify-between items-center mb-8 text-black font-bold font-condensed text-2xl uppercase leading-4"
      @click="burgerMenu = !burgerMenu"
    >
      <h1>Меню</h1>
      <button type="button">
        <XMarkIcon />
      </button>
    </div>
    <div class="vote relative overflow-hidden rounded-md">
      <img
        src="@/public/vote.png"
        class="w-full min-w-[336px] h-14"
        alt="vote-img"
      />
      <button
        type="button"
        class="p-1.5 absolute top-1/4 right-[10%] bg-[#fff] rounded-md text-black font-normal font-inter text-xs leading-normal"
      >
        Голосовать
      </button>
    </div>
    <!-- <ul class="space-y-2 font-medium mt-4">
      <li>
        <NuxtLink
          to="/"
          class="flex gap-[18px] items-center px-2.5 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <IconCamera />
          <span>Радиостанция</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/"
          class="flex gap-[18px] items-center px-2.5 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <IconNewspaper />
          <span>Новости</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/"
          class="flex gap-[18px] items-center px-2.5 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <IconProgram />
          <span>Программы</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/"
          class="flex gap-[18px] items-center px-2.5 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <IconGift />
          <span>Акции и события</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/"
          class="flex gap-[18px] items-center px-2.5 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <IconMedia />
          <span>Фото и видео</span>
        </NuxtLink>
      </li>
    </ul> -->
  </nav>
</template>

<style scoped lang="scss"></style>
