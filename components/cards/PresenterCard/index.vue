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
        :srcset="`${item.mainImage?.disk_path?.square?.desktop} 1x, ${item.mainImage?.disk_path?.square?.desktop} 2x`"
        alt="Presenter cover image"
        class="hidden lg:block rounded-2xl w-full object-none"
      />
      <img
        :srcset="`${item.mainImage?.disk_path?.square?.mobile} 1x, ${item.mainImage?.disk_path?.square?.mobile} 2x`"
        alt="Presenter cover image"
        class="lg:hidden rounded-2xl w-full object-none"
      />
      <PrimaryButtonWhite
        v-show="item.birthPlace"
        class="absolute left-2 bottom-3 lg:left-4 lg:bottom-6 font-inter text-xs lg:text-sm py-1 lg:py-1.5 px-2 rounded-lg font-bold"
      >
        {{ item.birthPlace }}
      </PrimaryButtonWhite>
    </div>
    <p class="font-roboto-condensed font-bold mt-3 lg:mt-4">
      {{ item.name }}
    </p>
  </div>
</template>

<style scoped lang="scss">
  //
</style>
