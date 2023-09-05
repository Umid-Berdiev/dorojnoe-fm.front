<script setup lang="ts">
  import { PresenterType } from "~/utils/interfaces";

  defineProps<{
    item: PresenterType;
  }>();
</script>

<template>
  <div>
    <div class="relative">
      <img
        :src="item.mainImage?.disk_path?.square?.desktop"
        alt="Presenter cover image"
        class="hidden lg:block rounded-2xl w-full object-none h-[160px] lg:h-[204px]"
        placeholder="/assets/images/placeholder-image.jpg"
      />
      <img
        :src="item.mainImage?.disk_path?.square?.mobile"
        alt="Presenter cover image"
        class="lg:hidden rounded-2xl w-full object-none h-[160px] lg:h-[204px]"
        placeholder="/assets/images/placeholder-image.jpg"
      />
      <PrimaryButtonWhite
        v-show="item.birthPlace"
        class="absolute left-2 bottom-3 lg:left-4 lg:bottom-6 text-xs lg:text-sm py-1 lg:py-1.5 px-2 rounded-lg font-bold"
      >
        {{ item.birthPlace }}
      </PrimaryButtonWhite>
    </div>
    <p class="font-roboto-condensed font-bold mt-3 lg:mt-4">
      {{ item.name }}
    </p>
  </div>
</template>
