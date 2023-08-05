<script lang="ts" setup></script>

<template>
  <li class="py-3 sm:py-4">
    <div class="flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img
          class="w-18 h-18"
          src="@/assets/images/playlist_item_1.png"
          alt="image"
        />
      </div>
      <div class="flex-1 min-w-0 uppercase">
        <span class="text-sm font-bold text-gray-900 truncate"
          >Я тебя люблю, Россия</span
        >
        <span class="ml-5 text-sm text-gray-500 truncate">SHAMAN</span>
      </div>
      <div class="inline-flex items-center text-base text-gray-900">07:55</div>
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
