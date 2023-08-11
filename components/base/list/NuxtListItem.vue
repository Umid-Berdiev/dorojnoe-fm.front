<script lang="ts" setup>
  import { NuxtListItemProps } from "@/utils/interfaces";

  const props = defineProps<{
    item: NuxtListItemProps;
  }>();
</script>

<template>
  <li class="py-3 sm:py-4">
    <div class="flex gap-x-2 md:gap-x-4 items-center">
      <img
        class="w-12 h-12 lg:w-18 lg:h-18"
        srcset="~/assets/images/broadcast_item_1.png"
        alt="image"
      />
      <div class="flex flex-col md:flex-row flex-wrap md:gap-x-5 uppercase">
        <span class="text-sm lg:text-base font-bold text-gray-900 truncate">
          {{ item.title }}
        </span>
        <span class="text-sm lg:text-base text-gray-500 truncate">{{
          item.subtitle
        }}</span>
      </div>
      <div class="ml-auto text-gray-900 text-sm lg:text-base">
        {{ item.right_text }}
      </div>
    </div>
  </li>
</template>
