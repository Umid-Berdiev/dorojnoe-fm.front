<script setup lang="ts">
  //
</script>

<template>
  <ul class="space-y-2 font-medium">
    <li>
      <NuxtLink
        to="/"
        class="flex gap-[18px] items-center px-2.5 py-2 text-gray-900 rounded-lg"
      >
        <RadioIcon />
        <span>Радиостанция</span>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/"
        class="flex gap-[18px] items-center px-2.5 py-2 text-gray-900 rounded-lg"
      >
        <NewsIcon />
        <span>Новости</span>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/"
        class="flex gap-[18px] items-center px-2.5 py-2 text-gray-900 rounded-lg"
      >
        <ProgramsIcon />
        <span>Программы</span>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/"
        class="flex gap-[18px] items-center px-2.5 py-2 text-gray-900 rounded-lg"
      >
        <GiftIcon />
        <span>Акции и события</span>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/"
        class="flex gap-[18px] items-center px-2.5 py-2 text-gray-900 rounded-lg"
      >
        <ImageIcon />
        <span>Фото и видео</span>
      </NuxtLink>
    </li>
  </ul>
</template>
