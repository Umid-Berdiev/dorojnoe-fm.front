<script lang="ts" setup></script>

<template>
  <li class="py-3 sm:py-4">
    <div class="flex gap-x-2 md:gap-x-4 items-center">
      <img
        class="w-12 h-12 lg:w-18 lg:h-18"
        srcset="
          @/assets/images/playlist_item_1.png 1x,
          @/assets/images/playlist_item_1.png 2x
        "
        alt="image"
      />
      <div class="flex flex-col md:flex-row flex-wrap md:gap-x-5 uppercase">
        <span class="text-sm lg:text-base font-bold text-gray-900 truncate">
          Я тебя люблю, Россия
        </span>
        <span class="text-sm lg:text-base text-gray-500 truncate">SHAMAN</span>
      </div>
      <div class="ml-auto text-gray-900">07:55</div>
    </div>
  </li>
</template>

<style scoped lang="scss">
  .playlist-item {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
</style>
