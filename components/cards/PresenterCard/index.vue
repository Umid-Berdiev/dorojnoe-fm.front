<script setup lang="ts">
  defineProps<{
    item: {
      fullname: string;
      profession: string;
      image: string;
    };
  }>();
</script>
<template>
  <div>
    <div class="relative">
      <img
        :srcset="`${item.image} 1x, ${item.image} 2x`"
        alt="Presenter cover image"
        class="rounded-2xl w-full"
      />
      <PrimaryButtonWhite
        v-if="item.profession"
        class="absolute left-2 bottom-3 lg:left-4 lg:bottom-6 font-inter text-xs lg:text-sm py-1 lg:py-1.5 px-2 rounded-lg font-bold"
      >
        {{ item.profession }}
      </PrimaryButtonWhite>
    </div>
    <p class="font-roboto-condensed font-bold mt-3 lg:mt-4">
      {{ item.fullname }}
    </p>
  </div>
</template>

<style scoped lang="scss">
  //
</style>
