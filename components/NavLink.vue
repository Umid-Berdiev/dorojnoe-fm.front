<script setup lang="ts">
import IconCamera from 'assets/icons/iconCamera.vue';
import IconNewspaper from 'assets/icons/iconNewspaper.vue';
import IconProgram from 'assets/icons/iconProgram.vue';
import IconGift from 'assets/icons/iconGift.vue';
import IconMedia from 'assets/icons/iconMedia.vue';

</script>
<template>
  <ul class="space-y-2 font-medium">
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
  </ul>
</template>
