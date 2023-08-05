<script setup lang="ts">
  import IconCamera from "@/components/icons/iconCamera.vue";
  import IconNewspaper from "@/components/icons/iconNewspaper.vue";
  import IconProgram from "@/components/icons/iconProgram.vue";
  import IconGift from "@/components/icons/iconGift.vue";
  import IconMedia from "@/components/icons/iconMedia.vue";
</script>
<template>
  <ul class="space-y-2 font-medium">
    <li>
      <NuxtLink
        to="/"
        class="flex gap-[18px] items-center px-2.5 py-2 text-gray-900 rounded-lg"
      >
        <IconCamera />
        <span>Радиостанция</span>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/"
        class="flex gap-[18px] items-center px-2.5 py-2 text-gray-900 rounded-lg"
      >
        <IconNewspaper />
        <span>Новости</span>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/"
        class="flex gap-[18px] items-center px-2.5 py-2 text-gray-900 rounded-lg"
      >
        <IconProgram />
        <span>Программы</span>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/"
        class="flex gap-[18px] items-center px-2.5 py-2 text-gray-900 rounded-lg"
      >
        <IconGift />
        <span>Акции и события</span>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/"
        class="flex gap-[18px] items-center px-2.5 py-2 text-gray-900 rounded-lg"
      >
        <IconMedia />
        <span>Фото и видео</span>
      </NuxtLink>
    </li>
  </ul>
</template>
